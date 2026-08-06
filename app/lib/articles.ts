import type { ArticleData } from "@/app/components/ArticlePage";

export const ARTICLES: Record<string, ArticleData> = {
  "signs-outgrown-spreadsheets": {
    title: "Signs Your Business Has Outgrown Spreadsheets",
    description: "Spreadsheets work until they do not. Here are the warning signs that your business has outgrown manual tools and needs a custom internal system.",
    category: "Operations",
    readTime: "7 min read",
    publishDate: "August 2026",
    sections: [
      { heading: "Why businesses start with spreadsheets", content: "Every growing service business starts the same way. A founder tracks projects in Excel. An operations manager builds a weekly report in Google Sheets. A team lead manages tasks with a shared workbook. It works — for a while. Spreadsheets are flexible, familiar, and free. They do not require IT approval or a software budget. They are the universal business tool.\n\nBut as the business grows, the spreadsheet system starts to crack. More people need access. More data flows in from more sources. Reports that took ten minutes now take two hours. Errors creep in. Version control becomes a nightmare. Suddenly, the tool that enabled growth is now limiting it." },
      { heading: "Sign 1: You are checking 6+ platforms before every decision", content: "When a single business decision requires logging into Google Ads, Meta Ads, Stripe, your CRM, Google Analytics, and a spreadsheet — you have outgrown your tools. Leaders in growing businesses should not be data collectors. They should be decision makers.\n\nA custom internal system pulls data from every source into one view. No tabs. No exports. Just the numbers you need, updated automatically." },
      { heading: "Sign 2: Manual reporting consumes hours every week", content: "The average operations manager in a growing service business spends 5-10 hours per week on manual reporting — pulling data from different platforms, formatting spreadsheets, and building presentations. That is over 500 hours per year spent on work that software can do in seconds.\n\nCustom reporting systems automate the entire pipeline: data collection, aggregation, formatting, and delivery. Reports arrive in inboxes, Slack channels, or dashboards — without anyone touching a spreadsheet." },
      { heading: "Sign 3: You have no single source of truth", content: "When the sales team has one number, operations has another, and finance has a third — you have a data integrity problem. Spreadsheets create silos. Each department maintains its own version of reality. Decisions get made from outdated or conflicting information.\n\nA custom internal system serves as the single source of truth. Everyone sees the same numbers. Updates are instant. Confidence in data improves. Decision speed increases." },
      { heading: "Sign 4: Errors are becoming costly", content: "A formula error in a spreadsheet can cascade through an entire report. A wrong cell reference can understate costs or overstate revenue. In regulated industries, spreadsheet errors can lead to compliance issues.\n\nCustom software validates data at every step. Automated calculations eliminate manual formula errors. Audit trails track every change. The cost of errors drops to near zero." },
      { heading: "Sign 5: Growth makes the problem worse, not better", content: "Hiring more people does not fix spreadsheet chaos — it amplifies it. Each new hire adds another person updating cells, another potential for version conflicts, another report consumer demanding their own custom view.\n\nA custom system scales with your business. Add users with role-based access. Create new dashboards without breaking existing ones. Automate the workflows that new headcount was hired to handle manually." },
      { heading: "What to do next", content: "If two or more of these signs resonate, your business is ready for a custom internal system. The first step is an operations audit — understanding exactly where time is lost and what can be automated. From there, you can decide whether to build a fix for one bottleneck or a complete operational platform." },
    ],
    faq: [
      { q: "At what size does a business need custom software?", a: "There is no magic number. Some 5-person teams need custom systems because their workflows are complex. Some 50-person companies run fine on spreadsheets. The trigger is operational complexity, not headcount." },
      { q: "How long does it take to build a custom system?", a: "Most systems we build are delivered in 2-6 weeks depending on scope. A focused solution for one bottleneck takes 1-2 weeks. A complete operating system takes 3-6 weeks." },
      { q: "Do we own the software?", a: "Yes. Full source code ownership. No vendor lock-in, no subscription to access your data, no licensing fees for the core system." },
    ],
    related: [
      { title: "Custom Software vs Off-the-Shelf Software", href: "/blog/custom-vs-off-the-shelf" },
      { title: "How Much Time Manual Reporting Costs", href: "/blog/manual-reporting-costs" },
      { title: "What Is an Internal Business System?", href: "/blog/what-is-internal-system" },
    ],
    resources: [
      { title: "Free Operations Audit", href: "/operations-audit" },
      { title: "ROI Calculator", href: "/tools/roi-calculator" },
      { title: "Operations Checklist", href: "/lead-magnets/operations-checklist" },
    ],
    caseStudies: [
      { title: "TeraMotors — 18 hrs/week saved", href: "/work/teramotors" },
    ],
  },

  "custom-vs-off-the-shelf": {
    title: "Custom Software vs Off-the-Shelf Software",
    description: "When should you build custom software instead of buying SaaS? A practical framework for growing businesses making the build vs buy decision.",
    category: "Internal Software",
    readTime: "8 min read",
    publishDate: "August 2026",
    sections: [
      { heading: "The build vs buy dilemma", content: "Every growing business faces this question eventually. You need software to manage operations, but should you subscribe to an existing SaaS product or build something custom? Both paths have tradeoffs. The right answer depends on your specific situation — your workflows, your growth trajectory, and your competitive advantage.\n\nThis guide walks through a practical framework for making the build vs buy decision, with real examples from businesses that chose each path." },
      { heading: "When buying SaaS makes sense", content: "SaaS tools are ideal when your needs are standard and undifferentiated. If your sales process looks like every other company's sales process, a standard CRM works great. If your accounting follows standard practices, QuickBooks or Xero is perfect.\n\nSaaS is also ideal when you need something immediately. Subscription tools are ready to use — no development time required. For a company that needs a solution today, SaaS delivers.\n\nFinally, SaaS makes sense when the tool is not core to your business. If a tool supports a non-critical function, it does not need to be custom. Your project management tool probably does not need to be bespoke." },
      { heading: "When building custom software makes sense", content: "Custom software wins when your workflows are unique. If your business has specific processes that differentiate you from competitors, forcing those processes into a generic tool creates friction and inefficiency.\n\nCustom software also wins when integration is critical. If you need to connect multiple tools — CRM, billing, reporting, client portal — a custom system can unify everything in one place. No more switching between tabs.\n\nCustom software wins when you need control. With a SaaS tool, you are subject to the vendor's roadmap, pricing changes, and feature decisions. With custom software, you control everything — including the source code." },
      { heading: "The cost comparison", content: "At first glance, SaaS looks cheaper. A $50/month subscription is less than a $5,000 custom build. But the math changes over time. If a team of 10 people saves 5 hours per week each with a custom system, at $50/hour, that is $130,000 in annual savings. The custom system pays for itself quickly.\n\nCustom software is a one-time investment (plus optional ongoing optimization). SaaS is a recurring cost that grows with your team. Over 3-5 years, custom software is often the more economical choice for growing businesses." },
      { heading: "The hybrid approach", content: "You do not have to choose one or the other. Many businesses use SaaS for standard functions and custom software for differentiated workflows. For example, use Stripe for payment processing but build a custom dashboard that connects Stripe data with your proprietary project management system.\n\nThe best approach is strategic: buy for commodity, build for competitive advantage." },
    ],
    faq: [
      { q: "Is custom software more expensive than SaaS?", a: "In the short term, yes. In the long term, often no. Custom software is an upfront investment with ongoing value. SaaS is a recurring cost that compounds as your team grows. Over 3-5 years, custom software is frequently more cost-effective for businesses with 10+ employees." },
      { q: "How long does custom software take to build?", a: "Most systems we deliver take 2-6 weeks. A single dashboard takes 1-2 weeks. A complete platform takes 3-6 weeks. Timelines are shorter than most people expect because we use modern frameworks and proven templates." },
    ],
    related: [
      { title: "Signs Your Business Has Outgrown Spreadsheets", href: "/blog/signs-outgrown-spreadsheets" },
      { title: "When Should You Build Custom Software?", href: "/blog/when-to-build-custom" },
    ],
    resources: [
      { title: "Internal Software Buyer's Guide", href: "/lead-magnets/buyers-guide" },
      { title: "ROI Calculator", href: "/tools/roi-calculator" },
    ],
    caseStudies: [
      { title: "SpeakBill — Voice-to-invoice in 60 seconds", href: "/work/speakbill" },
    ],
  },

  "what-is-internal-system": {
    title: "What Is an Internal Business System?",
    description: "A clear, non-technical explanation of what internal business systems are, why growing businesses need them, and how they differ from SaaS tools.",
    category: "Internal Software",
    readTime: "6 min read",
    publishDate: "August 2026",
    sections: [
      { heading: "Defining an internal business system", content: "An internal business system is custom software built specifically for how your company operates. Unlike SaaS tools that force your business to adapt to their workflow, an internal system adapts to yours. It connects your tools, automates your processes, and gives your team one place to work.\n\nThink of it as your company's operating system. Just as macOS connects your applications, files, and hardware, an internal business system connects your CRM, billing, reporting, client portal, and operations into one cohesive platform." },
      { heading: "Internal system vs SaaS", content: "SaaS tools are designed for the average user. They work well for standard workflows — sending invoices, managing email, tracking projects. But growing businesses develop unique workflows that generic tools cannot accommodate. When you find yourself working around a tool's limitations instead of the tool working around your needs, you need a custom solution.\n\nA custom internal system takes your exact workflow and builds software around it. The result is a platform that feels intuitive to your team because it matches how they already work." },
      { heading: "Components of an internal system", content: "A typical internal business system includes: a central dashboard showing KPIs and metrics, client management (CRM), project or case tracking, reporting and analytics, workflow automation, team collaboration tools, client portal for external visibility, and approval workflows. Each component is connected — data flows seamlessly between them." },
    ],
    faq: [
      { q: "Who needs an internal business system?", a: "Growing service businesses with 10+ employees who are spending too much time on manual work, switching between tools, or lacking visibility into operations." },
      { q: "How is this different from an ERP?", a: "ERPs are massive, expensive systems designed for enterprise corporations. Internal business systems are leaner, built for growing businesses, and designed to be delivered in weeks rather than months." },
    ],
    related: [
      { title: "Custom Software vs Off-the-Shelf", href: "/blog/custom-vs-off-the-shelf" },
      { title: "Signs You Have Outgrown Spreadsheets", href: "/blog/signs-outgrown-spreadsheets" },
    ],
    resources: [{ title: "Free Operations Audit", href: "/operations-audit" }, { title: "Operations Checklist", href: "/lead-magnets/operations-checklist" }],
    caseStudies: [{ title: "TeraMotors", href: "/work/teramotors" }],
  },

  "agency-automation": {
    title: "How Marketing Agencies Can Automate Operations",
    description: "Practical automation strategies for marketing agencies — from campaign reporting to client dashboards to resource planning.",
    category: "Agency Operations",
    readTime: "7 min read", publishDate: "August 2026",
    sections: [
      { heading: "The agency operations challenge", content: "Marketing agencies face a unique operational challenge. They manage multiple clients, each with their own campaigns, budgets, and reporting needs. As an agency grows, the operational complexity multiplies faster than headcount. What started as manageable — a few clients, a few campaigns — becomes a daily grind of data collection, report generation, and client communication." },
      { heading: "Automate campaign reporting", content: "The biggest time sink for most agencies is campaign reporting. Pulling data from Meta, Google, TikTok, and analytics tools, then compiling it into client-ready reports. This process typically takes 5-10 hours per week per account manager.\n\nA custom reporting system automates this entirely. It connects to every ad platform, pulls data on a schedule, formats it into branded reports, and delivers them to clients automatically. Account managers go from report builders to strategic advisors." },
      { heading: "Client dashboards that sell themselves", content: "When clients can see live campaign performance anytime, they stop emailing for updates. A client portal with real-time dashboards reduces status-check emails by 80% while increasing client satisfaction. Clients feel more in control, and your team spends less time on reactive communication." },
    ],
    faq: [
      { q: "How long does it take to automate agency reporting?", a: "A custom reporting system for an agency can be built in 2-3 weeks, depending on the number of integrations and report formats needed." },
    ],
    related: [{ title: "Executive Dashboards Explained", href: "/blog/executive-dashboards" }, { title: "Client Portals Explained", href: "/blog/client-portals" }],
    resources: [{ title: "Agency Operations Checklist", href: "/lead-magnets/agency-checklist" }],
    caseStudies: [],
  },

  "executive-dashboards": {
    title: "Executive Dashboards Explained",
    description: "What executive dashboards are, why they matter, and how growing businesses use them to make faster, better decisions.",
    category: "Dashboards", readTime: "6 min read", publishDate: "August 2026",
    sections: [
      { heading: "What is an executive dashboard?", content: "An executive dashboard is a single screen that displays the most important metrics for running a business — revenue, project status, team utilization, pipeline, and KPIs. Instead of checking 6 different platforms and compiling a report, leaders open one dashboard and see everything they need in real time." },
      { heading: "Why spreadsheets fall short for dashboards", content: "Spreadsheets require manual updating. Every Monday morning, someone pulls data from multiple sources, formats it, and shares it. By Tuesday, some numbers are already outdated. By Friday, decisions are being made on week-old data.\n\nA real executive dashboard updates automatically. Revenue numbers are live. Project statuses reflect this morning's updates. Pipeline numbers come directly from your CRM. The dashboard is always current." },
      { heading: "What belongs on an executive dashboard", content: "The best executive dashboards are focused. They show 6-10 key metrics, not 50. Revenue, active projects, team utilization, pipeline value, client satisfaction, and cash position are common starting points. The dashboard should answer one question at a glance: how is the business doing right now?" },
    ],
    faq: [{ q: "Can I customize what appears on my dashboard?", a: "Yes. Every dashboard we build is designed around your specific KPIs, workflows, and data sources. Nothing is off-the-shelf." }],
    related: [{ title: "Custom Software vs Off-the-Shelf", href: "/blog/custom-vs-off-the-shelf" }],
    resources: [{ title: "Executive Dashboard Planning Worksheet", href: "/lead-magnets/dashboard-planning" }],
    caseStudies: [],
  },

  "crm-vs-custom-crm": {
    title: "CRM vs Custom CRM", description: "When a standard CRM is enough and when growing businesses need a custom CRM built around their sales process.",
    category: "CRM", readTime: "6 min read", publishDate: "August 2026",
    sections: [
      { heading: "The standard CRM problem", content: "Most CRMs are designed for a generic sales process: lead → qualified → proposal → closed. But many service businesses do not sell this way. Consulting firms build relationships over months. Agencies pitch and scope custom engagements. Accounting firms onboard clients through referrals.\n\nWhen your sales process does not match the CRM, your team works around the tool instead of the tool supporting them. Data entry becomes a chore. Pipeline visibility suffers. The CRM becomes a burden rather than an asset." },
      { heading: "When a custom CRM makes sense", content: "A custom CRM is worth considering when your sales process is unique to your industry, when you need deep integration with your project management or billing systems, or when your team is spending too much time on CRM admin instead of selling.\n\nA custom CRM is built around your actual stages, your actual data fields, and your actual workflow. Sales teams use it because it helps them, not because they have to." },
    ],
    faq: [{ q: "Can a custom CRM integrate with my existing tools?", a: "Yes. We connect custom CRMs with email, calendar, billing, project management, and other tools you already use." }],
    related: [{ title: "Custom Software vs Off-the-Shelf", href: "/blog/custom-vs-off-the-shelf" }],
    resources: [{ title: "CRM Planning Worksheet", href: "/lead-magnets/crm-planning" }],
    caseStudies: [],
  },

  "when-to-build-custom": {
    title: "When Should You Build Custom Software?", description: "A practical decision framework for business leaders deciding between buying SaaS, building custom, or doing nothing.",
    category: "Internal Software", readTime: "7 min read", publishDate: "August 2026",
    sections: [
      { heading: "The three options", content: "When you identify an operational problem, you have three options: do nothing (absorb the inefficiency), buy a SaaS tool, or build custom software. The right choice depends on three factors: how unique your workflow is, how much the inefficiency costs you, and how strategic the function is to your business." },
      { heading: "The uniqueness test", content: "Ask yourself: does my business do this the same way as every other company in my industry? If yes, a standard SaaS tool probably works. If no — if your process is a competitive differentiator — forcing it into a generic tool creates friction.\n\nExample: every company needs accounting. Most use QuickBooks or Xero because accounting is standard. But a consulting firm's engagement management process is unique — how they scope, staff, track, and bill engagements. That is worth building custom." },
      { heading: "The cost test", content: "How much is the inefficiency costing you? If a manual process consumes 10 hours per week across a team of 5 at $50/hour, that is $130,000 per year. A custom solution that solves 80% of that costs far less than the problem.\n\nCalculate the annual cost of the problem, compare it to the one-time cost of a custom solution, and the decision becomes clear." },
    ],
    faq: [{ q: "What is the minimum size for custom software to make sense?", a: "About 5-10 employees. Below that, the ROI is harder to justify. Above that, the time savings compound quickly." }],
    related: [{ title: "Custom Software vs Off-the-Shelf", href: "/blog/custom-vs-off-the-shelf" }],
    resources: [{ title: "ROI Calculator", href: "/tools/roi-calculator" }, { title: "Buyer's Guide", href: "/lead-magnets/buyers-guide" }],
    caseStudies: [],
  },

  "manual-reporting-costs": {
    title: "How Much Time Manual Reporting Costs", description: "A data-driven look at the hidden cost of manual reporting in growing businesses — and how automation changes the equation.",
    category: "Operations", readTime: "5 min read", publishDate: "August 2026",
    sections: [
      { heading: "The hidden cost", content: "Manual reporting is one of the biggest hidden costs in growing businesses. It is rarely tracked, never invoiced, and usually invisible to leadership. But the numbers are staggering.\n\nA typical operations manager at a 20-person service business spends 8-12 hours per week pulling data, formatting reports, and distributing them to stakeholders. At $40/hour, that is over $20,000 per year — for one person. Multiply across a team, and the cost runs into six figures." },
      { heading: "The compounding effect", content: "Manual reporting costs compound as the business grows. Each new client adds reporting requirements. Each new data source adds pulling time. Each new stakeholder adds distribution time. What cost $10,000 per year at 5 people costs $50,000 at 20 people. The problem scales faster than headcount." },
      { heading: "What automation saves", content: "An automated reporting system eliminates the entire manual pipeline. Data is pulled automatically from every source. Reports are generated on a schedule. Distribution happens without human intervention. The time spent drops from hours per week to minutes per month — typically a 95% reduction." },
    ],
    faq: [{ q: "How much does automated reporting cost to build?", a: "A custom reporting system typically costs $999-$2,499 depending on complexity — less than the annual cost of the manual work it replaces." }],
    related: [{ title: "Signs You Have Outgrown Spreadsheets", href: "/blog/signs-outgrown-spreadsheets" }],
    resources: [{ title: "ROI Calculator", href: "/tools/roi-calculator" }],
    caseStudies: [],
  },

  "client-portals": {
    title: "Client Portals Explained", description: "What client portals are, how they transform client relationships, and why growing service businesses are building them.",
    category: "Client Portals", readTime: "6 min read", publishDate: "August 2026",
    sections: [
      { heading: "What is a client portal?", content: "A client portal is a secure, branded web interface where clients can see project status, approve deliverables, access documents, and communicate with your team — without emailing or calling. It gives clients visibility and control while freeing your team from status-check interruptions." },
      { heading: "The email problem", content: "In most service businesses, client communication happens through email. Status updates, document sharing, approvals — all email. The result is an inbox full of one-line replies, lost attachments, and version confusion. A client portal consolidates all client communication into one structured interface." },
    ],
    faq: [{ q: "Can clients access only their own data?", a: "Yes. Client portals are role-based — each client sees only their own projects, documents, and communications." }],
    related: [{ title: "Executive Dashboards Explained", href: "/blog/executive-dashboards" }],
    resources: [{ title: "Client Portal Template", href: "/templates" }],
    caseStudies: [],
  },

  "workflow-automation": {
    title: "Internal Workflow Automation Guide", description: "A practical guide to identifying, prioritizing, and automating internal workflows — from simple triggers to complex multi-step processes.",
    category: "Automation", readTime: "8 min read", publishDate: "August 2026",
    sections: [
      { heading: "What is workflow automation?", content: "Workflow automation connects the tools and processes your business uses every day so they run without manual intervention. When a new client signs, the automation creates their project, sends a welcome email, assigns the team, and notifies the account manager — all without anyone clicking a button." },
      { heading: "Identifying automation opportunities", content: "The best automation opportunities are repetitive, rule-based, and high-volume. Look for tasks that happen the same way every time, follow clear rules, and occur frequently. Client onboarding, invoice generation, report distribution, and status notifications are classic examples." },
      { heading: "Prioritizing what to automate", content: "Not every task is worth automating. Prioritize based on frequency, time saved, and error reduction. A task done 50 times per week that takes 10 minutes each is a better candidate than a task done monthly that takes 5 minutes. Start with the highest-impact automations and expand from there." },
    ],
    faq: [{ q: "Do I need to know how to code to set up automations?", a: "You do not need to code — we build the automations for you. Once built, they run automatically. You can request changes or additions as your needs evolve." }],
    related: [{ title: "How Marketing Agencies Can Automate", href: "/blog/agency-automation" }],
    resources: [{ title: "Automation Readiness Checklist", href: "/lead-magnets/automation-readiness" }],
    caseStudies: [],
  },
};

export const BLOG_CATEGORIES = [
  "Operations", "Automation", "CRM", "Dashboards",
  "Internal Software", "Client Portals", "AI", "Agency Operations",
];
