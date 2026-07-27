import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/sections/Hero";
import { ServicesSection } from "./components/sections/Services";
import { PortfolioSection } from "./components/sections/Portfolio";
import { ProcessSection } from "./components/sections/Process";
import { CTASection } from "./components/sections/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-white antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
