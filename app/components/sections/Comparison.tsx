"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";
import { WHY_US_POINTS, STACK_TECH } from "@/app/lib/constants";
import { useCountUp } from "@/app/hooks/use-count-up";

export function ComparisonSection({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const [inView, setInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const ownedCount = useCountUp(2, inView);
  const clientCount = useCountUp(3, inView);
  const rhythmCount = useCountUp(7, inView);

  return (
    <section id="comparison" className="relative overflow-hidden border-t border-white/5 px-6 py-32">
      <motion.div
        className="relative mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
        onViewportEnter={() => setInView(true)}
      >
        <motion.div variants={fadeSlide} className="mb-14 text-center md:mb-16">
          <p className="type-meta-uppercase mb-4">How We Operate</p>
          <h2 className="type-display-xl mb-5 text-balance">Two lanes. One product engine.</h2>
          <p className="type-intro mx-auto max-w-3xl text-center">
            We run our own products and ship client builds with the same operator-grade standards.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <motion.div
            variants={fadeSlide}
            className="order-2 rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 md:p-10 lg:order-1"
          >
            <p className="type-meta-uppercase">Why teams choose us</p>
            <h3 className="mt-3 max-w-lg text-3xl font-bold tracking-tight text-white md:text-4xl">
              Built like founders, shipped like operators.
            </h3>
            
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <StatCard label="Owned" value={ownedCount} />
              <StatCard label="Client builds" value={clientCount} />
              <StatCard label="Shipping rhythm" value={`~${rhythmCount}d`} />
            </div>

            <ul className="mt-10 space-y-3">
              {WHY_US_POINTS.map((point, idx) => (
                <li key={point.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                      idx === activeIndex
                        ? "border-white/20 bg-white/5"
                        : "border-transparent bg-transparent hover:bg-white/[0.02]"
                    }`}
                  >
                    <p className="flex items-center gap-3 font-bold text-white">
                      <Check className="h-4 w-4 shrink-0 opacity-50" />
                      {point.title}
                    </p>
                    <p className="mt-2 pl-7 text-sm text-zinc-500">{point.body}</p>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeSlide}
            className="order-1 flex flex-col rounded-[2.5rem] border border-white/5 bg-zinc-surface/50 p-8 lg:order-2"
          >
            <p className="type-meta-uppercase mb-8">Industrial Stack</p>
            <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3">
              {STACK_TECH.slice(0, 15).map((tech) => (
                <div 
                  key={tech.label}
                  className="stack-card"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/5 border border-white/5">
                    <svg role="img" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="white">
                      <path d={tech.icon.path} />
                    </svg>
                  </span>
                  <span className="text-[11px] font-bold text-zinc-300 tracking-tight">{tech.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[11px] font-medium text-zinc-600 leading-relaxed uppercase tracking-widest">
                Optimized for Adoptability, Retention, and Measurable Product Momentum.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/40 px-4 py-5 text-center">
      <p className="type-meta-uppercase opacity-50">{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
    </div>
  );
}
