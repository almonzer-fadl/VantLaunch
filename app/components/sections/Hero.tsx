"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 md:pb-32 md:pt-32 lg:pb-40 lg:pt-40">
      {/* Warm ambient glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-600/[0.02] blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8"
        >
          <span className="badge">Product Studio</span>
        </motion.div>

        <h1 className="type-hero-heading max-w-3xl mx-auto">
          Custom software for
          <br />
          <span className="text-accent-gradient">your business.</span>
        </h1>

        <p className="type-hero-sub mx-auto mt-8 max-w-xl">
          We build dashboards, client portals, and mobile apps — on your terms.
          Fixed price. Clear process. Real results.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="#services" className="btn-primary">
            See pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#portfolio" className="btn-ghost">
            View our work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-sm text-stone-600"
        >
          8 products shipped · Trusted by businesses in 5 countries
        </motion.p>
      </motion.div>
    </section>
  );
}
