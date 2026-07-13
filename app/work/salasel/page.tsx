import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Building2,
  CreditCard,
  Database,
  FileCode2,
  Layers,
  Shield,
  ShoppingBag,
  TestTube,
  Truck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Salasel | B2B HORECA marketplace — VantLaunch",
  description:
    "Enterprise B2B marketplace for HORECA in Saudi Arabia: procurement digitization, BNPL financing, multi-supplier cart, fulfillment tracking, Filament panels for every stakeholder.",
  openGraph: {
    title: "Salasel | B2B HORECA marketplace — VantLaunch",
    description:
      "Enterprise B2B marketplace for HORECA in Saudi Arabia — procurement, BNPL, logistics, and supplier orchestration.",
    images: [{ url: "/salasel-hero.png", width: 1200, height: 750, alt: "Salasel marketplace marketing site" }],
  },
};

const panels = [
  {
    panel: "Admin",
    route: "/admin",
    guard: "web",
    model: "App\\Models\\User",
    description: "Internal operations and platform management",
  },
  {
    panel: "HORECA",
    route: "/horeca",
    guard: "horeca",
    model: "App\\Models\\HorecaUser",
    description: "Customer-facing procurement workspace",
  },
  {
    panel: "Supplier",
    route: "/supplier",
    guard: "supplier",
    model: "App\\Models\\SupplierUser",
    description: "Catalog, pricing, fulfillment, inventory",
  },
  {
    panel: "Logistics",
    route: "/logistics",
    guard: "logistics",
    model: "App\\Models\\LogisticUser",
    description: "Delivery assignment and milestone tracking",
  },
  {
    panel: "BNPL",
    route: "/bnpl",
    guard: "bnpl",
    model: "App\\Models\\BnplUser",
    description: "Financing partner limits, terms, and credit flows",
  },
] as const;

const stakeholders = [
  {
    title: "HORECA operators",
    body: "Hotels, restaurants, cafés, and catering teams ordering food, beverage, and hospitality supplies with confidence.",
    icon: Building2,
  },
  {
    title: "Suppliers",
    body: "Vendors and distributors managing catalogs, fulfillment, pricing, and order commitments at scale.",
    icon: ShoppingBag,
  },
  {
    title: "Logistics partners",
    body: "Carriers coordinating delivery timelines, allocations, and clear status signals back to buyers and hubs.",
    icon: Truck,
  },
  {
    title: "Financing partners",
    body: "BNPL and credit providers enabling flexible payment journeys inside the procurement flow.",
    icon: CreditCard,
  },
] as const;

const stack = [
  { label: "Backend", value: "Laravel 11 (PHP 8.2+)" },
  { label: "Admin & panels", value: "Filament 4 (multi-panel architecture)" },
  { label: "Frontend", value: "Livewire + Alpine.js + Tailwind CSS" },
  { label: "Database", value: "PostgreSQL + Eloquent ORM" },
  { label: "Cache & queues", value: "Redis + Laravel queues" },
  { label: "Auth", value: "Multi-guard JWT-based authentication" },
] as const;

const featuresP0 = [
  {
    title: "Master lists",
    body: "Recurring product lists as templates — quick reordering with a large share of carts completed in clicks instead of hunts.",
  },
  {
    title: "Multi-supplier cart",
    body: "Add items from multiple suppliers, automatic splitting by fulfillment partner, bulk checkout tuned for procurement teams.",
  },
  {
    title: "Order management",
    body: "Place orders with delivery scheduling, invoices, statuses that stay truthful from placement to doorstep.",
  },
  {
    title: "BNPL integration",
    body: "Credit limits, term selection, and application workflows that keep finance approvals auditable alongside orders.",
  },
  {
    title: "Registration & onboarding",
    body: "Self-service HORECA intake, verified supplier onboarding, multi-user workspaces with invitations that respect roles.",
  },
];

const featuresP1 = [
  {
    title: "RFQ system",
    body: "Upload RFQs, supplier quotes with AI-assisted SKU matching hooks, centralized comparison before commitment.",
  },
  {
    title: "Delivery tracking",
    body: "Real-time checkpoints, assignment to drivers where applicable, structured proof-of-delivery capture.",
  },
  {
    title: "Support tickets",
    body: "Complaints, refunds, escalations routed with internal traceability.",
  },
];

const featuresP2 = [
  {
    title: "Manager approvals",
    body: "Executive dashboards plus multi-step authorization for spends that need extra eyes.",
  },
  {
    title: "Advanced analytics",
    body: "Procurement KPIs, supplier scorecards, and spend intelligence for leadership narratives.",
  },
];

