# VantLaunch

A production-style company site for VantLaunch, a micro-SaaS studio focused on operational businesses, starting with automotive software.

## What This Includes

- Landing page sections for owned products, positioning, process, and contact
- Product routes for TeraMotors and Gari under `/work/*`
- Interactive project overlay from the homepage
- Lead qualification form wired to a server action and Resend email delivery
- SEO metadata and Open Graph setup on project pages

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript 5
- Tailwind CSS v4
- Framer Motion
- Resend (contact email)
- Vercel Analytics + Speed Insights

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local`:

```bash
RESEND_API_KEY=your_resend_api_key
```

3. Run dev server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Quality Checks

```bash
npm run lint
npm run build
```

## Contact Email Flow

`app/actions/contact.ts` sends:

- Confirmation email to the visitor
- Notification email to `build@vantlaunch.com`

Before production deployment, ensure:

- `RESEND_API_KEY` is set in Vercel environment variables
- Sending domain for `noreply@vantlaunch.com` is verified in Resend

## Project Structure

- `app/page.tsx` homepage composition
- `app/components/sections/*` landing sections
- `app/components/ProjectOverlay.tsx` in-page case-study overlay
- `app/work/*` standalone project pages
- `app/actions/contact.ts` contact server action

## Deployment

Optimized for Vercel:

1. Push repo to GitHub
2. Import project in Vercel
3. Add environment variables (`RESEND_API_KEY`)
4. Deploy
