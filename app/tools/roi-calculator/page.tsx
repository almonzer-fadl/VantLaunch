"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Clock, Users, TrendingUp, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(10);
  const [hourlyWage, setHourlyWage] = useState(35);
  const [manualHours, setManualHours] = useState(15);
  const [reportFreq, setReportFreq] = useState(4);
  const [tools, setTools] = useState(6);

  const savings = useMemo(() => {
    const weeklyHoursSaved = manualHours * 0.7 * employees;
    const weeklySavings = weeklyHoursSaved * hourlyWage;
    const annualSavings = weeklySavings * 52;
    const annualToolCost = tools * 50 * 12;
    const roi = ((annualSavings - annualToolCost) / annualToolCost) * 100;
    return { weeklyHoursSaved: Math.round(weeklyHoursSaved), annualSavings: Math.round(annualSavings), roi: Math.round(roi) };
  }, [employees, hourlyWage, manualHours, reportFreq, tools]);

  const sliders = [
    { label: "Employees", value: employees, set: setEmployees, min: 2, max: 100, step: 1, icon: Users, suffix: "" },
    { label: "Hourly Wage ($)", value: hourlyWage, set: setHourlyWage, min: 15, max: 200, step: 5, icon: DollarSign, suffix: "$" },
    { label: "Manual Hours/Week", value: manualHours, set: setManualHours, min: 2, max: 40, step: 1, icon: Clock, suffix: "h" },
    { label: "Reports/Week", value: reportFreq, set: setReportFreq, min: 1, max: 20, step: 1, icon: BarChart3, suffix: "" },
    { label: "Tools Used", value: tools, set: setTools, min: 2, max: 30, step: 1, icon: Zap, suffix: "" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004225]/20 bg-[#004225]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004225]"><Zap className="h-3 w-3" /> Free Tool</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">ROI Calculator</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">See how much time and money your business could save with a custom internal system.</p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-12 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                {sliders.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2"><s.icon className="h-4 w-4 text-[#004225]" /><span className="text-sm font-bold">{s.label}</span></div>
                      <span className="text-sm font-bold text-[#004225]">{s.suffix}{s.value}{s.suffix === "h" ? " hrs" : ""}</span>
                    </div>
                    <input type="range" min={s.min} max={s.max} step={s.step} value={s.value} onChange={(e) => s.set(Number(e.target.value))} className="w-full h-2 rounded-full bg-black/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#004225] [&::-webkit-slider-thumb]:cursor-pointer" />
                  </div>
                ))}
              </div>

              <motion.div key={`${savings.annualSavings}`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="rounded-2xl border border-[#004225]/15 bg-white p-8 shadow-mid">
                <h2 className="text-lg font-bold text-center mb-6">Your Estimated Savings</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Clock, label: "Weekly Hours Saved", value: `${savings.weeklyHoursSaved} hrs` },
                    { icon: DollarSign, label: "Annual Savings", value: `$${savings.annualSavings.toLocaleString()}` },
                    { icon: TrendingUp, label: "ROI", value: `${savings.roi}%` },
                    { icon: Users, label: "Team Impact", value: `${employees} people` },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-black/[0.06] bg-[#F8F6EF] p-4 text-center">
                      <m.icon className="h-5 w-5 mx-auto mb-2 text-[#004225]" />
                      <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#74695B]">{m.label}</p>
                      <p className="text-lg font-bold text-[#11100E] mt-1">{m.value}</p>
                    </div>
                  ))}
                </div>
                <Link href="/operations-audit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white hover:bg-[#11100E] transition-colors">Book Free Operations Audit <ArrowRight className="h-4 w-4" /></Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
