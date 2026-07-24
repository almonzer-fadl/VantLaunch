"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CONTACT_EMAILS, TERAMOTORS_REGISTER_URL } from "@/app/lib/constants";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

const plans = [
  {
    name: "Free",
    price: "Free",
    description: "Explore the basics before choosing a paid plan.",
    cta: "Start free trial",
    href: TERAMOTORS_REGISTER_URL,
    highlighted: false,
  },
  {
    name: "Basic",
    price: "$49",
    suffix: "/mo",
    description: "Core tools for small and growing workshops.",
    cta: "Start free trial",
    href: TERAMOTORS_REGISTER_URL,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$129",
    suffix: "/mo",
    description: "More control for busy teams and higher job volume.",
    cta: "Start free trial",
    href: TERAMOTORS_REGISTER_URL,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom setup for multi-location or larger operations.",
    cta: "Request setup",
    href: TERAMOTORS_REGISTER_URL,
    highlighted: false,
  },
] as const;

const features = [
  "Customer management",
  "Vehicle tracking",
  "Job cards",
  "Basic invoicing",
  "Tax-ready invoice records",
] as const;

const accessSteps = [
  {
    title: "Create account",
    body: "Add your shop details and start setting up the workspace.",
  },
  {
    title: "Start the trial",
    body: "Use TeraMotors for 14 days with no credit card required.",
  },
  {
    title: "Add your workflow",
    body: "Set up customers, vehicles, job cards, invoices, and reports.",
  },
  {
    title: "Choose a plan",
    body: "Continue with the plan that fits your workshop.",
  },
] as const;

export function TeraMotorsPricingSection() {
  return (
    <section id="pricing" className="border-t border-white/5 bg-zinc-surface/30 px-6 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mx-auto mb-12 max-w-3xl text-center">
          <p className="type-meta-uppercase mb-4">TeraMotors pricing</p>
          <h2 className="type-display-xl mb-5 text-balance">Start free. Upgrade when ready.</h2>
          <p className="type-intro text-zinc-300">
            Create an account, try TeraMotors for 14 days, then choose the plan that fits your shop.
          </p>
        </motion.div>

        <motion.div variants={staggerSection} className="grid gap-4 lg:grid-cols-4">
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={fadeSlide}
              className={`relative rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-orange-500/70 bg-orange-500/[0.08]"
                  : "border-white/10 bg-zinc-surface/70"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{plan.description}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-3xl font-bold tracking-tight text-white">{plan.price}</span>
                {"suffix" in plan ? <span className="pb-1 text-sm font-semibold text-zinc-500">{plan.suffix}</span> : null}
              </div>
              <ul className="mt-6 grid gap-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                    <Check className="h-4 w-4 shrink-0 text-orange-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  plan.highlighted ? "bg-orange-500 text-white" : "bg-white text-black"
                }`}
              >
                {plan.cta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeSlide} className="mt-12 grid gap-4 lg:grid-cols-[1fr_0.85fr]">
          <section className="rounded-2xl border border-white/10 bg-zinc-surface/70 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white">Start using TeraMotors</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {accessSteps.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-400">
                    Step {index + 1}
                  </span>
                  <p className="mt-2 font-bold text-white">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white">Simple cancellation</h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-300">
              <p>You can cancel before the 14-day trial ends and avoid moving to a paid plan.</p>
              <p>Paid plans are billed monthly unless another billing period is agreed in writing.</p>
              <p>
                Refund requests are accepted within 10 days of the first paid charge, or within 30
                days of a subscription renewal. Each request is reviewed against access, usage,
                duplicate charges, billing errors, and service availability.
              </p>
              <p>
                For billing, cancellation, or refund requests, email{" "}
                <a className="text-white underline" href={`mailto:${CONTACT_EMAILS.product}`}>
                  {CONTACT_EMAILS.product}
                </a>.
              </p>
            </div>
          </section>
        </motion.div>
      </motion.div>
    </section>
  );
}
