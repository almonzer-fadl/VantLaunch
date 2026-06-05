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
    <section id="demo" className="border-t border-black/[0.06] bg-[#fff9ed] px-6 py-20 text-[#17140d] md:py-28">
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
          <p className="type-intro">
            Watch the walkthrough and preview the screens your team would use every day.
          </p>
        </motion.div>

        <motion.div variants={fadeSlide} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_-42px_rgba(23,20,13,0.35)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 px-5 py-4">
            <div>
              <p className="text-sm font-bold text-[#17140d]">TeraMotors demo</p>
              <p className="text-xs text-[#8a7657]">4:51 product walkthrough</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-bold text-[#8a7657]">
              <PlayCircle className="h-4 w-4 text-[#17140d]" />
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
              className="overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className="relative aspect-[1800/944] w-full bg-[#efe2c7]">
                <Image
                  src={shot.src}
                  alt={`TeraMotors ${shot.title.toLowerCase()} screen`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-contain object-center"
                />
              </div>
              <div className="border-t border-black/10 p-5">
                <h3 className="text-base font-bold text-[#17140d]">{shot.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#695b45]">{shot.body}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
