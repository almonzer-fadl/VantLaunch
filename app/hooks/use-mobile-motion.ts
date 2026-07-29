"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export function useMobileMotion() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMobileMotion, setIsMobileMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px), (pointer: coarse)");

    function update() {
      setIsMobileMotion(mq.matches);
    }

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return {
    isMobileMotion,
    shouldReduceMotion: prefersReducedMotion || isMobileMotion,
  };
}
