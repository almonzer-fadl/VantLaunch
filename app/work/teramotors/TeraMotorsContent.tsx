"use client";

import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Building2,
  Car,
  ClipboardCheck,
  FileCode2,
  FileSpreadsheet,
  Globe2,
  Layers,
  Palette,
  Plug,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  TestTube,
  Users,
  Zap,
} from "lucide-react";

const highlights = [
  {
    title: "Enterprise architecture",
    body: "Scalable, hardened patterns ready for real shop volume and growth.",
    icon: Building2,
  },
  {
    title: "Multi-language",
    body: "English and Arabic with full i18n plus RTL where the product needs it.",
    icon: Globe2,
  },
  {
    title: "Advanced reporting",
    body: "Professional Excel exports with multiple sheets for finance and operations.",
    icon: FileSpreadsheet,
  },
  {
    title: "ZATCA compliance",
    body: "ZATCA e-invoicing integrated with the flows technicians and finance already use.",
    icon: Shield,
  },
  {
    title: "Security posture",
    body: "JWT auth, RBAC, rate limiting, validation, and hardened headers by design.",
    icon: Layers,
  },
  {
    title: "Real-time operations",
    body: "Live job tracking and notifications so the floor and front desk stay aligned.",
    icon: Zap,
  },
  {
    title: "Responsive UI",
    body: "Mobile-first layouts and accessible patterns across the workshop journey.",
    icon: Smartphone,
  },
  {
    title: "Portfolio-grade quality",
    body: "Demonstrates end-to-end product thinking from compliance to exports.",
    icon: Sparkles,
  },
] as const;

const frontendStack = [
  { label: "Framework", value: "Next.js 15 · App Router" },
  { label: "UI", value: "React 19 · Tailwind CSS · shadcn/ui" },
  { label: "State", value: "Zustand" },
  { label: "Forms", value: "React Hook Form · Zod" },
  { label: "Charts", value: "Recharts" },
  { label: "i18n", value: "react-i18next · Arabic RTL" },
  { label: "Language", value: "TypeScript (strict)" },
];

const backendStack = [
  { label: "API", value: "Next.js API Routes" },
  { label: "Database", value: "MongoDB Atlas" },
  { label: "Auth", value: "JWT · bcrypt" },
  { label: "Files", value: "Cloudinary" },
  { label: "Email", value: "Resend" },
  { label: "Real-time", value: "Socket.io (dedicated server)" },
  { label: "PDF", value: "Puppeteer · React-PDF" },
];

const securityCompliance = [
  "JWT with secure cookies · session boundaries for each role",
  "RBAC across Admin, Mechanic, and Inspector surfaces",
  "Rate limiting · Zod validation · XSS mitigations · CSRF-conscious forms",
  "ZATCA e-invoicing aligned with statutory clearance and reporting requirements",
];

const businessOpsFeatures = [
  { title: "Customer management", body: "Lifecycle from first visit through fleet history." },
  { title: "Vehicle fleet", body: "Registration, VIN context, and repair history in one place." },
  { title: "Appointments", body: "Calendar-based booking tied to bay and staff capacity." },
  { title: "Job cards", body: "Work orders with real-time status through completion." },
  { title: "Parts inventory", body: "Stock levels, low-stock signals, and costing awareness." },
  { title: "Service catalog", body: "Maintain labor and parts packages mechanics can trust." },
];

const financialFeatures = [
  { title: "Estimates", body: "Branded estimates prospects can approve digitally." },
  { title: "Invoicing", body: "Invoice flows aligned with ZATCA submission requirements." },
  { title: "Payments", body: "Stripe integration for cards and reconciled payment states." },
  { title: "Excel reporting", body: "Deep workbooks spanning executive, ops, and inventory views." },
];

const inspectionReporting = [
  {
    title: "Digital inspections",
    body: "Checklists, severity ratings, and photo evidence chained to estimates.",
    icon: ClipboardCheck,
  },
  {
    title: "Operational analytics",
    body: "KPIs spanning revenue, turnaround, inventory turns, and customer concentration.",
    icon: BarChart3,
  },
];

