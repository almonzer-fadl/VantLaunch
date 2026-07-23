"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

const PRODUCTS = [
  {
    name: "TeraMotors",
    stage: "Live",
    oneLiner: "Workshop management for Saudi auto repair shops: customers, vehicles, job cards, ZATCA invoices, SAR reporting, and WhatsApp-ready workflows.",
    cta: "https://app.teramotor.cc/",
    ctaLabel: "Open live app",
    details: ["14-day trial", "Free, SAR 199, SAR 499 plans", "Built for Saudi workshops"],
  },
  {
    name: "Gari",
    stage: "Coming soon",
    oneLiner: "Auto-service customer app focused on transparent booking, workshop discovery, vehicle profiles, active jobs, payments, and secure handover.",
    cta: "/work/gari",
    ctaLabel: "View product direction",
    details: ["Customer app UI ready", "Two-code handover concept", "Payments and job tracking planned"],
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
          <h2 className="type-display-xl mb-5 text-balance">Owned products for automotive operations.</h2>
          <p className="type-intro mx-auto max-w-3xl text-center">
            VantLaunch is focused on software we own and operate. TeraMotors is live; Gari is the next product in development.
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
