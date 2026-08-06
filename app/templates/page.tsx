"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Workflow, Globe, FileText, Users, Search } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export default function Templates() {
  const items = [
    { icon: BarChart3, title: "Executive Dashboard", desc: "KPI layout, revenue tracking, team performance widgets.", tag: "Dashboards" },
    { icon: Workflow, title: "Workflow Automation", desc: "Trigger-action templates for common business processes.", tag: "Automation" },
    { icon: Globe, title: "Client Portal", desc: "Client-facing dashboard with project visibility and approvals.", tag: "Client Portals" },
    { icon: Users, title: "CRM System", desc: "Pipeline management, contact tracking, deal stages.", tag: "CRM" },
    { icon: FileText, title: "Reporting System", desc: "Automated report templates, export configurations, notifications.", tag: "Reporting" },
    { icon: BarChart3, title: "Operations Hub", desc: "Complete internal platform layout with all modules connected.", tag: "Operations" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Templates</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">System Templates</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">Ready-to-customize internal system templates for growing businesses.</p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#74695B]" />
                <input type="text" placeholder="Search templates..." className="w-full rounded-xl border border-black/10 bg-white pl-10 pr-4 py-3 text-sm text-[#11100E] placeholder:text-[#a89472] focus:border-[#004225]/40 focus:outline-none" />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ y: -4 }} className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid transition-all hover:shadow-lg hover:border-[#004225]/20 cursor-pointer">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#004225]">{item.tag}</span>
                  <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#004225]/10"><item.icon className="h-6 w-6 text-[#004225]" /></div>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#74695B]">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#004225]">Preview template <ArrowRight className="h-3.5 w-3.5" /></div>
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
