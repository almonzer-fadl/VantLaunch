import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TeraMotorsContent } from "./TeraMotorsContent";

export const metadata: Metadata = {
  title: "TeraMotors | Enterprise auto repair platform — VantLaunch",
  description:
    "Production-ready shop management: Next.js 15, TypeScript, MongoDB, ZATCA e-invoicing, JWT & RBAC, real-time job tracking, bilingual English / Arabic.",
  openGraph: {
    title: "TeraMotors | Enterprise auto repair platform — VantLaunch",
    description:
      "Next.js + MongoDB platform for workshops: job cards, inspections, ZATCA invoicing, Stripe, Excel reporting, Socket.io.",
    images: [
      { url: "/teramotors.png", width: 1200, height: 630, alt: "TeraMotors dashboard experience" },
    ],
  },
};

export default function TeramotorsProjectPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc text-slate-50 selection:bg-accent-blue/30">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.14]" />
        <div className="absolute left-1/2 top-[-20%] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-accent-blue/[0.07] blur-[140px]" />
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
            <Link href="https://app.teramotor.cc/" className="type-nav-accent hidden sm:inline">
              Live app
            </Link>
            <Link href="mailto:build@vantlaunch.com?subject=TeraMotors%20follow-up" className="type-nav-link hidden md:inline">
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
