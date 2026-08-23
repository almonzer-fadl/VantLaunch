"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Briefcase, Calculator, Building2, Stethoscope, Scale } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LocaleProvider, useLocaleFromCookie } from "../lib/LocaleContext";

export default function IndustriesPage() {
  const locale = useLocaleFromCookie();
  return <LocaleProvider locale={locale}><IndustriesContent /></LocaleProvider>;
}

function IndustriesContent() {
  const industries = [
    { icon: BarChart3, title: "Marketing Agencies", desc: "Campaign dashboards, client reporting, resource planning — all in one system.", href: "/industries/marketing-agencies" },
    { icon: Briefcase, title: "Consulting Firms", desc: "Engagement tracking, deliverable management, and team visibility.", href: "/industries/consulting" },
    { icon: Calculator, title: "Accounting Firms", desc: "Client onboarding, deadline tracking, and document management.", href: "/industries/accounting" },
    { icon: Building2, title: "Construction", desc: "Site management, contractor tracking, and budget visibility.", href: "/contact" },
    { icon: Stethoscope, title: "Healthcare", desc: "Patient management, staff scheduling, and compliance tracking.", href: "/contact" },
    { icon: Scale, title: "Legal", desc: "Case management, document tracking, and deadline automation.", href: "/contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Industries</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Built for how you operate</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">Every industry has unique workflows. We build systems that fit yours.</p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} whileHover={{ y: -4 }}>
                  <Link href={item.href} className="block rounded-2xl border border-black/10 bg-white p-6 shadow-mid transition-all hover:shadow-lg hover:border-[#004225]/20">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#004225]/10"><item.icon className="h-6 w-6 text-[#004225]" /></div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#74695B]">{item.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#004225]">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
