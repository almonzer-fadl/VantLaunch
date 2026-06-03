import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAILS } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — VantLaunch",
  description: "How VantLaunch collects and uses personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f8f6ef] px-6 py-16 text-[#5f5548]">
      <article className="mx-auto max-w-3xl space-y-6">
        <Link href="/" className="text-sm font-bold text-[#74695b] hover:text-[#11100e]">← Back to site</Link>
        <h1 className="text-4xl font-bold text-[#11100e]">Privacy Policy</h1>
        <p className="text-sm text-[#74695b]">Last updated: May 12, 2026</p>
        <p>
          VantLaunch collects contact details you submit through forms, including name, email,
          company or shop name, role, product interest, timeline, and use-case notes.
        </p>
        <p>
          We use this information to respond to inquiries, evaluate product fit, share relevant
          product communication, and improve the website experience.
        </p>
        <p>
          The website may use trusted infrastructure and analytics providers such as Vercel and
          Resend to host the site, measure performance, and deliver email.
        </p>
        <p>
          We do not sell your personal data. Access is limited to the VantLaunch team and trusted
          infrastructure providers needed to operate the website and respond to inquiries.
        </p>
        <p>
          You can request correction or deletion of your data by emailing{" "}
          <a className="font-semibold text-[#004225] underline" href={`mailto:${CONTACT_EMAILS.company}`}>{CONTACT_EMAILS.company}</a>.
        </p>
      </article>
    </main>
  );
}
