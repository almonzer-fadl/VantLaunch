"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, Users, Target, FileText, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { LocaleProvider, useLocaleFromCookie } from "../../lib/LocaleContext";

export default function MarketingAgenciesPage() {
  const locale = useLocaleFromCookie();
  return <LocaleProvider locale={locale}><Content /></LocaleProvider>;
}

function Content() {
  const painPoints = ["Scattered campaign data across Meta, Google, and analytics tools.", "Hours lost on manual client reporting every week.", "No single view of performance across all clients.", "Resource allocation is guesswork without real-time data."];
  const systems = [
    { icon: BarChart3, title: "Campaign Dashboard", desc: "All ad platforms, analytics, and revenue in one real-time view." },
    { icon: FileText, title: "Automated Client Reports", desc: "Reports generated and delivered automatically — no manual pulling." },
    { icon: Users, title: "Resource Planner", desc: "See team capacity, project assignments, and utilization at a glance." },
    { icon: Target, title: "Client Portal", desc: "Clients see live campaign performance without emailing you for updates." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Marketing Agencies</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">One platform for your entire agency</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">Replace scattered campaign tools with a custom internal system built around how your agency operates.</p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">The challenge</h2>
                <div className="mt-6 space-y-3">
                  {painPoints.map((p, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-mid">
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#004225]" /><span className="text-sm text-[#11100E]">{p}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Systems we build</h2>
                <div className="mt-6 space-y-3">
                  {systems.map((s, i) => (
                    <motion.div key={s.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl border border-black/10 bg-white p-4 shadow-mid">
                      <div className="flex items-center gap-2 mb-1"><div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#004225]/10"><s.icon className="h-4 w-4 text-[#004225]" /></div><span className="text-sm font-bold">{s.title}</span></div>
                      <p className="text-sm text-[#74695B]">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#004225]/20 bg-white p-8 shadow-mid">
              <h2 className="text-xl font-bold">Ready to centralize your agency operations?</h2>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white hover:bg-[#11100E] transition-colors">Book Discovery Call <ArrowRight className="h-4 w-4" /></Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
