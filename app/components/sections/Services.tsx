"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

const TIERS = [
  {
    name: "Operational MVP",
    price: "$1,500",
    description: "Perfect for internal tools, simple dashboards, or automating a single core business process.",
    features: [
      "Custom UI/UX Design",
      "Responsive Web App",
      "Up to 6 core views",
      "Database & API integration",
      "Business Logic Implementation",
      "3-week rapid delivery",
      "Full source code access",
    ],
    popular: false,
    icon: Zap,
    color: "blue",
  },
  {
    name: "Full Product",
    price: "$3,000",
    description: "A complete SaaS-ready platform with user roles, payments, and complex workflows.",
    features: [
      "Everything in MVP",
      "User Auth & Permissions",
      "Client/Customer Portals",
      "Payment Gateway (Stripe)",
      "Up to 12 core views",
      "Advanced Workflows",
      "6-8 week delivery",
    ],
    popular: true,
    icon: Globe,
    color: "indigo",
  },
  {
    name: "Enterprise Mobile",
    price: "$5,000",
    description: "Native iOS & Android apps for businesses that need to be in their customers' pockets.",
    features: [
      "Everything in Full Product",
      "Native iOS & Android (Expo)",
      "Push Notifications",
      "Camera & GPS Integration",
      "Offline capabilities",
      "App Store Submissions",
      "Dedicated support",
    ],
    popular: false,
    icon: ShieldCheck,
    color: "green",
  },
];

const TIER_STYLES = {
  blue: {
    hover: "hover:bg-black/[0.03]",
    ring: "ring-black/10",
    iconBg: "bg-black/[0.03]",
    iconText: "text-[#11100e]",
    checkText: "text-[#004225]",
  },
  indigo: {
    hover: "hover:bg-black/[0.03]",
    ring: "ring-black/10",
    iconBg: "bg-black/[0.03]",
    iconText: "text-[#11100e]",
    checkText: "text-[#004225]",
  },
  green: {
    hover: "hover:bg-black/[0.03]",
    ring: "ring-black/10",
    iconBg: "bg-black/[0.03]",
    iconText: "text-[#11100e]",
    checkText: "text-[#004225]",
  },
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-black/10 bg-[#f8f6ef] px-6 py-16 text-[#11100e] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#74695b]">
            <Sparkles className="h-3 w-3 text-[#004225]" />
            Pricing
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100e] sm:text-4xl md:text-5xl">High-velocity product building.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5f5548] sm:text-lg">
            We don&apos;t do hourly billing. You pay for the outcome, not the hours. 
            Fixed scope, fixed price, and zero surprises.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {TIERS.map((tier, i) => {
            const styles = TIER_STYLES[tier.color as keyof typeof TIER_STYLES];
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_55px_-42px_rgba(17,16,14,0.35)] sm:p-10 transition-all ${styles.hover} ${
                  tier.popular
                    ? `ring-1 ${styles.ring}`
                    : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-[#11100e] px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
                      Most Popular
                    </span>
                  </div>
                )}

              <div className="mb-8">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${styles.iconBg}`}>
                  <tier.icon className={`h-7 w-7 ${styles.iconText}`} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#11100e]">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tighter text-[#11100e]">{tier.price}</span>
                  {tier.name === "Enterprise Mobile" && (
                    <span className="text-sm font-medium text-[#74695b]">starting</span>
                  )}
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#5f5548]">
                  {tier.description}
                </p>
              </div>

              <ul className="mb-10 flex-1 space-y-4 border-t border-black/10 pt-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-medium text-[#3d362f]">
                    <Check className={`mt-0.5 h-5 w-5 flex-shrink-0 ${styles.checkText}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={tier.popular 
                  ? "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#11100e]" 
                  : "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-4 text-sm font-bold text-[#11100e] transition-colors hover:bg-black/[0.03]"
                }
              >
                Start Building
                <ArrowRight className="h-5 w-5" />
              </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-10 text-center">
            <p className="max-w-xl text-sm leading-relaxed text-[#5f5548]">
               Every project begins with a <strong>Product Roadmap & BRD</strong>. 
               We don&apos;t write code until the business logic is 100% verified.
            </p>
            <div className="flex flex-wrap justify-center gap-12">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#74695b]">Automotive</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#74695b]">Fintech</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#74695b]">Logistics</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#74695b]">Real Estate</span>
            </div>
        </div>
      </div>
    </section>
  );
}
