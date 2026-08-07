"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Gauge,
  LayoutDashboard,
  LineChart,
  MonitorSmartphone,
  PanelTop,
  Users,
  Workflow,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

type Product = {
  name: string;
  price: string;
  eyebrow: string;
  description: string;
  outcome: string;
  features: readonly string[];
  requirements: readonly string[];
  timeline: string;
  icon: LucideIcon;
  accent: string;
  href: string;
  image?: string;
  featured?: boolean;
};

const PRODUCTS = [
  {
    name: "Meta & Google Conversion Tracking",
    price: "$199",
    eyebrow: "Tracking setup",
    description: "Clean Meta Pixel, Google Ads, GA4, events, and conversion tracking so ad spend has real numbers behind it.",
    outcome: "Know which ads, pages, and actions are creating leads.",
    features: ["Meta Pixel and Google tags", "Lead and purchase events", "GA4 conversion setup", "Testing and handover notes"],
    requirements: ["Website or landing page access", "Meta Business access", "Google Ads or GA4 access"],
    timeline: "1-3 days",
    icon: LineChart,
    accent: "#004225",
    href: "https://whop.com/almonzer-fadl/meta-google-conversion-tracking/",
    image: "/media/vantlaunch_banner_1.png",
  },
  {
    name: "Custom Marketing & ROI Dashboard",
    price: "$399",
    description: "A focused dashboard that connects campaign spend, traffic, leads, and revenue into one view.",
    outcome: "See ROI without stitching reports together manually.",
    features: ["Campaign KPI dashboard", "Lead source reporting", "Revenue and spend views", "Owner-friendly summary screen"],
    requirements: ["Data sources or exports", "Ad account access", "Revenue or lead source fields"],
    timeline: "3-5 days",
    icon: LayoutDashboard,
    accent: "#0f766e",
    href: "https://whop.com/almonzer-fadl/custom-marketing-roi-dashboard-connect-ads-whatsapp-revenue/",
    image: "/media/vantlaunch_roi_banner_v2.png",
  },
  {
    name: "Automated WhatsApp & SMS Lead Nurture System",
    price: "$699",
    eyebrow: "Lead nurture",
    description: "Automated follow-up flows for new leads, missed replies, quote nudges, appointment reminders, and reactivation.",
    outcome: "Turn more inquiries into booked calls, visits, or paid work.",
    features: ["WhatsApp and SMS flow map", "Lead qualification messages", "Follow-up automation", "Basic CRM handoff"],
    requirements: ["Lead source or form", "Messaging provider access", "Offer and qualification rules"],
    timeline: "5-7 days",
    icon: Bot,
    accent: "#16a34a",
    featured: true,
    href: "https://whop.com/almonzer-fadl/automated-whatsapp-sms-lead-nurture-system/",
    image: "/media/vantlaunch_messaging_engine_banner.png",
  },
  {
    name: "High-Converting Landing Page",
    price: "$449",
    eyebrow: "Landing page",
    description: "A conversion-focused page for one offer, built with clear positioning, proof, forms, tracking, and responsive polish.",
    outcome: "Send traffic to a page that explains, proves, and captures demand.",
    features: ["Offer and section structure", "Responsive page build", "Lead form or checkout CTA", "Tracking-ready launch"],
    requirements: ["Logo and brand basics", "Offer details", "Domain or hosting access"],
    timeline: "3-6 days",
    icon: PanelTop,
    accent: "#334155",
    href: "https://whop.com/almonzer-fadl/high-converting-landing-page-88/",
    image: "/media/vantlaunch_landing_page_banner.png",
  },
  {
    name: "Branded Client & Partner Portal System",
    price: "$999",
    eyebrow: "Client portal",
    description: "A branded portal where clients or partners can log in, submit requests, see status, and access shared records.",
    outcome: "Replace scattered email updates with one clean client-facing workspace.",
    features: ["Login and role setup", "Client dashboard", "Request/status workflows", "Admin management screen"],
    requirements: ["User roles", "Portal fields", "Brand assets and domain"],
    timeline: "7-14 days",
    icon: Users,
    accent: "#2563eb",
    href: "https://whop.com/almonzer-fadl/branded-client-partner-portal-system/",
    image: "/media/vantlaunch_client_portal_banner.png",
  },
  {
    name: "Staff Portal & Internal Workflow",
    price: "$999",
    eyebrow: "Internal operations",
    description: "An internal tool for teams that need task flow, approvals, records, staff roles, and daily operational visibility.",
    outcome: "Move repeatable internal work out of spreadsheets and chats.",
    features: ["Staff dashboard", "Workflow stages", "Role-based access", "Operational records"],
    requirements: ["Workflow steps", "Staff roles", "Fields and status rules"],
    timeline: "7-14 days",
    icon: Workflow,
    accent: "#7c3aed",
    href: "https://whop.com/almonzer-fadl/staff-portal-internal-workflow/",
    image: "/media/vantlaunch_staff_portal_banner.png",
  },
  {
    name: "Custom CRM Setup & Sales Pipeline Build",
    price: "$549",
    eyebrow: "CRM pipeline",
    description: "A practical CRM and sales pipeline setup for tracking leads, stages, follow-ups, deal values, and next actions.",
    outcome: "Stop losing leads and see what is moving toward revenue.",
    features: ["Lead pipeline stages", "Follow-up fields", "Sales dashboard", "Simple handover guide"],
    requirements: ["Current lead sources", "Pipeline stages", "Sales fields or spreadsheet"],
    timeline: "3-5 days",
    icon: Gauge,
    accent: "#dc2626",
    href: "https://whop.com/almonzer-fadl/custom-crm-setup-sales-pipeline-build/",
    image: "/media/vantlaunch_crm_setup_banner.png",
  },
  {
    name: "Custom-Built Operating System",
    price: "$1,999",
    eyebrow: "Full OS build",
    description: "A compact custom operating system for one business workflow: dashboard, records, roles, automation, and reporting.",
    outcome: "One owned system around the workflow that matters most.",
    features: ["Workflow architecture", "Admin dashboard", "Database and roles", "Launch and source handover"],
    requirements: ["Core workflow", "User roles", "Records, statuses, and reports"],
    timeline: "14-21 days",
    icon: MonitorSmartphone,
    accent: "#004225",
    featured: true,
    href: "https://whop.com/almonzer-fadl/custom-built-operating-system/",
    image: "/media/vantlaunch_custom_os_banner.png",
  },
] satisfies readonly Product[];

