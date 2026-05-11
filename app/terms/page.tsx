import type { Metadata } from "next";
import Link from "next/link";

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
          Any paid SaaS offering will show product-specific pricing, billing cadence, cancellation
          terms, refund terms, and access details before checkout.
        </p>
        <p>
          For support, billing, or legal inquiries, contact{" "}
          <a className="text-white underline" href="mailto:build@vantlaunch.com">build@vantlaunch.com</a>.
        </p>
      </article>
    </main>
  );
}
