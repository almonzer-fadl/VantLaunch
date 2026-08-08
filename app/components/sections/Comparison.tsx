"use client";

import { motion } from "framer-motion";
import { Check, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const ROWS = [
  { label: "KPI Dashboard", executive: true, pro: true, os: true },
  { label: "Executive Reports", executive: true, pro: true, os: true },
  { label: "Custom Integrations", executive: true, pro: true, os: true },
  { label: "Setup & Training", executive: true, pro: true, os: true },
  { label: "Team Dashboards", executive: false, pro: true, os: true },
  { label: "Department Reports", executive: false, pro: true, os: true },
  { label: "Workflow Automation", executive: false, pro: true, os: true },
  { label: "Advanced Integrations", executive: false, pro: true, os: true },
  { label: "Business Insights", executive: false, pro: true, os: true },
  { label: "Internal Operations", executive: false, pro: false, os: true },
  { label: "Custom Business Software", executive: false, pro: false, os: true },
  { label: "Dedicated Development", executive: false, pro: false, os: true },
];

const COLUMNS = [
  {
    name: "Executive Dashboard",
    href: "https://whop.com/joined/almonzer-fadl/products/executive-dashboard/",
    price: "$699",
    accent: "#004225",
  },
  {
    name: "Business Dashboard Pro",
    href: "https://whop.com/joined/almonzer-fadl/products/business-dashboard-pro/",
    price: "$999",
    accent: "#0f766e",
    featured: true,
  },
  {
    name: "Business Operating System",
    href: "https://whop.com/joined/almonzer-fadl/products/business-operating-system-7f/",
    price: "From $1,699",
    accent: "#1e40af",
  },
];

export function ComparisonSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section className="border-t border-black/10 bg-[#F8F6EF] px-4 py-16 text-[#11100E] sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Compare
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Find the right solution for your business
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            Start with what you need today. Upgrade anytime as your business grows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="px-6 py-5 text-left text-sm font-bold text-[#11100E]">Features</th>
                  {COLUMNS.map((col) => (
                    <th key={col.name} className={`px-4 py-5 text-center ${col.featured ? "bg-[#004225]/[0.02]" : ""}`}>
                      <p className="text-sm font-bold text-[#11100E]">{col.name}</p>
                      <p className="mt-1 text-xs font-bold text-[#004225]">Founding {col.price}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, index) => (
                  <tr key={row.label} className={`border-b border-black/[0.04] ${index % 2 === 0 ? "bg-transparent" : "bg-[#F8F6EF]/50"}`}>
                    <td className="px-6 py-4 text-sm font-medium text-[#11100E]">{row.label}</td>
                    {COLUMNS.map((col, ci) => (
                      <td
                        key={`${row.label}-${col.name}`}
                        className={`px-4 py-4 text-center ${col.featured ? "bg-[#004225]/[0.02]" : ""}`}
                      >
                        {(() => {
                          const val = col.name === "Executive Dashboard" ? row.executive : col.name === "Business Dashboard Pro" ? row.pro : row.os;
                          if (val) {
                            return <Check className="mx-auto h-4 w-4 text-[#004225]" />;
                          }
                          return <Minus className="mx-auto h-4 w-4 text-black/15" />;
                        })()}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-black/10">
                  <td className="px-6 py-5 text-sm font-bold text-[#11100E]">Get Started</td>
                  {COLUMNS.map((col) => (
                    <td key={col.name} className={`px-4 py-5 text-center ${col.featured ? "bg-[#004225]/[0.02]" : ""}`}>
                      <Link
                        href={col.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#004225] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#11100E]"
                      >
                        Choose <ArrowRight className="h-3 w-3" />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
