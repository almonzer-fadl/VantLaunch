"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

const PRODUCTS = [
  {
    name: "TeraMotors",
    stage: "Live",
    oneLiner: "A cleaner way to run repairs, keep records, issue invoices, and see what is happening across the shop.",
    cta: "#pricing",
    ctaLabel: "See pricing and access",
    details: ["14-day trial", "Free, $49, $129 plans", "Built for repair shops"],
  },
] as const;

export function ProductsSection() {
  return (
    <section id="products" className="border-t border-white/5 px-6 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mb-14 text-center md:mb-16">
          <p className="type-meta-uppercase mb-4">TeraMotors</p>
          <h2 className="type-display-xl mb-5 text-balance">Keep the shop moving.</h2>
          <p className="type-intro mx-auto max-w-3xl text-center">
            Replace scattered notes, WhatsApp follow-ups, and manual invoice tracking with one
            workspace for daily repair operations.
          </p>
        </motion.div>

        <motion.div variants={staggerSection} className="mx-auto grid max-w-3xl gap-4">
          {PRODUCTS.map((product) => {
            const external = product.cta.startsWith("http");
            return (
              <motion.article
                key={product.name}
                variants={fadeSlide}
                className="rounded-2xl border border-white/10 bg-zinc-surface/60 p-6"
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold tracking-tight text-white">{product.name}</h3>
                  <span className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-300">
                    {product.stage}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-300">{product.oneLiner}</p>
                <ul className="mt-5 grid gap-2">
                  {product.details.map((detail) => (
                    <li key={detail} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-zinc-300">
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.cta}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
                >
                  {product.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
