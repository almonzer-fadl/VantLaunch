import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAILS } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Terms — VantLaunch",
  description: "Terms for using VantLaunch websites and product communications.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-zinc px-6 py-16 text-zinc-200">
      <article className="mx-auto max-w-3xl space-y-6">
        <Link href="/" className="text-sm font-semibold text-white/80 hover:text-white">← Back to site</Link>
        <h1 className="text-4xl font-bold text-white">Terms</h1>
        <p className="text-sm text-zinc-400">Last updated: May 12, 2026</p>
        <p>
          VantLaunch builds focused SaaS products for operational businesses, starting with automotive
          software. This website is provided for product information, inquiries, and company updates.
        </p>
        <p>
          You agree to use this website lawfully and not interfere with service availability, security,
          forms, or infrastructure.
        </p>
        <p>
          Product information for TeraMotors and Gari may change as the products evolve. Gari is
          currently presented as an upcoming product, not as an immediately available paid service.
        </p>
        <p>
          TeraMotors trial access starts after you create an account and add your workshop details.
          The trial lasts 14 days unless a different period is agreed in writing. No credit card is
          required during the trial.
        </p>
        <p>
          After the trial, you can continue on an available paid plan such as Basic, Pro, or
          Enterprise. Paid plans are billed monthly unless another billing period is agreed in
          writing.
        </p>
        <p>
          You can cancel before the trial ends to avoid moving to a paid plan. For paid plans, you
          can request cancellation by emailing support before the next billing period.
        </p>
        <p>
          Refund requests are accepted within 10 days of the first paid charge, or within 30 days
          of a subscription renewal. Refunds are reviewed through support and may depend on access,
          usage, duplicate charges, billing errors, or service availability.
        </p>
        <p>
          For support, billing, or legal inquiries, contact{" "}
          <a className="text-white underline" href={`mailto:${CONTACT_EMAILS.product}`}>{CONTACT_EMAILS.product}</a>.
          For company inquiries, contact{" "}
          <a className="text-white underline" href={`mailto:${CONTACT_EMAILS.company}`}>{CONTACT_EMAILS.company}</a>.
        </p>
      </article>
    </main>
  );
}
