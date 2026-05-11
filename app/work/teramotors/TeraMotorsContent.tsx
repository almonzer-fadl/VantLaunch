"use client";

import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TERAMOTORS_REGISTER_URL } from "@/app/lib/constants";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  CalendarDays,
  Car,
  ClipboardCheck,
  FileText,
  Globe2,
  Package,
  ReceiptText,
  Shield,
  Smartphone,
  Users,
  Wrench,
} from "lucide-react";

const highlights = [
  {
    title: "Customers and vehicles",
    body: "Keep customer profiles, vehicle records, plates, VIN details, and service history together.",
    icon: Car,
  },
  {
    title: "Job cards",
    body: "Create, assign, update, and complete repair work without losing track of the next step.",
    icon: ClipboardCheck,
  },
  {
    title: "Organized invoices",
    body: "Prepare professional invoices with clear totals, customer details, and payment status.",
    icon: ReceiptText,
  },
  {
    title: "Reports",
    body: "See revenue, open work, job progress, inventory movement, and workshop activity in one view.",
    icon: BarChart3,
  },
  {
    title: "Appointments",
    body: "Book visits, organize incoming work, and help the front desk plan the day with more confidence.",
    icon: CalendarDays,
  },
  {
    title: "Parts inventory",
    body: "Track parts, stock levels, supplier details, and cost visibility before small issues become delays.",
    icon: Package,
  },
  {
    title: "Team-friendly workflows",
    body: "Support the front desk, technicians, and owners with clear screens for daily work.",
    icon: Globe2,
  },
  {
    title: "Customer updates",
    body: "Keep communication clear around estimates, progress, approvals, and final handover.",
    icon: Smartphone,
  },
] as const;

const frontDeskFeatures = [
  "Find customer, vehicle, and visit history without searching through chats or paper files.",
  "Start estimates and job cards from the same workspace your team uses each day.",
  "Keep upcoming bookings, open work, and customer follow-up easier to review.",
];

const shopFloorFeatures = [
  "Give technicians clearer job context before work starts.",
  "Track job status from inspection through completion.",
  "Connect parts, notes, and repair progress to the right vehicle record.",
];

const billingFeatures = [
  { title: "Estimates", body: "Share cleaner repair pricing before work is approved." },
  { title: "Invoices", body: "Generate organized customer records with tax-ready details." },
  { title: "Payments", body: "Keep paid, unpaid, and follow-up work easier to reconcile." },
  { title: "Exports", body: "Prepare reporting data for owners, finance, and operations review." },
];

const accessSteps = [
  {
    title: "Create account",
    body: "Add your shop details, team size, and the workflows you want to manage.",
  },
  {
    title: "Start the trial",
    body: "Use TeraMotors for 14 days with no credit card required.",
  },
  {
    title: "Set up the shop",
    body: "Add customers, vehicles, job cards, invoices, and reports.",
  },
  {
    title: "Choose a plan",
    body: "Continue on Free, Basic, Pro, or Enterprise after the trial.",
  },
] as const;

const plans = [
  { name: "Free", price: "Free", body: "Try customer records, vehicles, basic invoicing, and job cards." },
  { name: "Basic", price: "$49/mo", body: "Core tools for small and growing repair shops." },
  { name: "Pro", price: "$129/mo", body: "More control for busy teams and higher job volume." },
  { name: "Enterprise", price: "Custom", body: "Custom setup for larger teams or multi-location operations." },
] as const;

