"use client";

import { motion } from "framer-motion";
import { getResumeData } from "@/lib/content";
import { staggerContainer } from "@/lib/motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import SkillBadge from "@/components/SkillBadge";

/**
 * Skills section
 * 
 * Displays technical skills grouped by category
 * Uses staggered animation for skill badges
 */

export default function Skills() {
  const { skills } = getResumeData();

  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <AnimatedSection as="section" className="py-24">
      <div className="container-custom">
        <SectionHeader>Skills</SectionHeader>
        
        <div className="space-y-10">
          {skills.map((skillGroup, groupIndex) => (
            <div key={`${skillGroup.category}-${groupIndex}`}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted mb-4">
                {skillGroup.category}
              </h3>
              
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-2"
              >
                {skillGroup.items.map((skill, skillIndex) => (
                  <SkillBadge key={`${skill}-${skillIndex}`} skill={skill} />
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
