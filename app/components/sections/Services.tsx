"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const TIERS = [
  {
    name: "Dashboards",
    price: "$1,500",
    description: "Clean, responsive dashboard templates — perfect for analytics, reporting, or internal tools.",
    features: [
      "Custom dashboard design",
      "Responsive PWA (works on all devices)",
      "Up to 6 pages / views",
      "Data integration (API, database)",
      "2 design revisions",
      "2 feature revisions",
      "3-week delivery",
    ],
    popular: false,
  },
  {
    name: "Portal + Dashboard",
    price: "$3,000",
    description: "Full client portal with dashboard — authentication, user roles, and custom workflows.",
    features: [
      "Everything in Dashboards",
      "User authentication & roles",
      "Client-facing portal",
      "Custom workflows & logic",
      "Up to 12 pages / views",
      "2 design + 2 feature revisions",
      "6-8 week delivery",
    ],
    popular: true,
  },
  {
    name: "Mobile Native",
    price: "$5,000+",
    description: "Native iOS & Android apps — full mobile experience with push notifications and device features.",
    features: [
      "Everything in Portal tier",
      "Native iOS & Android apps",
      "Push notifications",
      "Camera, GPS, device features",
      "App Store & Play Store submission",
      "Custom scope & timeline",
      "Dedicated project manager",
    ],
    popular: false,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="divider px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="badge mb-4 inline-block">Services</span>
          <h2 className="type-section-heading">Simple, fixed pricing.</h2>
          <p className="type-section-sub mx-auto">
            No hourly billing. No surprises. Pick your tier and we build it.
            Every project includes a detailed BRD before we write a single line of code.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-premium relative flex flex-col ${
                tier.popular
                  ? "border-amber-500/30 ring-1 ring-amber-500/10"
                  : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge bg-amber-500/20 text-amber-300 border-amber-500/30">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="type-card-title text-2xl">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.name === "Mobile Native" && (
                    <span className="text-stone-500 text-sm">starting</span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  {tier.description}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-stone-300">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={tier.popular ? "btn-primary w-full" : "btn-ghost w-full"}
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center text-sm text-stone-500"
        >
          Need ongoing support? Retainers available at $500–$750/mo (5hr cap, $75/hr extra).
          <br />
          Code ownership transfers upon final payment. Payment via Stripe.
        </motion.p>
      </div>
    </section>
  );
}
