"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageSquare, Lightbulb, FileText, CheckCircle2, Users, Zap } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LocaleProvider, useLocaleFromCookie, useT } from "../lib/LocaleContext";

export default function BookPage() {
  const locale = useLocaleFromCookie();
  return <LocaleProvider locale={locale}><BookContent /></LocaleProvider>;
}

function BookContent() {
  const t = useT().t;

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="px-6 py-20 sm:py-28 md:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Discovery Call</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">Book Your Discovery Call</h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#74695B] sm:text-lg">Understand your operations. Identify bottlenecks. Leave with clarity — in 30 minutes.</p>
            </motion.div>
          </div>
        </section>

        {/* What we cover */}
        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What we&apos;ll cover</h2>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Zap, title: "Current Operations", desc: "How your team works today — tools, workflows, and processes." },
                { icon: Users, title: "Pain Points", desc: "Where time is lost, what frustrates your team, what slows you down." },
                { icon: Lightbulb, title: "Growth Goals", desc: "Where you want to be in 6–12 months and what's holding you back." },
                { icon: FileText, title: "Software Stack", desc: "Current tools, integrations, gaps, and opportunities." },
                { icon: Clock, title: "Timeline & Budget", desc: "Realistic expectations for timeline and investment." },
                { icon: MessageSquare, title: "Next Steps", desc: "Clear path forward — engagement recommendation or proposal." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#004225]/10"><item.icon className="h-5 w-5 text-[#004225]" /></div>
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#74695B]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* After the call */}
        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">After the call</h2>
              <p className="mt-3 text-base text-[#74695B]">You will receive a follow-up within 24 hours.</p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Operations Assessment", desc: "Summary of what we learned about your current workflows and tools." },
                { title: "Bottleneck Analysis", desc: "Where your team is losing the most time and what can be automated." },
                { title: "Engagement Recommendation", desc: "Which starting point fits your business based on scope and goals." },
                { title: "Custom Proposal", desc: "If we are a good fit, a detailed proposal with timeline and pricing." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#004225]" />
                    <div>
                      <h3 className="text-base font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#74695B]">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Common questions</h2>
            </motion.div>
            <div className="space-y-3">
              {[
                { q: "How long is the call?", a: "30 minutes. We stay focused and respect your time." },
                { q: "Is there any obligation?", a: "None. It is a free consultation to understand if we can help." },
                { q: "Who should attend?", a: "Anyone involved in operations — founders, ops managers, team leads." },
                { q: "What should I prepare?", a: "Just a high-level understanding of your current tools and biggest bottlenecks." },
                { q: "What if we are not a fit?", a: "We will tell you honestly. If we cannot help, we will point you in the right direction." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="rounded-xl border border-black/10 bg-white p-5 shadow-mid">
                  <h3 className="text-sm font-bold text-[#11100E]">{item.q}</h3>
                  <p className="mt-1 text-sm text-[#74695B]">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-[#004225]/20 bg-white/80 backdrop-blur-md p-8 shadow-lg sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to get clarity on your operations?</h2>
              <p className="mt-3 text-base text-[#74695B]">Free 30-minute consultation. No pressure. No obligation.</p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-8 inline-block">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#004225] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-[#11100E] hover:shadow-lg">
                  {t.hero.cta1} <ArrowRight className="h-5 w-5" />
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
