"use client";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/sections/Hero";
import { SpreadsheetsSection } from "./components/sections/Spreadsheets";
import { SolutionsSection } from "./components/sections/Solutions";
import { EngagementOptionsSection } from "./components/sections/EngagementOptions";
import { BuiltForSection } from "./components/sections/BuiltFor";
import { ProcessSection } from "./components/sections/Process";
import { WorkTeaser } from "./components/WorkTeaser";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-[#11100E] antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <SpreadsheetsSection />
        <SolutionsSection />
        <EngagementOptionsSection />
        <BuiltForSection />
        <ProcessSection />
        <WorkTeaser />
        <CTABanner
          heading="Imagine opening one dashboard instead of ten tabs."
          sub="Your operations deserve better than scattered tools and manual reports. Book a free discovery call — we will map your operations and show you what is possible."
          cta="Book Discovery Call"
        />
      </main>
      <Footer />
    </div>
  );
}