const apiEndpoints = [
  { method: "POST", path: "/api/auth/signin", note: "User login" },
  { method: "POST", path: "/api/auth/signout", note: "User logout" },
  { method: "GET", path: "/api/auth/session", note: "Current session" },
  { method: "POST", path: "/api/auth/forgot-password", note: "Password reset" },
  { method: "GET", path: "/api/customers", note: "List customers" },
  { method: "POST", path: "/api/customers", note: "Create customer" },
  { method: "GET", path: "/api/vehicles", note: "List vehicles" },
  { method: "POST", path: "/api/job-cards", note: "Create job card" },
  { method: "GET", path: "/api/appointments", note: "List appointments" },
  { method: "POST", path: "/api/estimates", note: "Create estimate" },
  { method: "GET", path: "/api/reports", note: "Dashboard statistics" },
  { method: "POST", path: "/api/reports/export", note: "Export Excel reports" },
  { method: "GET", path: "/api/dashboard/stats", note: "Business metrics" },
] as const;

const businessImpact = [
  { metric: "~40%", label: "faster job processing pathways" },
  { metric: "~60%", label: "reduction in admin overhead reported" },
  { metric: "100%", label: "ZATCA-aligned invoicing path" },
  { metric: "Live", label: "visibility across jobs, parts, and cash" },
];