function ProductImage({ product }: { product: Product }) {
  if (!product.image) return null;

  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-black/10 bg-[#F8F6EF]">
      <Image
        src={product.image}
        alt={`${product.name} product image`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
    </div>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { shouldReduceMotion } = useMobileMotion();

  useEffect(() => {
    if (!product) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close product details"
            className="absolute inset-0 bg-[#11100E]/35 sm:backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.12 : 0.2 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-black/10 bg-[#F8F6EF] shadow-high"
            initial={{ opacity: 0, y: shouldReduceMotion ? 12 : 28, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 12 : 28, scale: shouldReduceMotion ? 1 : 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0.18 : 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#74695B] shadow-low transition-colors hover:text-[#11100E]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-black/10 bg-white lg:border-b-0 lg:border-r">
                <ProductImage product={product} />
                <div className="p-5 sm:p-7">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-low"
                      style={{ backgroundColor: product.accent }}
                    >
                      <product.icon className="h-5 w-5" />
                    </div>
                    <p className="rounded-full border border-black/10 bg-[#F8F6EF] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B]">
                      {product.eyebrow}
                    </p>
                  </div>
                  <h2 id="product-modal-title" className="mt-2 text-2xl font-bold tracking-tight text-[#11100E] sm:text-3xl">
                    {product.name}
                  </h2>
                  <div className="mt-5 border-y border-black/[0.06] py-4">
                    <span className="text-3xl font-bold tracking-tighter text-[#11100E]">{product.price}</span>
                    <span className="ml-1 text-sm font-medium text-[#74695B]">starting price</span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-[#74695B]">{product.description}</p>
                </div>
              </div>

              <div className="p-5 sm:p-7 lg:p-8">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B]">Outcome</p>
                  <p className="mt-2 text-base font-bold leading-relaxed text-[#11100E]">{product.outcome}</p>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <DetailList title="Included" items={product.features} />
                  <DetailList title="What we need" items={product.requirements} />
                </div>

                <div className="mt-6 rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B]">Typical delivery</p>
                  <p className="mt-2 text-sm font-bold text-[#11100E]">{product.timeline}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#74695B]">
                    Timeline depends on how fast access, assets, and review notes are provided.
                    Any custom add-ons are confirmed before payment.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#11100E] sm:w-auto"
                  >
                    Buy on Whop
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-black/10 bg-transparent px-5 py-3 text-sm font-bold text-[#11100E] transition-colors hover:bg-black/[0.03] sm:w-auto"
                  >
                    Back to products
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function DetailList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-xl border border-black/[0.06] bg-white p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B]">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm font-medium leading-relaxed text-[#443825]">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#004225]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesSection() {
  const { shouldReduceMotion } = useMobileMotion();
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="scroll-mt-20 border-t border-black/10 bg-[#F8F6EF] px-4 py-12 text-[#11100E] sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B] sm:mb-4 sm:text-xs sm:tracking-[0.16em]">
            Productized builds
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-[#11100E] sm:text-3xl md:text-4xl lg:text-5xl">
            What do you need built?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#74695B] sm:mt-4 sm:text-base sm:leading-relaxed lg:text-lg">
            Eight products. Fixed starting prices. Clear delivery windows. Click any
            product to see exactly what you get and what we need from you.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <motion.button
              key={product.name}
              type="button"
              onClick={() => setActiveProduct(product)}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.08 }}
              className={`group relative flex min-h-[330px] flex-col overflow-hidden rounded-xl border border-black/10 bg-white text-left shadow-mid transition-all hover:-translate-y-0.5 hover:border-[#004225]/25 hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-[#004225]/25 sm:rounded-2xl ${
                product.featured ? "ring-1 ring-[#004225]/30" : ""
              }`}
            >
              {product.featured && (
                <div className="absolute left-3 top-3 z-10">
                  <span className="inline-flex rounded-full bg-[#004225] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
                    Popular
                  </span>
                </div>
              )}

              <ProductImage product={product} />

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold leading-tight tracking-tight text-[#11100E] sm:text-lg">
                    {product.name}
                  </h3>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#74695B] transition-transform group-hover:translate-x-0.5 group-hover:text-[#11100E]" />
                </div>

                <p className="mt-2 text-[13px] leading-relaxed text-[#74695B] line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-auto pt-4">
                  <div className="border-t border-black/[0.06] pt-4 flex items-baseline justify-between">
                    <div>
                      <span className="text-xl font-bold tracking-tighter text-[#11100E]">{product.price}</span>
                      <span className="ml-1 text-[11px] font-medium text-[#74695B]">starting price</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#004225]">View details →</span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 rounded-xl border border-[#004225]/20 bg-white p-5 text-left shadow-mid sm:mt-14 sm:rounded-2xl sm:p-7 lg:p-8"
        >
          <h3 className="text-base font-bold tracking-tight text-[#11100E] sm:text-lg">
            How it works
          </h3>
          <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-[#74695B] sm:text-sm">
            Open a product, check the details, then buy directly on Whop.
            Need something custom? We&apos;ll quote the add-on before any work starts.
          </p>
        </motion.div>
      </div>

      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </section>
  );
}
