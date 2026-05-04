import { EASE_CURSOR } from "./constants";

export const fadeSlide = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: EASE_CURSOR },
  },
};

export const staggerSection = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const heroTitleStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const getHeroLineReveal = (reduced: boolean) => (
  reduced
    ? {
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: EASE_CURSOR },
        },
      }
    : {
        hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.62, ease: EASE_CURSOR },
        },
      }
);

export const getHeroSubReveal = (reduced: boolean) => (
  reduced
    ? {
        hidden: { opacity: 0, y: 6 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: EASE_CURSOR },
        },
      }
    : {
        hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.48, ease: EASE_CURSOR },
        },
      }
);
