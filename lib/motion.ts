import { Variants } from "framer-motion";

/**
 * Centralized motion configuration
 * 
 * All animations follow strict guidelines:
 * - Duration: 150-300ms
 * - Easing: cubic-bezier(0.4, 0, 0.2, 1)
 * - Respect prefers-reduced-motion
 * - No layout shift
 */

export const TRANSITION = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const,
};

export const FAST_TRANSITION = {
  duration: 0.15,
  ease: [0.4, 0, 0.2, 1] as const,
};

/**
 * Section fade-in with slight Y translation
 * Used for main content sections
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION,
  },
};

/**
 * Staggered children animation
 * Used for lists and timeline items
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Individual stagger item
 * Child elements in staggered containers
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION,
  },
};

/**
 * Hover scale effect
 * Used for interactive elements
 */
export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: FAST_TRANSITION,
  },
};
