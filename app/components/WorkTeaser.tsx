"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const SHOWCASE = [
  { name: "TeraMotors", metric: "18 hrs/week saved", href: "/work/teramotors" },
  { name: "SpeakBill", metric: "45 min → 60 sec", href: "/work/speakbill" },
  { name: "Gari", metric: "100% digital history", href: "/work/gari" },
];

export function WorkTeaser() {
  return (
    <section className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Our Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Real systems. Measurable outcomes.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {SHOWCASE.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={item.href}
                className="block rounded-2xl border border-black/10 bg-white p-5 shadow-mid transition-all hover:shadow-lg hover:border-[#004225]/20"
              >
                <h3 className="text-lg font-bold tracking-tight text-[#11100E]">{item.name}</h3>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#004225]/5 px-3 py-2">
                  <TrendingUp className="h-3.5 w-3.5 text-[#004225]" />
                  <span className="text-sm font-bold text-[#004225]">{item.metric}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#004225] transition-colors hover:text-[#11100E]"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
