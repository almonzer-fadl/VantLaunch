# VantLaunch Cold Outreach Workflow

## Step 1: Source leads via Apify

- **Actor:** [LinkedIn Profile Search Scraper No Cookies](https://apify.com/harvestapi/linkedin-profile-search)
- **Keywords:** `"marketing agency" founder`, `"digital agency" owner`, `"creative agency" CEO`, `"growth agency" co-founder`, `"branding studio" founder`, `"advertising agency" owner`, `"performance marketing" CEO`, `"B2B marketing" founder`, `"web design agency" owner`
- **Filters:** Title contains `Founder OR Owner OR CEO OR Co-Founder`, Industry `Marketing & Advertising`, Company size `2–50`, Location: one US city at a time, Email status `Verified only`
- Run multiple scrapes per city for volume.

## Step 2: Merge, dedupe, and create CSV

- Load all JSON exports, dedupe by `publicIdentifier`.
- Extract: firstName, lastName, position, company, email, deliverable, location, connections, linkedinUrl, headline, about.
- Split into two groups: **Has email** (top) and **No email** (bottom, separated by divider row).
- Save as `vantlaunch_leads.csv`.

## Step 3: Find emails for no-email leads

- Search LinkedIn profiles, company websites, and email finders.
- Try common patterns: `first@company.com`, `first.last@company.com`, `hello@company.com`.
- Add found emails to CSV as `Manual find` in deliverable column.

## Step 4: Remove rejects

Remove leads that are NOT marketing/creative/digital agency founders:
- Insurance, biotech, recruiting, VA outsourcing, church, sports teams, AI SaaS products (not agencies), dental/niche products.
- Solo consultants with no team (unless explicitly relevant).
- Non-decision-makers (VP/Director at large orgs, not founders).

## Step 5: Classify email deliverability

| Status | Meaning | Action |
|---|---|---|
| **Yes** | Verified deliverable | Send. Priority. |
| **Catch-all** | Domain accepts all mail, unverified | Medium risk. Send if the lead is high quality. |
| **Manual find** | Found manually, not verified | Send. Treat like Catch-all. |
| **No** (no reason) | No verification data | Don't send unless desperate. |

## Step 6: Tier the leads

### 🔥 Tier 1 — Obvious fit
- Marketing/creative/digital/brand agency.
- Founder, CEO, Owner, Co-Founder as current position.
- Verified deliverable email.
- Relevant headline mentions agency/marketing/creative/brand/SEO/design.

### 🟡 Tier 2 — Potentially good
- Agency-adjacent (consulting, talent marketplace, marketing tech, fractional CMO).
- Unclear if they run a team or just solo.
- Product companies that also do services.

### ❌ Tier 3 — Skip
- Wrong industry (insurance, church, recruiting, biotech, sports, etc.).
- Non-decision-maker.
- Too large (enterprise, public company).
- Niche products with no agency service offering.

## Step 7: Draft emails

### Framework (from feedback)
```
Observation → specific problem → what I do → tiny CTA
```

### Rules
- **DO:** Personalize based on their company/niche. Ask a question they care about. Hint at what VantLaunch does without pitching.
- **DON'T:** Say "book a call", "AI-powered", "we build software", "we help businesses", "I hope this email finds you well."
- **Goal:** Get a reply, not a sale.

### Style (from tested drafts — batch 2 refinements)

**Paragraph flow:**
1. Observation about their agency (what you noticed)
2. Transition: "That made me curious about..." / "I'm curious how you handle..."
3. Be specific — list the actual workflows (project visibility, approvals, reporting, handoffs, etc.)
4. One-liner about VantLaunch — what you actually build: "dashboards, project visibility, client portals, and automation"
5. Soft question — already solved, or still manual?

**Rules:**
- **Short paragraphs** — 1-2 lines max. Lots of line breaks. Easy to scan on mobile.
- **Softer framing** — "I'm curious..." not "I bet you're struggling..."
- **Conversational tone** — "duct tape involved" > "patches together manually"
- **Never assume pain** — ask if it exists rather than telling them it does.
- **Be specific about what you build** — name the actual deliverables (dashboards, client portals, reporting automation, workflow tools), not abstract "internal systems."
- **Move the VantLaunch line up** — don't bury it at the end. Place it before the closing question.
- **Soft CTA** — "Have you already got that dialed in?" or "Is that something you've thought about?" — not "Worth a call?"
- **Natural openings** — "caught my attention" > "is impressive" > "stood out"
- **Leave the door open** — they might say "we're good" and that's fine. No pressure.
- **Remove presumptuous statements** — never suggest their operations are suffering. You don't know.

### Signature
```
Almonzer
Founder, VantLaunch
vantlaunch.com
```
(Plain text. No `https://`. No hyperlink.)

### Subject line
`Quick question` (tested, works)

### Tested template
```
Subject: Quick question

Hi [Name],

[Specific observation about their agency — something you actually noticed].

That made me curious about [specific operational question].

I build custom internal systems for agencies — [brief 3-4 service words] — so I figured it was worth asking.

[Soft question — invite reply, no pressure. "Is that something you've already solved, or is there still some duct tape involved?"]

Almonzer
Founder, VantLaunch
vantlaunch.com
```

## Step 8: Send and track

- Send only to Tier 1 first.
- Track: sent, replied, bounced (don't rely on open tracking — Apple MPP makes it unreliable).
- After 50 sends, review reply rate and adjust.
- Target: 3-day wait before follow-up.

## Step 9: Sending limits & scaling

### Current setup
- **Email:** almonzer@vantlaunch.com (Namecheap privateemail.com)
- **DNS:** SPF ✅ | DKIM ✅ | DMARC ✅ (p=none, monitoring mode)

### Single inbox limits (no warmup tool)

| Phase | Per day | Per week |
|---|---|---|
| First 2 weeks | 5–10 | 25–50 |
| Week 3–4 | 15–20 | 75–100 |
| After 1 month (if clean) | 30 max | 150 |

Realistic monthly cap: **400–600 emails** from one inbox.

### The free LinkedIn hack
- Apify already gives LinkedIn URLs for every lead.
- Send connection requests (100/week limit on free LinkedIn) with a short note.
- Once accepted, DM them. Same framework, shorter format.
- No warmup, no deliverability issues, completely free.
- **Split strategy:** Email for Tier 1 (low volume, high personalization). LinkedIn for Tier 2 + future scrapes (higher volume).
- Doubles reach with zero extra cost.

### Paid scaling path (when you have budget)
- Buy 2-3 similar domains (tryvantlaunch.com, getvantlaunch.com, etc.) — forward to main site.
- One Google Workspace ($6/mo) + one Microsoft 365 ($6/mo) inbox + your privateemail.
- [Instantly.ai](https://instantly.ai) ($37/mo Growth plan): auto-warmup all inboxes, tracking, sequences, spam testing.
- 3 inboxes × 50/day = 150/day = 750/week safely.
- Total: ~$50/mo.

### Tracking without Gmail
- Don't use open tracking pixels — they hurt deliverability and are unreliable.
- Only meaningful metric: **replies**.
- Track manually in a spreadsheet: Sent date, Replied, Notes.
- When scaling: Instantly or Smartlead handle reply tracking automatically.

## About VantLaunch (for drafting context)

- **What:** Custom internal business systems for growing service businesses.
- **Who:** Marketing agencies, consulting firms, accounting firms, construction companies (5–50 employees).
- **Value prop:** Replace scattered tools (spreadsheets, dashboards, CRMs, reporting) with one owned operating system.
- **Delivery:** 2–4 weeks, flat fee, source code ownership.
- **Pricing:** From $2,500 (starter) up to custom enterprise builds.
- **Differentiator:** Not SaaS. Custom built. Client owns the code. No vendor lock-in.

## File conventions

- All leads go to `~/Downloads/vantlaunch_leads.csv`.
- Raw Apify JSONs go to `~/Downloads/` (delete after processing).
- Subject line: `Quick question`.
- Never use "– Adam" — it's **Almozner** (or **Almonzer Fadl**).
