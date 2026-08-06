"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Search } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LocaleProvider, useLocaleFromCookie } from "../lib/LocaleContext";

export default function BlogPage() {
  const locale = useLocaleFromCookie();
  return <LocaleProvider locale={locale}><Content /></LocaleProvider>;
}

function Content() {
  const featured = { title: "Why Growing Service Businesses Outgrow Their Tools", excerpt: "As your business scales, operational complexity outpaces headcount. Here is how to know when it is time to move beyond spreadsheets and disconnected SaaS tools.", readingTime: "6 min read", category: "Operations" };
  const posts = [
    { title: "5 Signs Your Agency Needs a Custom Dashboard", excerpt: "If you are checking 6+ platforms before every decision, it is time.", readingTime: "4 min read", category: "Agencies" },
    { title: "Custom Software vs SaaS: What Growing Businesses Should Know", excerpt: "When does it make sense to build instead of subscribe? A practical guide.", readingTime: "7 min read", category: "Strategy" },
    { title: "How to Audit Your Business Operations in 30 Minutes", excerpt: "A simple framework for finding inefficiencies before they cost you.", readingTime: "5 min read", category: "Operations" },
    { title: "The Real Cost of Manual Reporting", excerpt: "Your team is spending more time on reports than you think. Here is the math.", readingTime: "4 min read", category: "Data" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
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
              {["All", "Operations", "Strategy", "Agencies", "Data", "Technology"].map((cat, i) => (
                <motion.button key={cat} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className={`rounded-full px-4 py-2 text-xs font-bold ${i === 0 ? "bg-[#004225] text-white" : "bg-white border border-black/10 text-[#74695B] hover:border-[#004225]/30"}`}>{cat}</motion.button>
              ))}
            </div>

            {/* Featured */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid">
              <div className="p-6 sm:p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#004225]">{featured.category}</span>
                <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">{featured.title}</h2>
                <p className="mt-3 text-sm text-[#74695B]">{featured.excerpt}</p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="flex items-center gap-1 text-xs text-[#74695B]"><Clock className="h-3 w-3" /> {featured.readingTime}</span>
                  <span className="text-sm font-bold text-[#004225] cursor-pointer hover:text-[#11100E] transition-colors">Read more <ArrowRight className="inline h-3.5 w-3.5" /></span>
                </div>
              </div>
            </motion.div>

            {/* Posts grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post, i) => (
                <motion.div key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }} className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid transition-all hover:shadow-lg hover:border-[#004225]/20 cursor-pointer">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#004225]">{post.category}</span>
                  <h3 className="mt-2 text-base font-bold">{post.title}</h3>
                  <p className="mt-2 text-sm text-[#74695B]">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-[#74695B]"><Clock className="h-3 w-3" /> {post.readingTime}</div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
              <p className="text-sm text-[#74695B]">More articles coming soon. Subscribe to stay updated.</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white hover:bg-[#11100E] transition-colors">Get updates <ArrowRight className="h-4 w-4" /></Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
