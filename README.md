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

## Environment variables

- `DATABASE_URL` and the related `PG*`, `POSTGRES_*`, and `DB_*` variables configure Neon/Postgres access.
- `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` provide blog and portfolio content.
- `CONTENTFUL_ENVIRONMENT` defaults to `master`.
- `NOTION_API_TOKEN` and `NOTION_DATABASE_ID` provide the links page.
- `MAILCHIMP_ENDPOINT` enables newsletter subscriptions.
- `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_META_PIXEL_ID` configure analytics.
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET` protect the audit admin page with a signed, HTTP-only session cookie.

The free website audit form submits to the local `/api/audit` Next.js route,
which stores requests in the configured Postgres database.

The administrator can sign in at `/admin/login/` and view all submissions at `/admin/audits/`.

Variables without the `NEXT_PUBLIC_` prefix are server-only. Never commit `.env.local` or expose server credentials to client-side code.
