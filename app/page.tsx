"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SpotlightLayer } from "./components/UI";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/sections/Hero";
import { ComparisonSection } from "./components/sections/Comparison";
import { VenturesSection } from "./components/sections/Ventures";
import { ProcessSection } from "./components/sections/Process";
import { CTASection } from "./components/sections/CTA";
import { Footer } from "./components/Footer";
import { ProjectOverlay } from "./components/ProjectOverlay";
import { usePrefersReducedMotion } from "./hooks/use-prefers-reduced-motion";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeNav, setActiveNav] = useState("#ventures");
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Handle initial deep link and popstate
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      if (path.startsWith("/work/")) {
        const slug = path.split("/").pop();
        if (slug) setActiveProject(slug);
      } else {
        setActiveProject(null);
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  const openProject = (slug: string) => {
    setActiveProject(slug);
    window.history.pushState({ project: slug }, "", `/work/${slug}`);
  };

  const closeProject = () => {
    setActiveProject(null);
    window.history.pushState(null, "", "/");
  };

  useEffect(() => {
    const ids = ["#ventures", "#comparison", "#process"];
    const targets = ids
      .map((id) => ({ id, el: document.querySelector(id) as HTMLElement | null }))
      .filter((x): x is { id: string; el: HTMLElement } => Boolean(x.el));

    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target) {
          setActiveNav(`#${(visible[0].target as HTMLElement).id}`);
        }
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65], rootMargin: "-20% 0px -60% 0px" }
    );

    targets.forEach(({ el }) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
      <div
        ref={containerRef}
        className="flex flex-col min-h-screen bg-zinc text-white selection:bg-white/10 antialiased overflow-x-hidden relative"
      >
        <SpotlightLayer mousePos={mousePos} prefersReducedMotion={prefersReducedMotion} />

        {/* Background Grid */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-dot-grid opacity-[0.15]" />
        </div>

        <Navbar activeNav={activeNav} />

        <main className="relative z-10 flex-1">
          <HeroSection 
            prefersReducedMotion={prefersReducedMotion} 
            onOpenProject={openProject} 
          />
          <ComparisonSection prefersReducedMotion={prefersReducedMotion} />
          <VenturesSection 
            prefersReducedMotion={prefersReducedMotion} 
            onOpenProject={openProject} 
          />
          <ProcessSection prefersReducedMotion={prefersReducedMotion} />
          <CTASection prefersReducedMotion={prefersReducedMotion} />
        </main>

        <Footer />

        <ProjectOverlay activeSlug={activeProject} onClose={closeProject} />
      </div>
    </MotionConfig>
  );
}
