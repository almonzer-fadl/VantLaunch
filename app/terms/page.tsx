import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms — VantLaunch",
  description: "Terms for using VantLaunch websites and SaaS product updates.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-zinc px-6 py-16 text-zinc-200">
      <article className="mx-auto max-w-3xl space-y-6">
        <Link href="/" className="text-sm font-semibold text-white/80 hover:text-white">← Back to site</Link>
        <h1 className="text-4xl font-bold text-white">Terms</h1>
        <p className="text-sm text-zinc-400">Last updated: May 9, 2026</p>
        <p>By using this website, you agree to use it lawfully and not interfere with service availability or security.</p>
        <p>Product details, timelines, and availability may change as SaaS products evolve.</p>
        <p>Any paid SaaS offering will include product-specific pricing, billing, cancellation, and refund terms at checkout before purchase.</p>
        <p>For support or legal inquiries, contact <a className="text-white underline" href="mailto:build@vantlaunch.com">build@vantlaunch.com</a>.</p>
      </article>
    </main>
  );
}
