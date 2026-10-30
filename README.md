# Zulzidan

The Zulzidan portfolio and marketing site, built with the Next.js App Router, Contentful, Notion, and Tailwind CSS.

## Local development

1. Use the Node version declared in `.nvmrc`.
2. Copy `.env.example` to `.env.local` and provide the required credentials.
3. Install dependencies with `npm install`.
4. Start the development server with `npm run dev`.

Before accepting website audit requests, create the database table:

```bash
npm run db:migrate:audit
```

Before accepting Digital Team fit-call requests, create its table:

```bash
npm run db:migrate:inquiries
```

## Environment variables

- `DATABASE_URL` and the related `PG*`, `POSTGRES_*`, and `DB_*` variables configure Neon/Postgres access.
- `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` provide blog and portfolio content.
- `CONTENTFUL_ENVIRONMENT` defaults to `master`.
- `NOTION_API_TOKEN` and `NOTION_DATABASE_ID` provide the links page.
- `MAILCHIMP_ENDPOINT` enables newsletter subscriptions.
- `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_META_PIXEL_ID` configure analytics.
- `NEXT_PUBLIC_BOOKING_URL` optionally sends qualified leads directly to your public scheduling page after intake. When omitted, the confirmation promises a booking link by email.
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET` protect the audit admin page with a signed, HTTP-only session cookie.

The free website audit form submits to the local `/api/audit` Next.js route,
which stores requests in the configured Postgres database.

The administrator can sign in at `/admin/login/` and view project enquiries at `/admin/inquiries/` or website audits at `/admin/audits/`.

## Free website waitlist

The homepage and `/free-website/` accept applications for the free one-page website program. Set the server-only `LEADS_DATABASE_URL` to the shared Zulzidan Leads Postgres database and run `npm run db:migrate:waitlist`. New applicants appear as pro bono collaborations in the tracker; existing contacts are linked without overwriting their records. Review applications, record referral outcomes, and export CSV at `/admin/waitlist/` with the existing admin login.

Without the waitlist environment settings at build time, visitors can apply through a prefilled email link. Those email applications need manual entry in the tracker. Configure the settings and redeploy to enable automatic capture. See [funnel setup, measurement, and verification](docs/waitlist-funnel.md). No confirmation email or outreach is sent automatically.

Variables without the `NEXT_PUBLIC_` prefix are server-only. Never commit `.env.local` or expose server credentials to client-side code.

## Marketing campaign workspaces

- [Starter Sprint Meta campaign](./marketing/starter-sprint-meta/README.md) — strategy, creative production, launch readiness, measurement, and performance trackers for Instagram and Facebook.
