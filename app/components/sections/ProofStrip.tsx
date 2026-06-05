"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const PROOF_STATS = [
  { value: "8+", label: "systems shipped" },
  { value: "3-8w", label: "typical build" },
  { value: "100%", label: "source ownership" },
  { value: "monthly", label: "maintenance included" },
];

const LOGOS = [
  { src: "/logos/tera logo.png", alt: "TeraMotors", height: "h-8" },
  { src: "/logos/speakbill-logo.png", alt: "SpeakBill", height: "h-8" },
  { src: "/logos/logo_gari_full.png", alt: "Gari", height: "h-10" },
  { src: "/logos/logo-salasel2.png", alt: "Salasel", height: "h-8" },
  { src: "/logos/amana-logo-Bo-ciKV0.png", alt: "Amana", height: "h-10" },
  { src: "/logos/arslan logo.png", alt: "Arslan", height: "h-8" },
];

export function ProofStripSection() {
  const { shouldReduceMotion } = useMobileMotion();
  const logos = shouldReduceMotion ? LOGOS : [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="border-y border-black/10 bg-[#F8F6EF] px-6 py-8 text-[#11100E]">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 6 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.28 : 0.45 }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695B]">Proof of work</p>
          <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-[#74695B]">
            Real operating systems shipped for workshops, freelancers, and service businesses —
            replacing scattered tools with one owned platform.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.28 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.05 }}
              className="rounded-xl border border-black/10 bg-white px-5 py-4 shadow-mid"
            >
              <p className="text-2xl font-bold tracking-tight text-[#11100E]">{stat.value}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695B]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl overflow-hidden border-t border-black/10 pt-6">
        <div className="mobile-scroll-reel flex animate-logo-marquee items-center gap-12">
          {logos.map((logo, index) => (
            <Image
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={48}
              className={`${logo.height} w-auto shrink-0 object-contain opacity-60 grayscale transition-opacity hover:opacity-100`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
