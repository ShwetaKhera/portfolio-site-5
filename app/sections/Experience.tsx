"use client";

import { motion } from "framer-motion";
import { getResumeData, formatDateRange } from "@/lib/content";
import { staggerContainer } from "@/lib/motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import TimelineItem from "@/components/TimelineItem";

/**
 * Experience section
 * 
 * Displays work history in reverse chronological order
 * Uses staggered animation for timeline items
 */

export default function Experience() {
  const { experience } = getResumeData();

  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <AnimatedSection as="section" className="py-24">
      <div className="container-custom">
        <SectionHeader>Experience</SectionHeader>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experience.map((job, index) => (
            <TimelineItem
              key={`${job.company}-${index}`}
              title={job.role}
              subtitle={job.company}
              period={formatDateRange(job.startDate, job.endDate)}
              location={job.location}
              highlights={job.highlights}
            />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
