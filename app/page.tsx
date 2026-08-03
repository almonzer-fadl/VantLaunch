"use client";

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/sections/Hero";
import { ProofStripSection } from "./components/sections/ProofStrip";
import { WorkReelSection } from "./components/sections/WorkReel";
import { ServicesSection } from "./components/sections/Services";
import { PortfolioSection } from "./components/sections/Portfolio";
import { StudioProofSection } from "./components/sections/StudioProof";
import { ProcessSection } from "./components/sections/Process";
import { FounderSection } from "./components/sections/Founder";
import { FAQSection } from "./components/sections/FAQ";
import { CTASection } from "./components/sections/CTA";
import { Footer } from "./components/Footer";
import { ProjectOverlay } from "./components/ProjectOverlay";

export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-[#11100E] antialiased">
      <Navbar />
      <main>
        <HeroSection onOpenProject={setActiveProject} />
        <ProofStripSection />
        <WorkReelSection />
        <ServicesSection />
        <PortfolioSection onOpenProject={setActiveProject} />
        <StudioProofSection />
        <ProcessSection />
        <FounderSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <ProjectOverlay activeSlug={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
