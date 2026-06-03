"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    name: "Gari",
    tagline: "Auto service platform for drivers",
    description: "Find workshops, track service jobs, manage vehicles, and pay with confidence — all from one mobile app.",
    stack: "React Native · Node.js · MongoDB",
    color: "from-emerald-500/20 to-teal-600/10",
    accent: "#10b981",
    links: [{ label: "Preview", href: "/work/gari" }],
  },
  {
    name: "SpeakBill",
    tagline: "Voice-to-invoice in seconds",
    description: "Speak naturally and generate professional, compliant invoices instantly. Built for freelancers and small teams in the EU.",
    stack: "Next.js · OpenAI · MongoDB · Vercel",
    color: "from-blue-500/20 to-purple-600/10",
    accent: "#3b82f6",
    links: [
      { label: "Live app", href: "https://speakbill.vantlaunch.com" },
      { label: "Details", href: "/work/speakbill" },
    ],
  },
  {
    name: "TeraMotors",
    tagline: "Workshop management system",
    description: "Job cards, invoices, reports, and customer updates — built specifically for automotive repair shops.",
    stack: "Next.js · PostgreSQL · Vercel",
    color: "from-orange-500/20 to-amber-600/10",
    accent: "#f97316",
    links: [
      { label: "Live app", href: "https://app.teramotor.cc/register" },
      { label: "Details", href: "/work/teramotors" },
    ],
  },
  {
    name: "Teravisions",
    tagline: "Business intelligence & analytics",
    description: "Custom dashboards and data visualization for enterprise clients — turning complex data into clear decisions.",
    stack: "React · Python · PostgreSQL",
    color: "from-violet-500/20 to-purple-600/10",
    accent: "#8b5cf6",
    links: [],
  },
  {
    name: "Takkah",
    tagline: "WhatsApp business automation",
    description: "AI-powered WhatsApp chatbot platform with workflow automation, templates, and team collaboration.",
    stack: "Laravel · Vue.js · WhatsApp API",
    color: "from-green-500/20 to-emerald-600/10",
    accent: "#22c55e",
    links: [],
  },
  {
    name: "Takaful",
    tagline: "Insurance management platform",
    description: "Digital takaful (Islamic insurance) management — policy tracking, claims, and customer portal.",
    stack: "Next.js · Node.js · PostgreSQL",
    color: "from-cyan-500/20 to-blue-600/10",
    accent: "#06b6d4",
    links: [],
  },
  {
    name: "Araba",
    tagline: "Vehicle marketplace & management",
    description: "Buy, sell, and manage vehicles — integrated with service history and maintenance tracking.",
    stack: "React · Node.js · MongoDB",
    color: "from-red-500/20 to-rose-600/10",
    accent: "#ef4444",
    links: [],
  },
  {
    name: "Academy",
    tagline: "Online learning platform",
    description: "Course management, student tracking, and content delivery — built for professional training programs.",
    stack: "Next.js · PostgreSQL · Vercel",
    color: "from-yellow-500/20 to-amber-600/10",
    accent: "#eab308",
    links: [],
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="divider px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="badge mb-4 inline-block">Portfolio</span>
          <h2 className="type-section-heading">8 products. Real businesses.</h2>
          <p className="type-section-sub mx-auto">
            Every project here was built from scratch — designed, developed, and shipped
            for actual customers with real problems to solve.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-premium group flex flex-col p-6"
            >
              {/* Project thumbnail placeholder */}
              <div
                className={`mb-5 aspect-video w-full rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <span
                  className="text-2xl font-bold opacity-30"
                  style={{ color: project.accent }}
                >
                  {project.name.charAt(0)}
                </span>
              </div>

              <h3 className="type-card-title">{project.name}</h3>
              <p className="mt-1 text-xs font-semibold text-stone-500">{project.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-400 flex-1">
                {project.description}
              </p>
              <p className="mt-4 text-xs text-stone-600 font-medium">{project.stack}</p>

              {project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
