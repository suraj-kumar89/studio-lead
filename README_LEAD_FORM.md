# Bluvo Studio — Get Started Lead Form

This version keeps the existing Bluvo Studio frontend and adds a native `/get-started` route instead of rewriting to the old `web-form-blush.vercel.app` project.

## Flow

`/get-started` → `POST /api/leads` → Supabase `website_leads` → Resend notification

Meta Pixel and GTM are loaded in `app/layout.tsx`. A `Lead` Meta event and `generate_lead` GTM event fire after a successful API response.

## 1. Supabase

Run `supabase/migrations/001_create_website_leads.sql` in the Supabase SQL editor. It is written to work with an existing `website_leads` table and adds missing columns.

## 2. Local environment

Copy `.env.local.example` to `.env.local` and fill in:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `NOTIFICATION_EMAIL`
- `FROM_EMAIL`

Never use the service-role key in a `NEXT_PUBLIC_*` variable.

## 3. Resend

`FROM_EMAIL` must use a sender/domain that is verified in Resend. `NOTIFICATION_EMAIL` receives the new-lead notification. The customer's email is used as `reply_to`.

## 4. Deploy

Add the same server environment variables to the Vercel project, deploy, then test:

- `https://YOUR-VERCEL-DOMAIN/get-started`
- submit a test lead
- confirm the row in `website_leads`
- confirm the Resend email
- confirm the Meta/GTM conversion event

## 5. Existing domain

Because the form is now inside this Next.js project, do not use a rewrite to `web-form-blush.vercel.app`. Keep `next.config.ts` empty and let the native `app/get-started/page.tsx` route handle `/get-started`.
