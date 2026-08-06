"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator, FileText, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { LocaleProvider, useLocaleFromCookie } from "../../lib/LocaleContext";

export default function AccountingPage() {
  const locale = useLocaleFromCookie();
  return <LocaleProvider locale={locale}><Content /></LocaleProvider>;
}

function Content() {
  const painPoints = [
    "Manual client onboarding wastes hours every month.",
    "Deadlines tracked across spreadsheets and calendars — easy to miss.",
    "Document chaos — files scattered across email, Drive, and local folders.",
    "No unified view of client status, filings, and outstanding items.",
  ];
  const systems = [
    { icon: Calculator, title: "Client Onboarding", desc: "Automated workflows from engagement letter to document collection." },
    { icon: Clock, title: "Deadline Tracker", desc: "Every filing, every deadline — visible, with automated reminders." },
    { icon: FileText, title: "Document Hub", desc: "All client documents organized, searchable, and accessible in one place." },
    { icon: ShieldCheck, title: "Compliance Dashboard", desc: "Track regulatory requirements and client compliance status." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Accounting Firms</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Focus on advisory, not admin</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">Streamline the operational side of your practice so your team can focus on what matters.</p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">The challenge</h2>
                <div className="mt-6 space-y-3">
                  {painPoints.map((p, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-mid">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#004225]" />
                      <span className="text-sm text-[#11100E]">{p}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">Systems we build</h2>
                <div className="mt-6 space-y-3">
                  {systems.map((s, i) => (
                    <motion.div key={s.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl border border-black/10 bg-white p-4 shadow-mid">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#004225]/10"><s.icon className="h-4 w-4 text-[#004225]" /></div>
                        <span className="text-sm font-bold">{s.title}</span>
                      </div>
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
              <h2 className="text-xl font-bold">Ready to streamline your practice?</h2>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white hover:bg-[#11100E]">
                <ArrowRight className="h-4 w-4" /> Book Discovery Call
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
