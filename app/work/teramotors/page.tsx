import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TeraMotorsContent } from "./TeraMotorsContent";
import { CONTACT_EMAILS, TERAMOTORS_REGISTER_URL } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "TeraMotors | Workshop Management Software - VantLaunch",
  description:
    "TeraMotors helps repair shops organize customers, vehicles, job cards, invoices, reports, and daily workshop activity.",
  openGraph: {
    title: "TeraMotors | Workshop Management Software - VantLaunch",
    description:
      "Workshop software for repair shops that want cleaner records, smoother job tracking, and organized invoicing.",
    images: [
      { url: "/media/teramotors-dashboard.webp", width: 1800, height: 944, alt: "TeraMotors dashboard experience" },
    ],
  },
};

export default function TeramotorsProjectPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc text-slate-50 selection:bg-white/10">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.14]" />
        <div className="absolute left-1/2 top-[-20%] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[140px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-zinc/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/#ventures" className="type-work-back-link">
            <ArrowLeft className="h-4 w-4" />
            Products
          </Link>
          <Link href="/" className="type-brand-xl">
            VantLaunch
          </Link>
          <div className="flex items-center gap-4">
            <Link href={TERAMOTORS_REGISTER_URL} target="_blank" rel="noopener noreferrer" className="type-nav-accent hidden sm:inline">
              Start trial
            </Link>
            <Link href={`mailto:${CONTACT_EMAILS.product}?subject=TeraMotors%20follow-up`} className="type-nav-link hidden md:inline">
              Talk to us
            </Link>
          </div>
        </div>
      </header>

      <article className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-14 md:pt-20">
        <TeraMotorsContent />
      </article>
    </div>
  );
}