export default function SalaselProjectPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-obsidian text-slate-50 selection:bg-accent-indigo/30">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.14]" />
        <div className="absolute left-1/2 top-[-20%] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-accent-indigo/[0.07] blur-[140px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-obsidian/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/#ventures" className="type-work-back-link">
            <ArrowLeft className="h-4 w-4" />
            Our work
          </Link>
          <Link href="/" className="type-brand-xl">
            VantLaunch
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="https://salasel.com.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="type-nav-accent hidden sm:inline"
            >
              Live site
            </Link>
            <Link href="mailto:build@vantlaunch.com?subject=Salasel%20follow-up" className="type-nav-link hidden md:inline">
              Talk to us
            </Link>
          </div>
        </div>
      </header>

      <article className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-14 md:pt-20">
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="type-chip">Case study · shipped product</span>
          <span className="type-chip">
            Saudi Arabia · B2B marketplace
          </span>
        </div>

        <h1 className="type-case-h1">
          Salasel
        </h1>
        <p className="type-case-lede">
          An enterprise-grade HORECA marketplace that closes the loop between buyers, supplier
          networks, logistics, and financed purchasing — one cohesive operating system instead of a
          patchwork of forms and spreadsheets.
        </p>

        <figure className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-obsidian-surface shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)]">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/salasel-hero.png"
              alt="Salasel public site: dual customer and supplier messaging, chef and mobile app visuals, bilingual controls, and order volume highlight"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="type-figure-caption border-t border-white/[0.06] bg-obsidian-surface/95 px-5 py-4">
            The live marketing experience — crafted for HORECA buyers and suppliers with clear next
            steps, WhatsApp support, and Arabic / English entry points.
          </figcaption>
        </figure>

        <section className="mt-16 space-y-5">
          <h2 className="type-case-section-heading">Overview</h2>
          <p className="type-case-overview-text">
            Salasel connects Hotels, Restaurants, Cafés, and Catering businesses with suppliers,
            logistics partners, and BNPL financiers inside the Kingdom. The roadmap focuses on{' '}
            <strong className="font-semibold text-slate-300">digitized procurement journeys</strong>,{' '}
            <strong className="font-semibold text-slate-300">credit-enabled purchasing</strong>, and{' '}
            <strong className="font-semibold text-slate-300">trustworthy fulfillment visibility</strong>{' '}
            from cart share to reconciliation.
          </p>
          <div className="glass-card rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8">
            <div className="flex items-start gap-4">
              <Layers className="mt-1 h-8 w-8 shrink-0 text-accent-indigo" aria-hidden />
              <div>
                <p className="font-semibold text-white">Purpose-built workflows</p>
                <p className="mt-2 text-base leading-relaxed text-slate-400">
                  Every stakeholder interacts through a tailored Filament experience so catalog
                  maintenance, approvals, onboarding, invoicing, and ticket volume stay purposeful —
                  nothing feels like bolted-on admin chrome.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="type-case-section-heading">
            Who relies on Salasel?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {stakeholders.map(({ title, body, icon: Icon }) => (
              <div
                key={title}
                className="glass-card rounded-[1.75rem] border border-white/[0.06] bg-white/[0.02] p-7 transition-colors hover:border-accent-indigo/25"
              >
                <Icon className="h-10 w-10 text-accent-indigo" aria-hidden />
                <p className="type-case-card-title">{title}</p>
                <p className="type-case-card-body">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="type-case-section-heading">
            Modular panels · one platform
          </h2>
          <p className="type-prose-intro mt-3 max-w-2xl">
            Each stakeholder group accesses a guarded panel with schemas and policies aligned to how
            they actually work day to day.
          </p>

          <div className="mt-8 overflow-x-auto rounded-[1.5rem] border border-white/[0.08]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="type-table-heading-row">
                  <th className="px-5 py-4 font-semibold">Panel</th>
                  <th className="px-5 py-4 font-semibold">Route prefix</th>
                  <th className="px-5 py-4 font-semibold">Guard</th>
                  <th className="px-5 py-4 font-semibold">Principal model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {panels.map((row) => (
                  <tr key={row.route} className="text-slate-300 hover:bg-white/[0.02]">
                    <td className="px-5 py-4">
                      <p className="font-bold text-white">{row.panel}</p>
                      <p className="type-table-meta mt-1">{row.description}</p>
                    </td>
                    <td className="px-5 py-4 font-medium text-accent-indigo/90">{row.route}</td>
                    <td className="px-5 py-4 font-medium text-slate-400">{row.guard}</td>
                    <td className="px-5 py-4 font-mono text-[13px] text-slate-500">{row.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="type-case-section-heading-inline-gap2">
            <Layers className="h-8 w-8 text-accent-indigo" />
            Core technology stack
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stack.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
              >
                <p className="type-meta-muted-caps">{label}</p>
                <p className="type-stack-value">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <FeaturePriorityBlock
          label="Foundation (MVP — Priority 0)"
          eyebrow="Time-to-value pillars"
          features={featuresP0}
        />

        <FeaturePriorityBlock label="Momentum (Priority 1)" eyebrow="Operations at scale" features={featuresP1} />

        <FeaturePriorityBlock
          label="Scale & insight (Priority 2)"
          eyebrow="Executive programs"
          features={featuresP2}
        />

        <section className="mt-16">
          <h2 className="type-case-section-heading-inline">
            <Database className="h-8 w-8 text-accent-indigo" aria-hidden />
            Data architecture at a glance
          </h2>
          <p className="type-prose-intro mt-3 max-w-2xl">
            Normalized PostgreSQL anchors every transaction with explicit tables for onboarding,
            cataloging, carts, invoicing, and tracking so reporting stays truthful.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <DomainCluster
              title="Accounts & onboarding"
              items={[
                "horeca_accounts / horeca_users",
                "supplier_accounts / supplier_users",
                "logistic_companies",
                "bnpl_partners",
                "Registration + invitation pipelines",
              ]}
              icon={Users}
            />
            <DomainCluster
              title="Catalog & inventory"
              items={[
                "products + supplier_products",
                "inventory_reservations for holds",
              ]}
              icon={ShoppingBag}
            />
            <DomainCluster
              title="Fulfillment spine"
              items={[
                "horeca_carts · horeca_orders · horeca_order_lines",
                "delivery_tracking checkpoints",
              ]}
              icon={Truck}
            />
            <DomainCluster
              title="Finance & payments"
              items={[
                "horeca_invoices · horeca_payments",
                "payment_transactions (gateway payloads)",
              ]}
              icon={CreditCard}
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="type-case-section-heading-inline">
            <Shield className="h-8 w-8 text-accent-indigo" />
            Authentication & governance
          </h2>
          <ul className="mt-6 list-none space-y-3 text-[17px] text-slate-400">
            <li className="flex gap-3">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-indigo" />
              Multi-guard authentication with JWT for API-style surfaces where required.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-indigo" />
              Filament Shield for consistent role-based gates across bespoke resources.
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="type-case-section-heading-inline">
            <BookOpen className="h-8 w-8 text-accent-indigo" aria-hidden />
            Documentation footprint
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-500">
            Comprehensive specs live beside the codebase for audits, onboarding, and partner
            integrations. Highlights include SRS, BRD, SAD, modular SRS shards, sourcing notes, plus an
            actionable implementation backlog (<code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-white">IMPLEMENTATION_TASKS.md</code>).
          </p>
          <ul className="mt-6 grid gap-3 text-sm font-medium text-slate-400 sm:grid-cols-2">
            <DocPathRow path="/docs/complete/SALASEL-SRS.md" caption="498 KB SRS" />
            <DocPathRow path="/docs/complete/SALASEL-BRD.md" caption="Business requirements" />
            <DocPathRow path="/docs/complete/SALASEL-SAD.md" caption="Architecture document" />
            <DocPathRow path="/docs/srs/*.md" caption="Detailed modular SRS slices" />
            <DocPathRow path="/docs/files/" caption="RFP transcripts & source materials" />
            <DocPathRow path="/docs/README.md" caption="Documentation index entry point" />
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="type-case-section-heading-inline">
            <FileCode2 className="h-8 w-8 text-accent-indigo" />
            Application folders
          </h2>
          <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/55 p-6 text-[13px] leading-relaxed text-slate-300">
{`app/
├── Filament/
│   ├── Admin/    # Ops & configuration
│   ├── Horeca/   # Buyer workspace
│   ├── Supplier/ # Catalog + fulfillment consoles
│   ├── Logistics/# Dispatch & ETA surfaces
│   └── Bnpl/     # Credit programs
├── Models/, Services/, Http/...

database/{migrations,seeders}

resources/{views,js}

docs/{complete,srs,files,...}`}
          </pre>
        </section>

        <DeveloperPlaybook />

        <section className="mt-16">
          <h2 className="type-case-section-heading-inline">
            <TestTube className="h-8 w-8 text-accent-indigo" aria-hidden />
            Validation & tooling
          </h2>
          <div className="mt-8 glass-card rounded-3xl border border-white/[0.07] p-8">
            <ul className="space-y-4 type-prose-list">
              <li>
                <strong className="font-semibold text-slate-200">Testing:</strong>{' '}
                <span className="font-mono text-sm text-accent-indigo/90">php artisan test</span>, suites
                for feature flows,{' '}
                <span className="font-mono text-sm text-slate-500">php artisan test --coverage</span> when wired.
              </li>
              <li>
                <strong className="font-semibold text-slate-200">Formatting:</strong> PSR-12 + Laravel{' '}
                <span className="font-mono text-sm text-slate-500">vendor/bin/pint</span>.
              </li>
              <li>
                <strong className="font-semibold text-slate-200">Quality bar:</strong> peer review gates on
                business logic, seeded environments for repeatable demos.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-accent-indigo/25 bg-accent-indigo/[0.08] px-8 py-12 text-center">
          <p className="type-accent-label-sm mx-auto max-w-lg px-2">
            Interested in mapping this playbook to your own marketplace motion?
          </p>
          <p className="type-cta-banner-sub px-2">
            Reach out — we specialize in translating complex procurement stories into humane product
            experiences.
          </p>
          <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://salasel.com.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="type-email-cta-ghost-outline"
            >
              Visit salasel.com.sa
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <Link href="mailto:build@vantlaunch.com?subject=Salasel-like%20build" className="type-email-cta-solid">
              Email VantLaunch
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

function FeaturePriorityBlock({
  label,
  eyebrow,
  features,
}: {
  label: string;
  eyebrow: string;
  features: { title: string; body: string }[];
}) {
  return (
    <section className="mt-16">
      <p className="type-meta-accent-caps">{eyebrow}</p>
      <h2 className="mt-2 type-case-section-heading">{label}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.02] px-6 py-5"
          >
            <h3 className="type-priority-feature-title">{feature.title}</h3>
            <p className="mt-3 type-prose-muted">{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DomainCluster({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.02] px-6 py-5">
      <Icon className="h-7 w-7 text-accent-indigo" aria-hidden />
      <p className="type-domain-cluster-title">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-400">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-accent-indigo">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DocPathRow({ path, caption }: { path: string; caption: string }) {
  return (
    <li className="flex flex-col rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3">
      <code className="text-[13px] text-accent-indigo">{path}</code>
      <span className="text-xs text-slate-600">{caption}</span>
    </li>
  );
}

function DeveloperPlaybook() {
  return (
    <section className="mt-16">
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
            Mirrors the onboarding flow described in-repo: PHP&nbsp;8.2+, Composer 2.x, Node
            18+, PostgreSQL&nbsp;13+, Redis&nbsp;6+.
          </p>
          <h3 className="type-playbook-h3">Install &amp; boot</h3>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/55 p-4 text-[13px] text-slate-300">{`git clone <repository-url>
cd salasel
composer install && npm install`}</pre>

          <h3 className="type-playbook-h3">Environment</h3>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/55 p-4 text-[13px] text-slate-300">{`cp .env.example .env
php artisan key:generate

APP_NAME=Salasel
APP_URL=http://localhost

DB_CONNECTION=pgsql
REDIS_HOST=127.0.0.1
CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
SESSION_DRIVER=redis

# MAIL_* — configure transactional provider`}</pre>

          <h3 className="type-playbook-h3">Database &amp; permissions</h3>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/55 p-4 text-[13px] text-slate-300">{`php artisan migrate
php artisan db:seed
php artisan shield:generate --all`}</pre>

          <h3 className="type-playbook-h3">Run locally</h3>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/55 p-4 text-[13px] text-slate-300">{`npm run build       # prod assets once
npm run dev         # vite dev server
php artisan serve
php artisan queue:work`}</pre>

          <h3 className="type-playbook-h3">Handy Laravel / Filament tooling</h3>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/55 p-4 text-[13px] text-slate-300">{`php artisan make:migration create_table_name
php artisan migrate:rollback

php artisan make:filament-resource Model --panel=horeca
php artisan make:filament-resource Model --generate --view`}</pre>
        </div>
      </details>
    </section>
  );
}
