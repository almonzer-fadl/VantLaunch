"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Users, Workflow, FileText, ShieldCheck, Smartphone, Zap } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LocaleProvider, useLocaleFromCookie } from "../lib/LocaleContext";

export default function GalleryPage() {
  const locale = useLocaleFromCookie();
  return <LocaleProvider locale={locale}><GalleryContent /></LocaleProvider>;
}

function GalleryContent() {
  const items = [
    { icon: BarChart3, title: "Executive Dashboard", desc: "Complete visibility into revenue, projects, team, and KPIs — all in one place.", accent: "#004225" },
    { icon: Users, title: "CRM System", desc: "Track clients, deals, and relationships in a system designed around your sales process.", accent: "#004225" },
    { icon: Globe, title: "Client Portal", desc: "Give clients visibility into projects, approvals, and communications.", accent: "#0f766e" },
    { icon: Workflow, title: "Workflow Automation", desc: "Connect your tools and automate repetitive processes that consume hours.", accent: "#6366f1" },
    { icon: FileText, title: "Reporting System", desc: "Automated reports from every data source — dashboards, inbox, or Slack.", accent: "#1e40af" },
    { icon: ShieldCheck, title: "Approval Center", desc: "Custom approval workflows matching how your business actually operates.", accent: "#004225" },
    { icon: Smartphone, title: "Mobile Experience", desc: "Visibility and approvals from anywhere, with a dedicated mobile companion.", accent: "#004225" },
    { icon: Zap, title: "Operations Hub", desc: "A complete internal platform unifying operations, clients, and automation.", accent: "#11100E" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Gallery</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Dashboard Showcase</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">Explore the internal systems we build — each designed to solve real operational problems.</p>
            </motion.div>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid transition-all hover:shadow-lg hover:border-[#004225]/20 cursor-pointer"
                >
                  {/* Dashboard mockup area */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#F8F6EF] to-white flex items-center justify-center border-b border-black/[0.06]">
                    <div className="flex flex-col items-center gap-2">
                      <motion.div whileHover={{ scale: 1.15, rotate: -3 }} className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: `${item.accent}10` }}>
                        <item.icon className="h-7 w-7" style={{ color: item.accent }} />
                      </motion.div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#74695B]">{item.title}</span>
                    </div>
                    {/* Chrome dots */}
                    <div className="absolute top-3 left-4 flex gap-1.5"><div className="w-2 h-2 rounded-full bg-black/15" /><div className="w-2 h-2 rounded-full bg-black/15" /><div className="w-2 h-2 rounded-full bg-black/15" /></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#74695B]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#004225] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#11100E] hover:shadow-lg">
                See how this could work for your business <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
