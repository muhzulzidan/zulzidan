# Zulzidan

The Zulzidan portfolio and marketing site, built with the Next.js App Router, Contentful, Notion, and Tailwind CSS.

## Local development

1. Use the Node version declared in `.nvmrc`.
2. Copy `.env.example` to `.env.local` and provide the CMS credentials.
3. Install dependencies with `npm install`.
4. Start the development server with `npm run dev`.

## Environment variables

- `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` provide blog and portfolio content.
- `CONTENTFUL_ENVIRONMENT` defaults to `master`.
- `NOTION_API_TOKEN` and `NOTION_DATABASE_ID` provide the links page.
- `MAILCHIMP_ENDPOINT` enables newsletter subscriptions.
- `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_META_PIXEL_ID` configure analytics.

CMS credentials are server-only and must never be committed.
