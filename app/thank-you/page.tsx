"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BookOpen, Briefcase } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LocaleProvider, useLocaleFromCookie } from "../lib/LocaleContext";

export default function ThankYouPage() {
  const locale = useLocaleFromCookie();
  return <LocaleProvider locale={locale}><ThankYouContent /></LocaleProvider>;
}

function ThankYouContent() {
  const steps = [
    { label: "Request received", desc: "We have your submission and are reviewing it." },
    { label: "Review", desc: "Our team reviews your information within 24 hours." },
    { label: "Discovery Call", desc: "We schedule a call to understand your operations." },
    { label: "Proposal", desc: "If we are a good fit, you receive a custom proposal." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main className="flex-1 flex items-center">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#004225]/10">
              <CheckCircle2 className="h-10 w-10 text-[#004225]" />
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Thank you for reaching out</h1>
            <p className="mt-4 text-base leading-relaxed text-[#74695B]">We have received your request and will review it within 24 hours.</p>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-12">
            <div className="relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-px bg-black/[0.08]" />
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 text-left">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-mid" style={{ borderColor: i === 0 ? "#004225" : "rgba(0,0,0,0.1)" }}>
                      {i === 0 ? <CheckCircle2 className="h-5 w-5 text-[#004225]" /> : <span className="text-sm font-bold text-[#74695B]">{i + 1}</span>}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-base font-bold">{step.label}</h3>
                      <p className="mt-0.5 text-sm text-[#74695B]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/work" className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-bold text-[#11100E] transition-all hover:bg-black/[0.03]"><Briefcase className="h-4 w-4" /> Case Studies</Link>
            <Link href="/book" className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-bold text-[#11100E] transition-all hover:bg-black/[0.03]"><BookOpen className="h-4 w-4" /> How We Work</Link>
            <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-[#004225] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#11100E]">Back Home <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
