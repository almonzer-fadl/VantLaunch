"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

const teramotorsShots = [
  {
    src: "/media/teramotors-job-cards.webp",
    title: "Job cards",
    body: "Track active repairs, vehicle context, status, labor time, and estimates from one board.",
  },
  {
    src: "/media/teramotors-invoices.webp",
    title: "Invoices",
    body: "Manage invoices with SAR amounts, payment status, and ZATCA-aware records.",
  },
  {
    src: "/media/teramotors-reports.webp",
    title: "Reports",
    body: "See sales, VAT, payments received, technician performance, and inventory value.",
  },
] as const;

const gariShots = [
  {
    src: "/media/gari-garage.webp",
    title: "Vehicle garage",
  },
  {
    src: "/media/gari-workshop.webp",
    title: "Workshop detail",
  },
  {
    src: "/media/gari-activity.webp",
    title: "Active jobs",
  },
  {
    src: "/media/gari-payments.webp",
    title: "Payment methods",
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
          <p className="type-meta-uppercase mb-4">Product evidence</p>
          <h2 className="type-display-xl mb-5 text-balance">Real screens, not just a pitch.</h2>
          <p className="type-intro text-zinc-300">
            TeraMotors has a raw product walkthrough on the homepage. Gari is shown as a product in development with live mobile UI previews.
          </p>
        </motion.div>

        <motion.div variants={fadeSlide} className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-surface shadow-[0_40px_140px_-70px_rgba(0,0,0,0.95)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-sm font-bold text-white">TeraMotors raw demo</p>
              <p className="text-xs text-zinc-500">4:51 walkthrough, compressed for web playback</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-zinc-200">
              <PlayCircle className="h-4 w-4 text-orange-400" />
              Watch on page
            </span>
          </div>
          <video
            className="aspect-[16/10] w-full bg-black object-cover"
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
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={shot.src}
                  alt={`TeraMotors ${shot.title.toLowerCase()} screen`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>
              <div className="border-t border-white/10 p-5">
                <h3 className="text-base font-bold text-white">{shot.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{shot.body}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div variants={fadeSlide} className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="type-meta-uppercase mb-4">Gari preview</p>
            <h3 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Trust-first auto service, coming soon.</h3>
            <p className="mt-5 text-base leading-relaxed text-zinc-300 md:text-lg">
              Gari is being shaped around service discovery, vehicle profiles, active job tracking, payments, and secure handover flows.
            </p>
            <div className="mt-6 grid gap-2 text-sm text-zinc-300">
              <p className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">Drop-off and collection-code concept for vehicle control.</p>
              <p className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">Customer app screens for garage, workshop detail, jobs, and payments.</p>
              <p className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">Backend and payment integration work already underway.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {gariShots.map((shot) => (
              <motion.figure
                key={shot.title}
                variants={fadeSlide}
                className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white shadow-[0_24px_80px_-46px_rgba(0,0,0,0.85)]"
              >
                <div className="relative aspect-[9/19] w-full">
                  <Image
                    src={shot.src}
                    alt={`Gari ${shot.title.toLowerCase()} mobile screen`}
                    fill
                    sizes="(max-width: 640px) 42vw, 190px"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="border-t border-black/10 bg-white px-3 py-2 text-center text-[11px] font-bold text-zinc-700">
                  {shot.title}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
