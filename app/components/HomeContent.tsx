"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    document.documentElement.dir = data.dir;
    document.documentElement.lang = data.lang;
    return () => {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    };
  }, [data.dir, data.lang]);

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
          cta={data.ctaButton}
        />
      </main>
      <Footer />
    </div>
  );
}