export function TeraMotorsContent({ onClose }: { onClose?: () => void }) {
  return (
    <div className="space-y-16">
      <section>
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="type-chip">Case study · production system</span>
          <span className="type-chip">
            Automotive · ZATCA-ready
          </span>
        </div>

        <div className="type-meta-tech-strip">
          Next.js · TypeScript · MongoDB · Tailwind · MIT License friendly stack
        </div>

        <h1 className="mt-4 type-case-h1">
          TeraMotors
        </h1>
        <p className="type-case-tagline">
          Enterprise auto repair shop management — built for real bays, auditors, and customers.
        </p>
        <p className="type-case-lede">
          Operations, finance, inspections, and compliance in one production-ready workspace:
          multilingual experience, realtime job telemetry, Stripe settlements, Cloudinary-backed
          evidence trails, and ZATCA-aware invoicing tuned for regulated operators.
        </p>

        <figure className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-zinc-surface shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)]">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/media/teramotors-dashboard.webp"
              alt="TeraMotors dashboard: job operations, KPIs, and workshop workflows"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="type-figure-caption border-t border-white/[0.06] bg-zinc-surface/95 px-5 py-4">
            Product UI — dashboards, queues, and task surfaces mechanics and managers use daily.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2 className="type-case-section-heading">Key highlights</h2>
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

      <section className="rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-transparent p-8 md:p-10">
        <h2 className="type-case-section-heading-inline">
          <Car className="h-8 w-8 text-white/90" />
          Portfolio story
        </h2>
        <ul className="mt-6 space-y-3 type-prose-list">
          {[
            "Full-stack product delivery on Next.js 15 with strict TypeScript throughout the workspace.",
            "Enterprise authentication, authorization, and abuse resistance suited to regulated operations.",
            "Deep domain modeling: vehicles, bays, inspectors, catalogs, approvals, payouts.",
            "International compliance showcased through ZATCA e-invoice flows.",
            "Modern UI systems (shadcn) with dark/light ergonomics suitable for pit-floor contrast.",
            "Realtime collaboration through Socket.io and structured notification channels.",
            "Executive-ready exports bridging finance and aftermarket inventory reality.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="type-case-section-heading-inline">
          <Layers className="h-8 w-8 text-white/90" />
          Technical architecture
        </h2>

        <h3 className="mt-10 type-stack-heading">Frontend</h3>
        <StackGrid rows={frontendStack} />

        <h3 className="mt-10 type-stack-heading">Backend &amp; integrations</h3>
        <StackGrid rows={backendStack} />

        <h3 className="mt-10 flex items-center gap-2 type-stack-heading">
          <Shield className="h-6 w-6 text-white/90" aria-hidden />
          Security &amp; compliance
        </h3>
        <ul className="type-prose-muted mt-4 space-y-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
          {securityCompliance.map((line) => (
            <li key={line} className="flex gap-3">
              <span className="text-white/90">·</span>
              {line}
            </li>
          ))}
        </ul>
      </section>

      <FeatureBlock
        eyebrow="People & roles"
        title="User management"
        items={[
          "Multi-role authentication with clear separation between admin, mechanic, and inspector capabilities.",
          "Secure credential flows with bcrypt hashing at rest.",
          "Session integrity via JWT and cookie hardening tuned for SPA + API interplay.",
          "Self-service profiles and operational identity context for auditing.",
        ]}
        icon={Users}
      />

      <FeatureBlock
        eyebrow="Runs the shop floor"
        title="Business operations"
        items={businessOpsFeatures.map((f) => `${f.title} — ${f.body}`)}
        icon={Building2}
      />

      <FeatureTwoCol
        eyebrow="Money & records"
        title="Financial stack & inspections"
        leftTitle="Financial management"
        leftItems={financialFeatures.map((f) => `${f.title}: ${f.body}`)}
        rightBlocks={inspectionReporting}
      />

      <section>
        <h2 className="type-case-section-heading-inline">
          <Globe2 className="h-8 w-8 text-white/90" />
          Internationalization
        </h2>
        <p className="mt-4 type-prose-intro">
          Bilingual UX with defaults that fit regional operators, mirrored ZATCA
          documentation, RTL layouts for Arabic, and shared translation assets so marketing and
          product stay aligned.
        </p>
      </section>

      <section>
        <h2 className="type-case-section-heading-inline">
          <Rocket className="h-8 w-8 text-white/90" />
          Performance profile
        </h2>
        <ul className="mt-6 space-y-3 type-prose-list">
          <li className="flex gap-3">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            Next.js 15 streaming, selective static segments, tuned image pipelines.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            Code splitting tuned for dashboards with heavy charts and tables.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            Redis-backed caching hotspots for KPI queries when configured.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="type-case-section-heading-inline">
          <Palette className="h-8 w-8 text-white/90" />
          UX & interface
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Premium visual language anchored in shadcn primitives",
            "Mobile-first ergonomics with touch-ready controls",
            "Dark / light parity for glare-sensitive environments",
            "WCAG 2.1-minded contrast and semantics",
            "Skeleton and optimistic transitions for latency masking",
            "Friendly error envelopes with remediation hints",
          ].map((t) => (
            <li key={t} className="type-ux-tile-item">
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="type-case-section-heading-inline">
          <BarChart3 className="h-8 w-8 text-white/90" />
          Business impact
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {businessImpact.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5"
            >
              <p className="type-metric-value">{row.metric}</p>
              <p className="type-metric-label">{row.label}</p>
            </div>
          ))}
        </div>
        <p className="type-case-subtle-note mt-6">
          Impact figures reflect goals communicated for the rollout — your mileage depends on fleet
          size, integrations, and change management.
        </p>
      </section>

      <section>
        <h2 className="type-case-section-heading-inline">
          <FileCode2 className="h-8 w-8 text-white/90" />
          Repository layout
        </h2>
        <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/55 p-6 text-[13px] leading-relaxed text-slate-300">
{`teramotors/
├── client/               # Next.js App Router frontend + API routes
│   ├── app/(auth)/       # Sign-in journeys
│   ├── app/(dashboard)/  # Role-aware workspace
│   ├── app/api/          # Route handlers · jobs · reporting
│   ├── components/
│   ├── lib/              # Config + shared utilities
│   ├── stores/           # Zustand slices
│   └── types/            # Strict TS contracts
├── server/               # Socket.io gateway
├── docs/
└── public/`}
        </pre>
      </section>

      <section>
        <h2 className="type-case-section-heading-inline">
          <Plug className="h-8 w-8 text-white/90" aria-hidden />
          REST surface (sample)
        </h2>
        <div className="mt-6 overflow-x-auto rounded-[1rem] border border-white/[0.08]">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="type-table-heading-row">
                <th className="px-4 py-3 font-semibold">Method</th>
                <th className="px-4 py-3 font-semibold">Path</th>
                <th className="px-4 py-3 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {apiEndpoints.map((row) => (
                <tr key={`${row.method}-${row.path}`} className="text-slate-400 hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-mono text-xs text-white/90">{row.method}</td>
                  <td className="px-4 py-3 font-mono text-[13px] text-slate-300">{row.path}</td>
                  <td className="px-4 py-3">{row.note}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
      </section>

      <TeraMotorsDeveloperPlaybook />

      <section>
        <h2 className="type-case-section-heading-inline">
          <TestTube className="h-8 w-8 text-white/90" />
          Testing & quality gates
        </h2>
        <div className="mt-6 glass-card rounded-3xl border border-white/[0.07] p-8">
          <ul className="space-y-3 type-prose-muted">
            <li>
              <span className="font-mono text-white/90">npm run test</span> · unit suites
            </li>
            <li>
              <span className="font-mono text-slate-500">npm run test:integration</span> · API /
              service contracts
            </li>
            <li>
              <span className="font-mono text-slate-500">npm run test:e2e</span> · critical UX
            </li>
            <li>
              <span className="font-mono text-slate-500">npm run test:coverage</span> · CI thresholds
            </li>
            <li className="type-case-subtle-note pt-3">
              Tooling complements ESLint, Prettier, Husky hooks, and Conventional Commit discipline.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="type-case-section-heading">
          Deploy & ops
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
            <p className="type-accent-label-sm">Vercel (recommended)</p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-black/50 p-3 text-[12px] text-slate-300">
              vercel --prod
            </pre>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
            <p className="type-accent-label-sm">Docker</p>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-lg bg-black/50 p-3 text-[12px] text-slate-300">{`docker build -t teramotors .
docker run -p 3000:3000 teramotors`}</pre>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-8">
        <h2 className="type-doc-inline-heading">
          <BookOpen className="h-7 w-7 shrink-0 text-white/90" aria-hidden />
          Documentation &amp; collaboration
        </h2>
        <p className="type-doc-note">
          Companion docs ship for API surfaces, reusable components, deployment runbooks, and
          contributing guidelines inside the repo. MIT license with explicit attribution preserves
          deployment flexibility for white-label fleets.
        </p>
      </section>

      <section className="rounded-[2rem] border border-white/20 bg-white/[0.08] px-8 py-12 text-center">
        <p className="type-accent-label-sm mx-auto max-w-lg">
          Need compliance-heavy tooling for your aftermarket or mobility fleet?
        </p>
        <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <Link href="https://app.teramotor.cc/" className="type-email-cta-ghost-outline">
            Open live app
            <ArrowUpRight className="h-5 w-5" />
          </Link>
          <button 
            onClick={() => {
              onClose?.();
              window.location.hash = "contact";
            }}
            className="type-email-cta-solid"
          >
            Talk with VantLaunch
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

function StackGrid({ rows }: { rows: readonly { label: string; value: string }[] }) {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      {rows.map((row) => (
        <div key={row.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
          <p className="type-meta-muted-caps">{row.label}</p>
          <p className="type-stack-value">{row.value}</p>
        </div>
      ))}
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

function TeraMotorsDeveloperPlaybook() {
  return (
    <section>
      <details className="group rounded-[1.75rem] border border-white/[0.09] bg-white/[0.02] open:bg-white/[0.03]">
        <summary className="type-summary-toggle">
          <span>Developer setup playbook</span>
          <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-slate-300 group-open:hidden">
            Expand
          </span>
          <span className="hidden rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-slate-300 group-open:inline">
            Collapse
          </span>
        </summary>
        <div className="border-t border-white/[0.06] px-8 pb-8 pt-2">
          <p className="type-playbook-intro">
            Requires Node&nbsp;18+ LTS, MongoDB Atlas, Cloudinary media, Resend email, Stripe + ZATCA
            sandbox credentials depending on surfaces you toggle on.
          </p>
          <h3 className="type-playbook-h3">Repository access</h3>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/55 p-4 text-[13px] text-slate-300">{`Private product repository
Access granted during workspace onboarding
Install with: npm install`}</pre>

          <h3 className="type-playbook-h3">Environment</h3>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/55 p-4 text-[13px] text-slate-300">{`cp .env.example .env.local

MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

RESEND_API_KEY=...

ZATCA_CLIENT_ID=...
ZATCA_CLIENT_SECRET=...

# Stripe, Socket origin, Redis (if wired), ...`}</pre>

          <h3 className="type-playbook-h3">Run</h3>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/55 p-4 text-[13px] text-slate-300">{`npm run dev        # Next.js workspace
npm run build      # Prod bundle
npm run lint       # ESLint
npm run test       # Automated suites`}</pre>
        </div>
      </details>
    </section>
  );
}
