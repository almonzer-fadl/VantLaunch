"use client";

import { motion, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";

export function SpotlightLayer({
  mousePos,
  prefersReducedMotion,
}: {
  mousePos: { x: number; y: number };
  prefersReducedMotion: boolean;
}) {
  const spotlightX = useSpring(mousePos.x, { stiffness: 130, damping: 30, mass: 0.45 });
  const spotlightY = useSpring(mousePos.y, { stiffness: 130, damping: 30, mass: 0.45 });

  useEffect(() => {
    if (prefersReducedMotion) {
      spotlightX.jump(mousePos.x);
      spotlightY.jump(mousePos.y);
      return;
    }
    spotlightX.set(mousePos.x);
    spotlightY.set(mousePos.y);
  }, [mousePos.x, mousePos.y, prefersReducedMotion, spotlightX, spotlightY]);

  const dynamicBg = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(255, 255, 255, 0.02), transparent 40%)`;

  if (prefersReducedMotion) {
    return (
      <div
        className="fixed inset-0 z-0 pointer-events-none spotlight opacity-50"
        aria-hidden
      />
    );
  }

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
      style={{ background: dynamicBg }}
    />
  );
}

export function MagneticWrap({
  active,
  children,
  className,
  strength = 0.13,
}: {
  active: boolean;
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const max = 10;
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!active || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rawX = (e.clientX - cx) * strength;
    const rawY = (e.clientY - cy) * strength;
    setOffset({
      x: Math.max(-max, Math.min(max, rawX)),
      y: Math.max(-max, Math.min(max, rawY)),
    });
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <div
      ref={wrapperRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <motion.div style={{ x: offset.x, y: offset.y }}>{children}</motion.div>
    </div>
  );
}

export function CardPointerGlow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [p, setP] = useState({ x: 50, y: 50 });

  return (
    <div
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        setP({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      onMouseLeave={() => setP({ x: 50, y: 50 })}
      className={className}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(620px ellipse at ${p.x}% ${p.y}%, rgba(255, 255, 255, 0.03), transparent 68%)`,
        }}
      />
      {children}
    </div>
  );
}

export function TiltSpecular({
  children,
  className,
  disabled,
}: {
  children: ReactNode;
  className?: string;
  disabled: boolean;
}) {
  const [p, setP] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const rx = (p.y - 50) / 7.5;
  const ry = (50 - p.x) / 7.5;

  return (
    <motion.div
      className={className}
      style={
        disabled
          ? undefined
          : {
              transformStyle: "preserve-3d",
              perspective: 1000,
            }
      }
      animate={
        disabled
          ? undefined
          : {
              rotateX: hover ? rx : 0,
              rotateY: hover ? ry : 0,
              scale: hover ? 1.012 : 1,
            }
      }
      transition={disabled ? undefined : { type: "spring", stiffness: 220, damping: 26, mass: 0.7 }}
      onMouseMove={(e) => {
        if (disabled) return;
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        setP({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setP({ x: 50, y: 50 });
      }}
    >
      {!disabled ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0"
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            background: `radial-gradient(720px circle at ${p.x}% ${p.y}%, rgba(255,255,255,0.08), transparent 55%)`,
            transform: "translateZ(1px)",
          }}
        />
      ) : null}
      <motion.div style={disabled ? undefined : { transform: "translateZ(0px)" }}>{children}</motion.div>
    </motion.div>
  );
}
