# VantLaunch

VantLaunch is a micro-SaaS studio building focused software for operational businesses. The current portfolio is centered on automotive SaaS products, led by TeraMotors, a live workshop management platform for repair shops.

## Products

### TeraMotors

TeraMotors is a live SaaS product for auto repair workshops. It helps shops manage customers, vehicles, job cards, inspections, invoices, reports, bookings, and daily workshop operations from one workspace.

### Gari

Gari is a coming-soon automotive service platform focused on transparent customer-to-workshop workflows, including booking, inspection, quote approval, payment, and vehicle handover flows.

## What This Website Does

- Presents VantLaunch as the product studio behind TeraMotors and Gari
- Shows real product screens, pricing, demo media, and product evidence
- Routes visitors to TeraMotors registration and checkout
- Provides privacy, terms, refund, cancellation, and contact information
- Captures qualified leads through a contact form
- Hosts product pages under `/work/teramotors` and `/work/gari`

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend for contact email delivery
- Vercel Analytics and Speed Insights

## Local Development

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```bash
RESEND_API_KEY=your_resend_api_key
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Contact Flow

The contact form in `app/actions/contact.ts` sends:

- A confirmation email to the visitor
- A lead notification email to `build@vantlaunch.com`

For production, make sure `RESEND_API_KEY` is configured in the deployment environment and the sending domain is verified in Resend.

## Project Structure

```text
app/
  page.tsx                    # Homepage composition
  components/sections/        # Homepage sections
  components/ProjectOverlay.tsx
  actions/contact.ts          # Lead/contact server action
  work/teramotors/            # TeraMotors product page
  work/gari/                  # Gari product page
  privacy/                    # Privacy policy
  terms/                      # Terms and policy pages
public/
  media/                      # Product screenshots and demo assets
```

## Deployment

This project is optimized for Vercel.

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add `RESEND_API_KEY` to environment variables.
4. Deploy.

## Status

TeraMotors is live and usable. Gari is in development and presented as a coming-soon product.
