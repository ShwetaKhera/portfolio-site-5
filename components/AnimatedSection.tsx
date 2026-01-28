"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { fadeInUp } from "@/lib/motion";

/**
 * AnimatedSection component
 * 
 * Wraps section content with fade-in animation triggered on scroll
 * Respects prefers-reduced-motion via Framer Motion's built-in support
 * 
 * Usage:
 * <AnimatedSection>
 *   <YourContent />
 * </AnimatedSection>
 */

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  as = "section",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Trigger animation when section enters viewport
  // once: true ensures animation only happens once
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const Component = motion[as];

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
