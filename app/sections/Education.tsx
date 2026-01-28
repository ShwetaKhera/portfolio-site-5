"use client";

import { motion } from "framer-motion";
import { getResumeData } from "@/lib/content";
import { staggerContainer } from "@/lib/motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import TimelineItem from "@/components/TimelineItem";

/**
 * Education section
 * 
 * Displays educational background
 * Uses staggered animation consistent with Experience section
 */

export default function Education() {
  const { education } = getResumeData();

  if (!education || education.length === 0) {
    return null;
  }

  return (
    <AnimatedSection as="section" className="py-24">
      <div className="container-custom">
        <SectionHeader>Education</SectionHeader>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <TimelineItem
              key={`${edu.institution}-${index}`}
              title={edu.degree}
              subtitle={edu.institution}
              period={edu.period}
            />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
