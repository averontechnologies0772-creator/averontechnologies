This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Candidate details email

The home page popup collects the candidate's name, email, preferred role, required
phone number, and optional skills and experience. It posts to `/api/contact`, which sends a plain-text email to
`CONTACT_TO` using Nodemailer and the configured SMTP mailbox. The visitor's email
is set as Reply-To. The form reports success only after SMTP accepts the recipient.

Copy `.env.example` to `.env.local` and set the mailbox password. Keep `.env.local`
out of Git. Set the same variables in the production host's server environment and
restart/redeploy the Node.js app; this endpoint does not work on static-only hosting.
Hostinger Email uses `smtp.hostinger.com`, port `465`, and `SMTP_SECURE=true`.

The endpoint validates fields, caps request size, checks browser origin, and uses a
honeypot and basic per-process rate limits. For multiple server instances, use a
shared rate limiter or hosting-level protection. SMTP acceptance is not a guarantee
of inbox placement; verify delivery with a real inquiry after deployment.

Run the isolated API tests with `node --test tests/contact.test.mjs` (Node 22.18+).
The tests mock SMTP and do not send email.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
