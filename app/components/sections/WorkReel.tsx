"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";
import { VideoModal } from "../VideoModal";

const REEL_ITEMS = [
  {
    title: "Workshop command center",
    label: "TeraMotors",
    src: "/media/teramotors-dashboard.webp",
    alt: "TeraMotors dashboard",
    href: "/work/teramotors",
    demoVideo: "/media/teramotors-demo.mp4",
    demoPoster: "/media/teramotors-demo-poster.jpg",
    wide: true,
  },
  {
    title: "Voice invoicing",
    label: "SpeakBill",
    src: "/media/speakbill-mic.png",
    alt: "SpeakBill voice input screen",
    href: "/work/speakbill",
    demoVideo: "/media/6F57B964-0E1C-4DA3-9B6B-D76E46A30FA0.MP4",
  },
  {
    title: "Customer garage",
    label: "Gari",
    src: "/media/gari-garage.webp",
    alt: "Gari garage screen",
    href: "/work/gari",
  },
  {
    title: "Job cards",
    label: "TeraMotors",
    src: "/media/teramotors-job-cards.webp",
    alt: "TeraMotors job card screen",
    href: "/work/teramotors",
    demoVideo: "/media/teramotors-demo.mp4",
    demoPoster: "/media/teramotors-demo-poster.jpg",
  },
  {
    title: "Payment flows",
    label: "Gari",
    src: "/media/gari-payments.webp",
    alt: "Gari payments screen",
    href: "/work/gari",
  },
  {
    title: "Invoice preview",
    label: "SpeakBill",
    src: "/media/speakbill-invoice-preview.png",
    alt: "SpeakBill invoice preview",
    href: "/work/speakbill",
    demoVideo: "/media/6F57B964-0E1C-4DA3-9B6B-D76E46A30FA0.MP4",
    wide: true,
  },
];

export function WorkReelSection() {
  const { shouldReduceMotion } = useMobileMotion();
  const reelItems = shouldReduceMotion ? REEL_ITEMS : [...REEL_ITEMS, ...REEL_ITEMS];
  const [activeVideo, setActiveVideo] = useState<{ src: string; poster?: string; title: string } | null>(null);

  return (
    <section className="overflow-hidden bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          >
            <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
              Product reel
            </span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl md:text-5xl">
              A workshop OS. A voice-to-invoice tool. A driver-to-workshop marketplace.
            </h2>
          </motion.div>
          <a
            href="#portfolio"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-black/10 bg-transparent px-6 py-3 text-sm font-bold text-[#11100E] transition-all hover:bg-black/[0.03]"
          >
            Open case studies
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[#F8F6EF] to-transparent sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-[#F8F6EF] to-transparent sm:block" />
        <div className="mobile-scroll-reel flex animate-work-reel gap-5 px-6 pr-5 sm:px-0">
          {reelItems.map((item, index) => (
            <figure
              key={`${item.title}-${index}`}
              className={`group relative shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid ${
                item.wide ? "w-[520px] max-w-[82vw]" : "w-[260px]"
              }`}
            >
              <Link href={item.href} className="block">
                <div className={item.wide ? "relative aspect-[16/10]" : "relative aspect-[9/13]"}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={item.wide ? "520px" : "260px"}
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
              </Link>
              <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end justify-between gap-5 p-5">
                <Link href={item.href} className="pointer-events-auto">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/75 hover:text-white transition-colors">
                    {item.label}
                  </p>
                  <p className="mt-1 text-base font-bold tracking-tight text-white hover:underline transition-all">{item.title}</p>
                </Link>
                {item.demoVideo && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVideo({ src: item.demoVideo!, poster: item.demoPoster, title: item.label });
                    }}
                    className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-all hover:bg-white/25 hover:scale-110 hover:border-white/40"
                    aria-label={`Watch ${item.label} demo`}
                  >
                    <Play className="h-5 w-5" />
                  </button>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {activeVideo && (
        <VideoModal
          open={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          src={activeVideo.src}
          poster={activeVideo.poster}
          title={activeVideo.title}
        />
      )}
    </section>
  );
}