export function TeraMotorsContent({ onClose }: { onClose?: () => void }) {
  return (
    <div className="space-y-16">
      <section>
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="type-chip">TeraMotors</span>
          <span className="type-chip">Workshop software</span>
          <span className="type-chip">14-day approved trial</span>
        </div>

        <h1 className="type-case-h1">TeraMotors</h1>
        <p className="type-case-tagline">
          Workshop management software for modern repair shops.
        </p>
        <p className="type-case-lede">
          Keep repair visits, invoices, customer updates, and shop reporting organized in one
          workspace built around real repair operations.
        </p>

        <figure className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-zinc-surface shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)]">
          <div className="relative aspect-[1800/944] w-full bg-[#070b14]">
            <Image
              src="/media/teramotors-dashboard.webp"
              alt="TeraMotors dashboard showing workshop revenue, job cards, and activity"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-contain object-center"
            />
          </div>
          <figcaption className="type-figure-caption border-t border-white/[0.06] bg-zinc-surface/95 px-5 py-4">
            Live product screens for workshop operations, invoices, reports, and job tracking.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2 className="type-case-section-heading">Run the workshop from one place.</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {highlights.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="glass-card rounded-[1.75rem] border border-white/[0.06] bg-white/[0.02] p-7 transition-colors hover:border-white/20"
            >
              <Icon className="h-10 w-10 text-white/90" aria-hidden />
              <p className="type-case-card-title">{title}</p>
              <p className="type-case-card-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-8 md:p-10">
        <h2 className="type-case-section-heading-inline">
          <Wrench className="h-8 w-8 text-white/90" />
          Built for daily workshop work.
        </h2>
        <p className="mt-4 type-prose-intro">
          TeraMotors is designed for the work that happens between the front desk, the repair bay,
          and the customer. The goal is simple: fewer missing details, cleaner records, and faster
          handoff between people.
        </p>
      </section>

      <FeatureBlock
        eyebrow="Front desk"
        title="Customer intake"
        items={frontDeskFeatures}
        icon={Users}
      />

      <FeatureBlock
        eyebrow="Shop floor"
        title="Repair flow"
        items={shopFloorFeatures}
        icon={Building2}
      />

      <FeatureTwoCol
        eyebrow="Billing and records"
        title="Cleaner estimates, invoices, and reporting."
        leftTitle="What the team can manage"
        leftItems={billingFeatures.map((f) => `${f.title}: ${f.body}`)}
        rightBlocks={[
          {
            title: "Tax-ready records",
            body: "Keep customer, invoice, and payment data organized for cleaner billing review.",
            icon: Shield,
          },
          {
            title: "Operational visibility",
            body: "Review active work, completed jobs, revenue, and reports without stitching data together manually.",
            icon: FileText,
          },
        ]}
      />

      <section>
        <h2 className="type-case-section-heading">Access, pricing, and cancellation.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {accessSteps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <p className="type-meta-muted-caps">Step {index + 1}</p>
              <p className="type-feature-card-title-sm">{step.title}</p>
              <p className="type-feature-card-body">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
              <p className="type-feature-card-title-sm">{plan.name}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{plan.price}</p>
              <p className="type-feature-card-body">{plan.body}</p>
            </div>
          ))}
        </div>

        <p className="type-case-subtle-note mt-6">
          Cancel before renewal to avoid the next charge. Refund requests are accepted within 10
          days of the first paid charge, or within 30 days of a subscription renewal, and are
          reviewed against access, usage, duplicate charges, billing errors, and service availability.
        </p>
      </section>

      <section className="rounded-[2rem] border border-white/20 bg-white/[0.08] px-8 py-12 text-center">
        <p className="type-accent-label-sm mx-auto max-w-lg">
          Ready to try TeraMotors in your workshop?
        </p>
        <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <Link href="https://app.teramotor.cc/" target="_blank" rel="noopener noreferrer" className="type-email-cta-ghost-outline">
            Open live app
            <ArrowUpRight className="h-5 w-5" />
          </Link>
          <Link
            href={TERAMOTORS_REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onClose?.()}
            className="type-email-cta-solid"
          >
            Start free trial
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureBlock({
  eyebrow,
  title,
  items,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  icon: LucideIcon;
}) {
  return (
    <section>
      <p className="type-meta-accent-caps">{eyebrow}</p>
      <h2 className="mt-2 type-case-section-heading-inline">
        <Icon className="h-8 w-8 text-white/90" />
        {title}
      </h2>
      <ul className="mt-6 space-y-4 type-prose-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function FeatureTwoCol({
  eyebrow,
  title,
  leftTitle,
  leftItems,
  rightBlocks,
}: {
  eyebrow: string;
  title: string;
  leftTitle: string;
  leftItems: string[];
  rightBlocks: { title: string; body: string; icon: LucideIcon }[];
}) {
  return (
    <section>
      <p className="type-meta-accent-caps">{eyebrow}</p>
      <h2 className="mt-2 type-case-section-heading">{title}</h2>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="type-stack-heading">{leftTitle}</p>
          <ul className="mt-4 space-y-3 type-prose-muted">
            {leftItems.map((item) => (
              <li key={item} className="flex gap-3 border-b border-white/[0.04] pb-3 last:border-0">
                <span className="text-white/90">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          {rightBlocks.map((b) => {
            const Ico = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-[1.25rem] border border-white/[0.06] bg-white/[0.02] px-6 py-5"
              >
                <Ico className="h-7 w-7 text-white/90" />
                <p className="type-feature-card-title-sm">{b.title}</p>
                <p className="type-feature-card-body">{b.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
