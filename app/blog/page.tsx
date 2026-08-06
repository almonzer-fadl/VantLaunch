"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Search } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ARTICLES, BLOG_CATEGORIES } from "../lib/articles";

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState("All");
  const entries = Object.entries(ARTICLES).filter(([, a]) => activeCat === "All" || a.category === activeCat);
  const featured = entries[0];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Blog</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Insights on business operations</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">Practical guides on building internal systems, automating workflows, and scaling operations.</p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            {/* Categories */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
              {["All", ...BLOG_CATEGORIES].map((cat) => (
                <motion.button key={cat} onClick={() => setActiveCat(cat)} whileTap={{ scale: 0.96 }} className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${activeCat === cat ? "bg-[#004225] text-white" : "bg-white border border-black/10 text-[#74695B] hover:border-[#004225]/30"}`}>{cat}</motion.button>
              ))}
            </div>

            {/* Featured */}
            {featured && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid">
                <div className="p-6 sm:p-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#004225]">{featured[1].category}</span>
                  <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">{featured[1].title}</h2>
                  <p className="mt-3 text-sm text-[#74695B]">{featured[1].description}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="flex items-center gap-1 text-xs text-[#74695B]"><Clock className="h-3 w-3" /> {featured[1].readTime}</span>
                    <Link href={`/blog/${featured[0]}`} className="text-sm font-bold text-[#004225] hover:text-[#11100E] transition-colors">Read article <ArrowRight className="inline h-3.5 w-3.5" /></Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Article grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {entries.slice(activeCat === "All" ? 1 : 0).map(([slug, a]) => (
                <motion.div key={slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} whileHover={{ y: -4 }}>
                  <Link href={`/blog/${slug}`} className="block rounded-2xl border border-black/10 bg-white p-6 shadow-mid transition-all hover:shadow-lg hover:border-[#004225]/20 h-full">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#004225]">{a.category}</span>
                    <h3 className="mt-2 text-base font-bold">{a.title}</h3>
                    <p className="mt-2 text-sm text-[#74695B]">{a.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-[#74695B]"><Clock className="h-3 w-3" /> {a.readTime}</div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* RSS */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
              <p className="text-xs text-[#74695B]">
                Subscribe via <a href="/feed.xml" className="font-bold text-[#004225] hover:text-[#11100E]">RSS</a> for updates.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
