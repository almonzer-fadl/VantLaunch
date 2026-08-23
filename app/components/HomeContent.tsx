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
import { StickyCTA } from "@/app/components/StickyCTA";
import type { Locale } from "@/app/lib/locales";
import { LOCALE_DATA } from "@/app/lib/locales";
import { LocaleProvider } from "@/app/lib/LocaleContext";

export function HomeContent({ locale }: { locale: Locale }) {
  const data = LOCALE_DATA[locale];
  const t = data.t;

  useEffect(() => {
    document.documentElement.dir = data.dir;
    document.documentElement.lang = data.lang;
    return () => {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    };
  }, [data.dir, data.lang]);

  return (
    <LocaleProvider locale={locale}>
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
            heading={t.cta.heading}
            sub={t.cta.sub}
            cta={t.cta.button}
          />
      </main>
      <Footer />
      <StickyCTA />
    </div>
    </LocaleProvider>
  );
}
