"use client";

import { Navbar } from "@/app/components/Navbar";
import { HeroSection } from "@/app/components/sections/Hero";
import { SpreadsheetsSection } from "@/app/components/sections/Spreadsheets";
import { SolutionsSection } from "@/app/components/sections/Solutions";
import { EngagementOptionsSection } from "@/app/components/sections/EngagementOptions";
import { BuiltForSection } from "@/app/components/sections/BuiltFor";
import { ProcessSection } from "@/app/components/sections/Process";
import { WorkTeaser } from "@/app/components/WorkTeaser";
import { CTABanner } from "@/app/components/CTABanner";
import { Footer } from "@/app/components/Footer";
import type { Locale } from "@/app/lib/locales";
import { LOCALE_DATA } from "@/app/lib/locales";

export function HomeContent({ locale }: { locale: Locale }) {
  const data = LOCALE_DATA[locale];

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-[#11100E] antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <SpreadsheetsSection />
        <SolutionsSection />
        <EngagementOptionsSection locale={locale} />
        <BuiltForSection />
        <ProcessSection />
        <WorkTeaser />
        <CTABanner
          heading={data.ctaHeading}
          sub={data.ctaSub}
          cta="Book Discovery Call"
        />
      </main>
      <Footer />
    </div>
  );
}
