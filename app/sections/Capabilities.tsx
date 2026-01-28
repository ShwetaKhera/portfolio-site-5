"use client";

import { motion } from "framer-motion";
import { getResumeData } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import AnimatedSection from "@/components/AnimatedSection";

/**
 * Capabilities section
 * 
 * Presents skills as capability themes, not tool lists
 * Shows breadth and depth through curated groupings
 * Tools are secondary - the theme/approach is primary
 */

interface CapabilityTheme {
  title: string;
  description: string;
  tools: string[];
}

export default function Capabilities() {
  const { skills } = getResumeData();

  // Auto-group skills into capability themes
  const capabilities: CapabilityTheme[] = [
    {
      title: "Frontend Architecture",
      description: "Building scalable, maintainable systems that serve millions of users with exceptional performance",
      tools: skills
        .find((s) => s.category === "Languages & Frameworks")
        ?.items.slice(0, 4) || [],
    },
    {
      title: "Design Systems & UI",
      description: "Creating cohesive design languages that unify product experiences and accelerate team velocity",
      tools: skills
        .find((s) => s.category === "Styling & Design")
        ?.items.slice(0, 4) || [],
    },
    {
      title: "Performance & Quality",
      description: "Obsessive optimization and testing practices that ensure reliability at scale",
      tools: skills
        .find((s) => s.category === "Tools & Practices")
        ?.items.slice(0, 4) || [],
    },
    {
      title: "Infrastructure & DevOps",
      description: "End-to-end ownership from development through deployment and monitoring",
      tools: skills
        .find((s) => s.category === "Infrastructure")
        ?.items.slice(0, 4) || [],
    },
  ];

  return (
    <AnimatedSection as="section" className="py-24 md:py-32 bg-foreground/[0.02]">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Capabilities
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Core competencies shaped by years of building production systems
          </p>
        </div>

        {/* Capability grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 md:gap-16"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium mb-3 group-hover:text-accent transition-colors">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-muted leading-relaxed mb-4">
                {capability.description}
              </p>

              {/* Tools - subtle, secondary */}
              {capability.tools.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {capability.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="text-xs font-mono text-muted/60 px-2 py-1 border border-foreground/5 hover:border-accent/30 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
