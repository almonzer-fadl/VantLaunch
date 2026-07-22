import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SalaselContent } from "./SalaselContent";

export const metadata: Metadata = {
  title: "Salasel | B2B HORECA marketplace — VantLaunch",
  description:
    "Enterprise B2B marketplace for HORECA: procurement digitization, BNPL financing, multi-supplier cart, fulfillment tracking, Filament panels for every stakeholder.",
  openGraph: {
    title: "Salasel | B2B HORECA marketplace — VantLaunch",
    description:
      "Enterprise B2B marketplace for HORECA — procurement, BNPL, logistics, and supplier orchestration.",
    images: [{ url: "/salasel-hero.png", width: 1200, height: 750, alt: "Salasel marketplace marketing site" }],
  },
};

export default function SalaselProjectPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc text-slate-50 selection:bg-white/10">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.14]" />
        <div className="absolute left-1/2 top-[-20%] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[140px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-zinc/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/#ventures" className="type-work-back-link">
            <ArrowLeft className="h-4 w-4" />
            Our work
          </Link>
          <Link href="/" className="type-brand-xl">
            VantLaunch
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="https://salasel.com.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="type-nav-accent hidden sm:inline"
            >
              Live site
            </Link>
            <Link href="mailto:build@vantlaunch.com?subject=Salasel%20follow-up" className="type-nav-link hidden md:inline">
              Talk to us
            </Link>
          </div>
        </div>
      </header>

      <article className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-14 md:pt-20">
        <SalaselContent />
      </article>
    </div>
  );
}
