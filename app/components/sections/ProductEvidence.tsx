"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

const teramotorsShots = [
  {
    src: "/media/teramotors-job-cards.webp",
    title: "Job cards",
    body: "Follow every repair from intake to completion.",
  },
  {
    src: "/media/teramotors-invoices.webp",
    title: "Invoices",
    body: "Create clean invoices with totals and payment status.",
  },
  {
    src: "/media/teramotors-reports.webp",
    title: "Reports",
    body: "Track sales, VAT, payments, technicians, and inventory value.",
  },
] as const;

export function ProductEvidenceSection() {
  return (
    <section id="demo" className="border-t border-white/5 px-6 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mb-12 max-w-3xl">
          <p className="type-meta-uppercase mb-4">TeraMotors demo</p>
          <h2 className="type-display-xl mb-5 text-balance">See TeraMotors in action.</h2>
          <p className="type-intro text-zinc-300">
            Watch the walkthrough and preview the screens your team would use every day.
          </p>
        </motion.div>

        <motion.div variants={fadeSlide} className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-surface shadow-[0_40px_140px_-70px_rgba(0,0,0,0.95)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-sm font-bold text-white">TeraMotors demo</p>
              <p className="text-xs text-zinc-500">4:51 product walkthrough</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-zinc-200">
              <PlayCircle className="h-4 w-4 text-orange-400" />
              Watch on page
            </span>
          </div>
          <video
            className="aspect-[16/10] w-full bg-black object-contain"
            controls
            preload="metadata"
            poster="/media/teramotors-demo-poster.jpg"
          >
            <source src="/media/teramotors-demo.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {teramotorsShots.map((shot) => (
            <motion.article
              key={shot.title}
              variants={fadeSlide}
              className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-surface/70"
            >
              <div className="relative aspect-[1800/944] w-full bg-[#070b14]">
                <Image
                  src={shot.src}
                  alt={`TeraMotors ${shot.title.toLowerCase()} screen`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-contain object-center"
                />
              </div>
              <div className="border-t border-white/10 p-5">
                <h3 className="text-base font-bold text-white">{shot.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{shot.body}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
