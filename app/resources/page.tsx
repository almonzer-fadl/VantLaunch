"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileText, Download, Video, Wrench, Search } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LocaleProvider, useLocaleFromCookie } from "../lib/LocaleContext";

export default function ResourcesPage() {
  const locale = useLocaleFromCookie();
  return <LocaleProvider locale={locale}><Content /></LocaleProvider>;
}

function Content() {
  const categories = [
    { icon: BookOpen, title: "Guides", count: 4, desc: "In-depth guides on building internal business systems." },
    { icon: FileText, title: "Templates", count: 3, desc: "Ready-to-use templates for operations, workflows, and reporting." },
    { icon: Download, title: "Downloads", count: 2, desc: "Checklists, planners, and resources to get started." },
    { icon: Wrench, title: "Tools", count: 5, desc: "Our recommended tools and software for growing businesses." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Resources</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Everything you need to build better operations</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">Guides, templates, tools, and resources for growing service businesses.</p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#74695B]" />
                <input type="text" placeholder="Search resources..." className="w-full rounded-xl border border-black/10 bg-white pl-10 pr-4 py-3 text-sm text-[#11100E] placeholder:text-[#a89472] focus:border-[#004225]/40 focus:outline-none" />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {categories.map((cat, i) => (
                <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }} className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid transition-all hover:shadow-lg hover:border-[#004225]/20 cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#004225]/10"><cat.icon className="h-6 w-6 text-[#004225]" /></div>
                    <span className="text-xs font-bold text-[#74695B]">{cat.count} items</span>
                  </div>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                  <p className="mt-2 text-sm text-[#74695B]">{cat.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 rounded-2xl border border-[#004225]/15 bg-white p-8 text-center shadow-mid">
              <h2 className="text-xl font-bold">Coming soon</h2>
              <p className="mt-2 text-sm text-[#74695B]">We are building a comprehensive resource library. Check back soon for detailed guides, templates, and tools.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white hover:bg-[#11100E] transition-colors">Get notified <ArrowRight className="h-4 w-4" /></Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
