"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

const APPS = [
  {
    name: "TeraMotors",
    stage: "Live",
    description: "Workshop management — job cards, invoices, reports, customer updates. Built for repair shops.",
    href: "https://app.teramotor.cc/register",
    label: "Start free trial",
    image: "/media/teramotors-dashboard.webp",
    color: "bg-[#eef2f8]",
    accent: "border-black/10 bg-white text-[#74695b]",
  },
  {
    name: "SpeakBill",
    stage: "Live",
    description: "Voice-to-invoice. Speak and get a professional invoice in seconds. For freelancers and small teams.",
    href: "https://speakbill.vantlaunch.com",
    label: "Visit SpeakBill",
    image: "/media/speakbill-dashboard.png",
    color: "bg-[#eef2f8]",
    accent: "border-black/10 bg-white text-[#74695b]",
  },
  {
    name: "Gari",
    stage: "Coming soon",
    description: "Auto service for drivers — find workshops, track jobs, manage vehicles, pay with confidence.",
    href: "#ventures",
    label: "Preview Gari",
    image: "/media/gari-home.webp",
    color: "bg-[#eef2f8]",
    accent: "border-black/10 bg-white text-[#74695b]",
  },
] as const;

export function ProductsSection() {
  return (
    <section id="products" className="border-t border-black/[0.06] bg-[#f8f6ef] px-6 py-20 text-[#11100e] md:py-28">
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mb-14 md:mb-20">
          <p className="type-meta-uppercase mb-4">Our products</p>
          <h2 className="type-display-xl mb-5 text-balance">Three apps. One standard.</h2>
          <p className="type-intro max-w-2xl">
            Every product ships with the same engineering quality — fast, focused, and built for real users.
          </p>
        </motion.div>

        <motion.div variants={staggerSection} className="grid gap-6 md:grid-cols-3">
          {APPS.map((app) => {
            const external = app.href.startsWith("http");
            return (
              <motion.article
                key={app.name}
                variants={fadeSlide}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-colors hover:bg-black/[0.03]"
              >
                <div className={`relative aspect-[16/10] w-full ${app.color}`}>
                  <Image
                    src={app.image}
                    alt={`${app.name} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-contain object-center p-4 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent" />
                </div>

                <div className="flex flex-col gap-4 p-6 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold tracking-tight text-[#11100e]">{app.name}</h3>
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${app.accent}`}>
                      {app.stage}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#5f5548]">{app.description}</p>
                  <Link
                    href={app.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#11100e] transition-colors hover:text-blue-700"
                  >
                    {app.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
