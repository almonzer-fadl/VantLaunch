"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";

/* Floating KPI cards that drift around the section */
function FloatingKPI({ x, y, delay, children }: { x: number; y: number; delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="absolute hidden md:block"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + delay * 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function CTABanner({ heading, sub, cta }: {
  heading: string;
  sub: string;
  cta: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.02, 0.06, 0.06, 0.02]);
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -20]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.98]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-black/10 bg-[#F8F6EF] px-6 py-16 sm:py-24 md:py-32">
      {/* Ambient background glow */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#004225]/[0.06] blur-[100px]" />
      </motion.div>

      {/* Floating elements — desktop only */}
      <FloatingKPI x={8} y={15} delay={0.2}>
        <div className="rounded-xl border border-black/10 bg-white/90 backdrop-blur-sm shadow-mid p-3 flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#004225]/10">
            <TrendingUp className="h-3.5 w-3.5 text-[#004225]" />
          </div>
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Revenue</p>
            <p className="text-xs font-bold text-[#11100E]">+18.2%</p>
          </div>
        </div>
      </FloatingKPI>
      <FloatingKPI x={82} y={20} delay={0.4}>
        <div className="rounded-xl border border-black/10 bg-white/90 backdrop-blur-sm shadow-mid p-3 flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#004225]/10">
            <Users className="h-3.5 w-3.5 text-[#004225]" />
          </div>
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Team</p>
            <p className="text-xs font-bold text-[#11100E]">92% utilized</p>
          </div>
        </div>
      </FloatingKPI>
      <FloatingKPI x={75} y={70} delay={0.6}>
        <div className="rounded-xl border border-black/10 bg-white/90 backdrop-blur-sm shadow-mid p-3 flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#004225]/10">
            <DollarSign className="h-3.5 w-3.5 text-[#004225]" />
          </div>
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Pipeline</p>
            <p className="text-xs font-bold text-[#11100E]">$2.4M</p>
          </div>
        </div>
      </FloatingKPI>
      <FloatingKPI x={15} y={72} delay={0.8}>
        <div className="rounded-xl border border-black/10 bg-white/90 backdrop-blur-sm shadow-mid p-3 flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#004225]/10">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#004225]" />
          </div>
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Tasks</p>
            <p className="text-xs font-bold text-[#11100E]">87% done</p>
          </div>
        </div>
      </FloatingKPI>

      {/* Connector lines between floating cards */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ minHeight: 400 }}>
        <motion.line
          x1="14%" y1="22%" x2="79%" y2="26%"
          stroke="#004225" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="6 4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.line
          x1="79%" y1="26%" x2="72%" y2="72%"
          stroke="#004225" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="6 4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </svg>

      {/* Central card */}
      <motion.div
        style={{ y: cardY, scale: cardScale }}
        className="relative z-10 mx-auto max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-[#004225]/15 bg-white/80 backdrop-blur-md shadow-lg p-8 text-center sm:p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#11100E] sm:text-3xl md:text-4xl">
              {heading}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#74695B]">
              {sub}
            </p>
          </motion.div>

          {/* Value points */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {[
              "We map your operations",
              "We identify bottlenecks",
              "We recommend the right system",
            ].map((point, i) => (
              <motion.span
                key={point}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-1.5 text-xs font-medium text-[#74695B]"
              >
                <CheckCircle2 className="h-3 w-3 text-[#004225]" />
                {point}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#004225] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-[#11100E] hover:shadow-xl"
              >
                {cta}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <p className="mt-3 text-xs text-[#74695B]">
              No obligation. No pressure. Just clarity.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
