"use client";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/sections/Hero";
import { SpreadsheetsSection } from "./components/sections/Spreadsheets";
import { SolutionsSection } from "./components/sections/Solutions";
import { ComparisonSection } from "./components/sections/Comparison";
import { BenefitsSection } from "./components/sections/Benefits";
import { ProcessSection } from "./components/sections/Process";
import { CaseStudiesSection } from "./components/sections/CaseStudies";
import { FAQSection } from "./components/sections/FAQ";
import { CTASection } from "./components/sections/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-[#11100E] antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <SpreadsheetsSection />
        <SolutionsSection />
        <ComparisonSection />
        <BenefitsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
