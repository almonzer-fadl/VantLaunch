"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

const PRODUCTS = [
  {
    name: "TeraMotors",
    stage: "Live",
    oneLiner: "Workshop operations SaaS for job flow, invoicing, and compliance.",
    cta: "https://app.teramotor.cc/",
  },
  {
    name: "Salasel",
    stage: "Live",
    oneLiner: "B2B procurement SaaS for hospitality teams and supplier orchestration.",
    cta: "https://salasel.com.sa/",
  },
  {
    name: "Araba",
    stage: "Early access",
    oneLiner: "Mobility-assistance SaaS with real-time routing and secure booking flows.",
    cta: "mailto:build@vantlaunch.com?subject=Araba%20early%20access",
  },
  {
    name: "Gari",
    stage: "Early access",
    oneLiner: "Trust-first auto-service SaaS with secure approval and handover controls.",
    cta: "mailto:build@vantlaunch.com?subject=Gari%20early%20access",
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
          <p className="type-meta-uppercase mb-4">Our SaaS</p>
          <h2 className="type-display-xl mb-5 text-balance">Micro SaaS products solving operational pain.</h2>
          <p className="type-intro mx-auto max-w-3xl text-center">
            We build and operate our own SaaS products. Join early access, share your workflow, and help shape upcoming releases.
          </p>
        </motion.div>

        <motion.div variants={staggerSection} className="grid gap-4 md:grid-cols-2">
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
                <Link
                  href={product.cta}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
                >
                  {product.stage === "Live" ? "Open product" : "Join early access"}
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
