import nodemailer from "nodemailer";

const engagementTypes = new Set([
  "Contract Staffing",
  "Contract-to-Hire",
  "Direct Hire / Permanent",
  "Specialized Technical Advisory",
]);
const emailPattern = /^[^\s<>(),;:\\"]+@[^\s<>(),;:\\"]+\.[^\s<>(),;:\\"]+$/;
const attempts = new Map<string, { count: number; expires: number }>();
const windowMs = 15 * 60 * 1000;

function responseError(error: string, status: number) {
  return Response.json({ error }, { status });
}

// Best-effort, per-process protection. A shared limiter is needed across replicas.
function rateLimited(email: string, ip: string | null) {
  const now = Date.now();
  for (const [key, value] of attempts) {
    if (value.expires <= now) attempts.delete(key);
  }
  const keys = ["all", `email:${email.toLowerCase()}`];
  if (ip) keys.push(`ip:${ip.slice(0, 100)}`);
  if (keys.some((key) => (attempts.get(key)?.count ?? 0) >= (key === "all" ? 40 : 5))) {
    return true;
  }
  for (const key of keys) {
    const value = attempts.get(key) ?? { count: 0, expires: now + windowMs };
    value.count += 1;
    attempts.set(key, value);
  }
  return false;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return responseError("Please submit the inquiry from our website.", 403);
  }
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return responseError("Please submit a valid inquiry.", 415);
  }

  let data: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return responseError("Please complete the required fields.", 400);
    const decoder = new TextDecoder("utf-8", { fatal: true });
    let size = 0;
    let body = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 32_768) {
        await reader.cancel();
        return responseError("Your inquiry is too long. Please shorten it.", 413);
      }
      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return responseError("Please submit a valid inquiry.", 400);
    }
    data = parsed as Record<string, unknown>;
  } catch {
    return responseError("Please submit a valid inquiry.", 400);
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const company = typeof data.company === "string" ? data.company.trim() : "";
  const engagementType = typeof data.engagementType === "string" ? data.engagementType : "";
  const requirements = typeof data.requirements === "string" ? data.requirements.trim() : "";

  if (data.website) return responseError("Unable to submit this inquiry.", 400);
  if (!name || name.length > 100 || /[\r\n\x00-\x1f]/.test(name)) {
    return responseError("Please enter your name (up to 100 characters).", 400);
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return responseError("Please enter a valid work email address.", 400);
  }
  if (company.length > 150 || /[\r\n\x00-\x1f]/.test(company)) {
    return responseError("Please enter a company name of up to 150 characters.", 400);
  }
  if (!engagementTypes.has(engagementType)) {
    return responseError("Please choose a valid engagement model.", 400);
  }
  if (!requirements || requirements.length > 5000) {
    return responseError("Please describe your hiring requirement (up to 5,000 characters).", 400);
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE === undefined ? port === 465 : process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_TO;
  if (!host || !user || !pass || !recipient || !emailPattern.test(user) ||
      !emailPattern.test(recipient) || !Number.isInteger(port) || port < 1 || port > 65535 ||
      (process.env.SMTP_SECURE !== undefined && !["true", "false"].includes(process.env.SMTP_SECURE))) {
    return responseError("Inquiries are temporarily unavailable. Please email our team directly.", 503);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? null;
  if (rateLimited(email, ip)) {
    return Response.json(
      { error: "Too many inquiries. Please try again in 15 minutes or email our team directly." },
      { status: 429, headers: { "Retry-After": "900" } },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: !secure,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    dnsTimeout: 10_000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  try {
    const result = await transporter.sendMail({
      from: { name: "Averon Technologies Website", address: user },
      to: recipient,
      replyTo: { name, address: email },
      subject: `Hiring inquiry: ${engagementType}`,
      text: [
        "New hiring inquiry from the Averon Technologies website",
        "",
        `Name: ${name}`,
        `Work email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Engagement model: ${engagementType}`,
        "",
        "Hiring requirement / tech stack:",
        requirements,
      ].join("\n"),
    });
    if (!result.accepted.some((address) => String(address).toLowerCase() === recipient.toLowerCase())) {
      throw new Error("Recipient was not accepted");
    }
    return Response.json({ success: true });
  } catch {
    // Keep SMTP credentials and inquiry details out of logs and public responses.
    console.error("Hiring inquiry email could not be sent.");
    return responseError("Your inquiry could not be sent. Please try again or email our team directly.", 502);
  } finally {
    transporter.close();
  }
}
