import assert from "node:assert/strict";
import { afterEach, beforeEach, mock, test } from "node:test";
import nodemailer from "nodemailer";
import { POST } from "../src/app/api/contact/route.ts";

const originalEnv = { ...process.env };
let messages;
let smtpOptions;
let nextSend;
let closed;
let sequence = 0;

beforeEach(() => {
  Object.assign(process.env, {
    SMTP_HOST: "smtp.example.com", SMTP_PORT: "465", SMTP_SECURE: "true",
    SMTP_USER: "website@example.com", SMTP_PASS: "test-only-password",
    CONTACT_TO: "desk@example.com",
  });
  messages = [];
  closed = false;
  nextSend = async () => ({ accepted: ["desk@example.com"], rejected: [] });
  mock.method(nodemailer, "createTransport", (options) => {
    smtpOptions = options;
    return {
      sendMail: async (message) => { messages.push(message); return nextSend(); },
      close: () => { closed = true; },
    };
  });
  mock.method(console, "error", () => {});
});

afterEach(() => {
  mock.restoreAll();
  for (const key of ["SMTP_HOST", "SMTP_PORT", "SMTP_SECURE", "SMTP_USER", "SMTP_PASS", "CONTACT_TO"]) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});

function inquiry(overrides = {}) {
  return {
    name: "  Jane Doe  ", email: `visitor${++sequence}@example.com`, phone: "+1 (555) 123-4567",
    desiredRole: "Frontend Developer", skillsExperience: "React and TypeScript, two years of experience.",
    website: "", ...overrides,
  };
}

function request(data, overrides = {}) {
  return new Request("https://averontechnologiesllc.com/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: "https://averontechnologiesllc.com" },
    body: JSON.stringify(data), ...overrides,
  });
}

test("sends all fields to the configured desk, with the visitor as Reply-To only", async () => {
  const payload = inquiry({ to: "attacker@example.com", from: "spoof@example.com" });
  const response = await POST(request(payload));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(messages[0].to, "desk@example.com");
  assert.equal(messages[0].from.address, "website@example.com");
  assert.deepEqual(messages[0].replyTo, { name: "Jane Doe", address: payload.email });
  assert.equal(messages[0].subject, `Candidate details: ${payload.desiredRole}`);
  assert.ok(messages[0].text.includes(payload.skillsExperience));
  assert.ok(messages[0].text.includes(payload.phone));
  assert.ok(messages[0].text.includes(`Email: ${payload.email}`));
  assert.ok(!/Company:|Engagement model:|Hiring requirement|Work email:/.test(messages[0].text));
  assert.equal(smtpOptions.secure, true);
  assert.equal(smtpOptions.port, 465);
  assert.equal(smtpOptions.tls?.rejectUnauthorized, undefined);
  assert.equal(closed, true);
});

test("accepts personal email and omitted optional candidate fields without company details", async () => {
  const response = await POST(request({
    name: "New Candidate", email: "newcandidate@gmail.com", desiredRole: "Junior Developer",
  }));
  assert.equal(response.status, 200);
  assert.ok(messages[0].text.includes("Phone: Not provided"));
  assert.ok(messages[0].text.includes("Skills & experience:\nNot provided"));
});

test("does not report success before SMTP accepts the inquiry", async () => {
  let release;
  let entered;
  const started = new Promise((resolve) => { entered = resolve; });
  nextSend = () => { entered(); return new Promise((resolve) => { release = resolve; }); };
  let finished = false;
  const response = POST(request(inquiry())).then((result) => { finished = true; return result; });
  await started;
  assert.equal(finished, false);
  release({ accepted: ["desk@example.com"] });
  assert.equal((await response).status, 200);
});

test("SMTP authentication/network errors return failure without leaking credentials", async () => {
  nextSend = async () => { throw new Error("SMTP auth test-only-password failed"); };
  const response = await POST(request(inquiry()));
  assert.equal(response.status, 502);
  const body = await response.text();
  assert.ok(!body.includes("test-only-password"));
  assert.ok(!body.includes('"success":true'));
  assert.equal(closed, true);
});

test("a rejected recipient never produces success", async () => {
  nextSend = async () => ({ accepted: [], rejected: ["desk@example.com"] });
  assert.equal((await POST(request(inquiry()))).status, 502);
});

test("missing SMTP credentials fail before any send", async () => {
  delete process.env.SMTP_PASS;
  assert.equal((await POST(request(inquiry()))).status, 503);
  assert.equal(messages.length, 0);
});

test("required fields, malformed emails and header injection are rejected", async () => {
  for (const invalid of [
    { name: "  " }, { email: "invalid" }, { email: "a@example.com\r\nBcc: other@example.com" },
    { name: "Name\r\nBcc: other@example.com" }, { desiredRole: "  " },
    { desiredRole: "x".repeat(151) }, { desiredRole: "Developer\r\nBcc: other@example.com" },
    { skillsExperience: "x".repeat(5001) }, { skillsExperience: 123 },
    { phone: "x".repeat(31) }, { phone: "not a phone" }, { phone: "123\r\nBcc: other@example.com" },
    { phone: "+()" }, { phone: 123 },
  ]) {
    assert.equal((await POST(request(inquiry(invalid)))).status, 400);
  }
  assert.equal(messages.length, 0);
});

test("cross-origin submissions and honeypot submissions do not send mail", async () => {
  const crossOrigin = request(inquiry(), {
    headers: { "Content-Type": "application/json", Origin: "https://unrelated.example" },
  });
  assert.equal((await POST(crossOrigin)).status, 403);
  assert.equal((await POST(request(inquiry({ website: "spam.example" })))).status, 400);
  assert.equal(messages.length, 0);
});

test("invalid JSON, arrays, content types and oversized bodies are rejected", async () => {
  assert.equal((await POST(request({}, { body: "{" }))).status, 400);
  assert.equal((await POST(request([]))).status, 400);
  assert.equal((await POST(request({}, { headers: { "Content-Type": "text/plain" } }))).status, 415);
  assert.equal((await POST(request({}, { body: "x".repeat(32769) }))).status, 413);
  assert.equal(messages.length, 0);
});

test("repeat submissions are limited before SMTP", async () => {
  const payload = inquiry();
  for (let i = 0; i < 5; i += 1) assert.equal((await POST(request(payload))).status, 200);
  const response = await POST(request(payload));
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("Retry-After"), "900");
  assert.equal(messages.length, 5);
});

test("port 587 uses mandatory STARTTLS", async () => {
  process.env.SMTP_PORT = "587";
  process.env.SMTP_SECURE = "false";
  assert.equal((await POST(request(inquiry()))).status, 200);
  assert.equal(smtpOptions.secure, false);
  assert.equal(smtpOptions.requireTLS, true);
});
