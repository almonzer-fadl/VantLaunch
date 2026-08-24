"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

type SolutionData = {
  title: string; tagline: string; problem: string; solution: string;
  benefits: string[]; features: string[]; slug: string;
  relatedArticles: { title: string; href: string }[];
};

export function SolutionPage({ data }: { data: SolutionData }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <div className="px-6 pt-6 sm:pt-8">
          <div className="mx-auto max-w-3xl flex items-center gap-1.5 text-xs text-[#74695B]">
            <Link href="/" className="hover:text-[#004225]">Home</Link><ChevronRight className="h-3 w-3" />
            <Link href="/solutions" className="hover:text-[#004225]">Solutions</Link><ChevronRight className="h-3 w-3" />
            <span className="text-[#11100E]">{data.title}</span>
          </div>
        </div>
        <section className="px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{data.title}</h1>
              <p className="mt-4 text-lg text-[#74695B]">{data.tagline}</p>
            </motion.div>
          </div>
        </section>
        <section className="border-t border-black/[0.06] px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-10">
              <div><h2 className="text-xl font-bold mb-4">The Problem</h2><p className="text-[#74695B] leading-relaxed">{data.problem}</p></div>
              <div><h2 className="text-xl font-bold mb-4">Our Solution</h2><p className="text-[#74695B] leading-relaxed">{data.solution}</p></div>
              <div><h2 className="text-xl font-bold mb-4">Benefits</h2><div className="grid gap-3 sm:grid-cols-2">{data.benefits.map((b, i) => (<div key={i} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-mid"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#004225]" /><span className="text-sm text-[#11100E]">{b}</span></div>))}</div></div>
              <div><h2 className="text-xl font-bold mb-4">Key Features</h2><div className="grid gap-3 sm:grid-cols-2">{data.features.map((f, i) => (<div key={i} className="flex items-center gap-2 rounded-lg bg-[#F8F6EF] px-4 py-3"><Zap className="h-4 w-4 text-[#004225] shrink-0" /><span className="text-sm font-medium">{f}</span></div>))}</div></div>
              <div><h2 className="text-xl font-bold mb-4">Related Articles</h2><div className="space-y-2">{data.relatedArticles.map((a, i) => (<Link key={i} href={a.href} className="block text-sm font-medium text-[#004225] hover:text-[#11100E]">{a.title}</Link>))}</div></div>
            </div>
            <div className="mt-10 rounded-2xl border border-[#004225]/20 bg-white p-8 text-center shadow-mid">
              <h2 className="text-xl font-bold">Ready to build your {data.title.toLowerCase()}?</h2>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white hover:bg-[#11100E]">Book Discovery Call <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
