create extension if not exists pgcrypto;

create table if not exists public.website_leads (
  id uuid primary key default gen_random_uuid(),
  submitted_at timestamptz not null default now(),
  need text not null default '',
  goal text not null default '',
  stage text not null default '',
  budget text not null default '',
  timeline text not null default '',
  full_name text not null default '',
  email text not null default '',
  phone text not null default '',
  company text,
  website text,
  message text,
  score integer not null default 0,
  band text not null default 'Nurture',
  source text not null default 'bluvo.studio/get-started',
  page_path text not null default '/get-started'
);

-- Safe for an existing website_leads table: add only missing columns.
alter table public.website_leads add column if not exists budget text not null default '';
alter table public.website_leads add column if not exists timeline text not null default '';
alter table public.website_leads add column if not exists full_name text not null default '';
alter table public.website_leads add column if not exists email text not null default '';
alter table public.website_leads add column if not exists phone text not null default '';
alter table public.website_leads add column if not exists company text;
alter table public.website_leads add column if not exists website text;
alter table public.website_leads add column if not exists message text;
alter table public.website_leads add column if not exists score integer not null default 0;
alter table public.website_leads add column if not exists band text not null default 'Nurture';
alter table public.website_leads add column if not exists source text not null default 'bluvo.studio/get-started';
alter table public.website_leads add column if not exists page_path text not null default '/get-started';

create index if not exists website_leads_submitted_at_idx on public.website_leads (submitted_at desc);
create index if not exists website_leads_band_idx on public.website_leads (band);
create index if not exists website_leads_email_idx on public.website_leads (email);

alter table public.website_leads enable row level security;

-- No public INSERT/SELECT policy is created intentionally.
-- The Next.js /api/leads route uses SUPABASE_SERVICE_ROLE_KEY server-side.
