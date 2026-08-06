"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, Zap, FileText, Clock, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LocaleProvider, useLocaleFromCookie, useT } from "../lib/LocaleContext";

export default function OpsAuditPage() {
  const locale = useLocaleFromCookie();
  return <LocaleProvider locale={locale}><OpsAuditContent /></LocaleProvider>;
}

function OpsAuditContent() {
  const t = useT().t;

  const areas = [
    { icon: Search, title: "Current Software", desc: "We map every tool your team uses and identify overlaps, gaps, and inefficiencies." },
    { icon: Zap, title: "Workflow Analysis", desc: "We trace how work moves through your business — from client request to delivery." },
    { icon: Clock, title: "Manual Tasks", desc: "We identify repetitive manual tasks that consume hours every week." },
    { icon: FileText, title: "Reporting", desc: "We assess how you currently track metrics and where reporting breaks down." },
    { icon: Users, title: "Client Management", desc: "We review how you manage client communication, approvals, and visibility." },
    { icon: BarChart3, title: "Automation Opportunities", desc: "We pinpoint where automation can eliminate manual work." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="px-6 py-20 sm:py-28 md:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004225]/30 bg-[#004225]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004225]">
                <Zap className="h-3 w-3" /> Free
              </span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">Free Operations Audit</h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#74695B] sm:text-lg">Discover where your business is losing time before you spend money on software. A free expert review of your operations.</p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-8 inline-block">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#004225] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-[#11100E] hover:shadow-lg">
                  Book Free Audit <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What we review */}
        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What we review</h2>
              <p className="mt-3 text-base text-[#74695B]">A comprehensive look at how your business operates today.</p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#004225]/10"><item.icon className="h-5 w-5 text-[#004225]" /></div>
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#74695B]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why free */}
        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Why is it free?</h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { icon: Shield, title: "No Obligation", desc: "You are not committing to anything. We do this because we believe in showing value first." },
                { icon: TrendingUp, title: "Builds Trust", desc: "If we can identify real improvements, you will know we understand your business." },
                { icon: Users, title: "We Learn Too", desc: "Every audit helps us understand how growing businesses operate — making our systems better." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-mid">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#004225]/10"><item.icon className="h-6 w-6 text-[#004225]" /></div>
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#74695B]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What you receive</h2>
            </motion.div>
            <div className="rounded-2xl border border-[#004225]/15 bg-white p-8 shadow-mid">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Operations assessment report",
                  "Bottleneck identification",
                  "Tool stack analysis",
                  "Automation opportunities map",
                  "Estimated time savings",
                  "Engagement recommendation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-[#F8F6EF] p-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#004225]" />
                    <span className="text-sm font-medium text-[#11100E]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-[#004225]/20 bg-white/80 backdrop-blur-md p-8 shadow-lg sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to find out where you are losing time?</h2>
              <p className="mt-3 text-base text-[#74695B]">Free expert review. No obligation. Just clarity on your operations.</p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-8 inline-block">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#004225] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-[#11100E] hover:shadow-lg">
                  Book Free Operations Audit <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
