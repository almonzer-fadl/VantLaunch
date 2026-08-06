"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle2, Clock, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export default function Roadmap() {
  const columns = [
    {
      title: "Building", icon: Zap, color: "#004225", items: [
        { title: "Interactive ROI Calculator", status: "In progress" },
        { title: "Operations Health Score", status: "In progress" },
        { title: "Dark Mode", status: "In progress" },
      ],
    },
    {
      title: "Planned", icon: Lightbulb, color: "#0f766e", items: [
        { title: "Client Portal v2", status: "Q4 2026" },
        { title: "AI-Powered Workflow Suggestions", status: "Q4 2026" },
        { title: "Multi-language Dashboards", status: "Q1 2027" },
        { title: "Advanced Analytics Module", status: "Q1 2027" },
      ],
    },
    {
      title: "Completed", icon: CheckCircle2, color: "#004225", items: [
        { title: "20 Country Landing Pages", status: "Done" },
        { title: "Geo-Redirect System", status: "Done" },
        { title: "i18n (AR/TR/EN)", status: "Done" },
        { title: "Interactive Problem Dashboard", status: "Done" },
        { title: "Systems Showcase", status: "Done" },
        { title: "Engagement Options Redesign", status: "Done" },
        { title: "Discovery Call Page", status: "Done" },
        { title: "Operations Audit Page", status: "Done" },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Roadmap</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What we&apos;re building</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">Transparent product development. See what is coming next.</p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {columns.map((col, ci) => (
                <motion.div key={col.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: ci * 0.1 }}>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: `${col.color}15` }}><col.icon className="h-4 w-4" style={{ color: col.color }} /></div>
                    <h2 className="text-lg font-bold">{col.title}</h2>
                  </div>
                  <div className="space-y-3">
                    {col.items.map((item, i) => (
                      <motion.div key={item.title} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-black/10 bg-white p-4 shadow-mid">
                        <h3 className="text-sm font-bold">{item.title}</h3>
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: col.color }} />
                          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#74695B]">{item.status}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm text-[#74695B]">Have a feature request? We would love to hear it.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white hover:bg-[#11100E] transition-colors">Suggest a feature <Clock className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
