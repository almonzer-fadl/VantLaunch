"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const QUESTIONS = [
  { q: "How many software tools does your team use daily?", opts: ["1-3", "4-6", "7-10", "11+"] },
  { q: "How do you currently handle reporting?", opts: ["Automated", "Mostly automated", "Mostly manual", "Completely manual"] },
  { q: "Do you have a client portal?", opts: ["Yes, custom-built", "Yes, third-party", "No, clients email us", "What's a client portal?"] },
  { q: "How do you manage your CRM?", opts: ["Dedicated CRM", "Spreadsheets + email", "No formal CRM", "Multiple disconnected tools"] },
  { q: "Is there an executive dashboard?", opts: ["Yes, real-time", "Yes, but manual", "Basic reports only", "No dashboard"] },
  { q: "How automated are your workflows?", opts: ["Fully automated", "Partially automated", "Mostly manual", "Completely manual"] },
  { q: "How dependent are you on spreadsheets?", opts: ["Minimal", "Some departments", "Heavy reliance", "Everything is spreadsheets"] },
  { q: "How many communication channels?", opts: ["1-2 (consolidated)", "3-4", "5-7", "8+ (fragmented)"] },
  { q: "How do you handle approvals?", opts: ["Automated workflow", "Email-based", "Slack/messages", "Verbal/in-person"] },
  { q: "How visible are your KPIs to leadership?", opts: ["Real-time dashboard", "Weekly reports", "Monthly reviews", "Ad-hoc only"] },
];

const SCORE_RANGES: Record<number, { strength: number; weakness: number; suggestions: string[]; engagement: string }> = {
  0: { strength: 25, weakness: 75, suggestions: ["Implement a central dashboard", "Automate manual reporting", "Consolidate communication tools"], engagement: "Full Platform" },
  1: { strength: 45, weakness: 55, suggestions: ["Connect your existing tools", "Add workflow automation", "Build a client portal"], engagement: "Connect Your Operations" },
  2: { strength: 65, weakness: 35, suggestions: ["Automate remaining manual tasks", "Add mobile visibility", "Improve reporting"], engagement: "Leadership On the Go" },
  3: { strength: 85, weakness: 15, suggestions: ["Fine-tune workflows", "Expand integrations", "Optimize reporting"], engagement: "Fix One Bottleneck" },
};

export default function OpsScore() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const score = answers.length === QUESTIONS.length ? Math.round((answers.reduce((a, b) => a + b, 0) / (QUESTIONS.length * 3)) * 100) : 0;
  const rangeIdx = score >= 75 ? 3 : score >= 50 ? 2 : score >= 25 ? 1 : 0;
  const range = SCORE_RANGES[rangeIdx];

  const handleAnswer = (idx: number) => {
    setAnswers((prev) => [...prev, idx]);
    setStep((s) => s + 1);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004225]/20 bg-[#004225]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004225]"><Zap className="h-3 w-3" /> Free Assessment</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Operations Health Score</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">10 questions to assess how operationally healthy your business is.</p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-2xl">
            {!answers.length ? null : step >= QUESTIONS.length ? (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-[#004225]/20 bg-white p-8 shadow-mid text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#004225]/10"><Zap className="h-8 w-8 text-[#004225]" /></div>
                <h2 className="text-2xl font-bold">Your Operations Score: <span className="text-[#004225]">{score}/100</span></h2>
                <div className="mt-6 h-4 w-full rounded-full bg-black/10 overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${score}%` }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="h-full rounded-full bg-[#004225]" /></div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-black/[0.06] bg-[#F8F6EF] p-4"><CheckCircle2 className="h-5 w-5 mx-auto text-[#004225]" /><p className="text-sm font-bold mt-2">Strengths</p><p className="text-2xl font-bold text-[#004225] mt-1">{range.strength}%</p></div>
                  <div className="rounded-xl border border-black/[0.06] bg-[#F8F6EF] p-4"><AlertCircle className="h-5 w-5 mx-auto text-orange-500" /><p className="text-sm font-bold mt-2">Areas to Improve</p><p className="text-2xl font-bold text-orange-600 mt-1">{range.weakness}%</p></div>
                </div>
                <div className="mt-6 text-left space-y-2">
                  <p className="text-sm font-bold text-[#74695B]">Recommendations:</p>
                  {range.suggestions.map((s, i) => (<div key={i} className="flex items-center gap-2 text-sm text-[#11100E]"><CheckCircle2 className="h-4 w-4 text-[#004225]" /> {s}</div>))}
                </div>
                <div className="mt-6 rounded-xl border border-[#004225]/20 bg-[#004225]/5 p-4"><p className="text-sm font-bold text-[#004225]">Suggested engagement: {range.engagement}</p></div>
                <Link href="/operations-audit" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white hover:bg-[#11100E]">Book Free Audit <ArrowRight className="h-4 w-4" /></Link>
                <button onClick={() => { setAnswers([]); setStep(0); }} className="mt-4 block mx-auto text-xs font-bold text-[#74695B] hover:text-[#11100E]">Retake assessment</button>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="rounded-2xl border border-black/10 bg-white p-8 shadow-mid">
                  <div className="mb-4 h-1 w-full rounded-full bg-black/10"><motion.div animate={{ width: `${((step) / QUESTIONS.length) * 100}%` }} className="h-full rounded-full bg-[#004225]" transition={{ duration: 0.3 }} /></div>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#74695B] mb-4">Question {step + 1} of {QUESTIONS.length}</p>
                  <h2 className="text-xl font-bold mb-6">{QUESTIONS[step].q}</h2>
                  <div className="space-y-2">
                    {QUESTIONS[step].opts.map((opt, i) => (
                      <motion.button key={opt} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} onClick={() => handleAnswer(i)} className="w-full rounded-xl border border-black/10 bg-white p-4 text-left text-sm font-medium text-[#11100E] hover:border-[#004225]/30 hover:bg-[#004225]/[0.02] transition-colors">
                        {opt}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
