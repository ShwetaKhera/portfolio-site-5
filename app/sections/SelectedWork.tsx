"use client";

import { motion } from "framer-motion";
import { getResumeData, formatDateRange } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import AnimatedSection from "@/components/AnimatedSection";

/**
 * SelectedWork section
 * 
 * Showcases 3-4 high-impact featured experiences as case studies
 * Focuses on problem → solution → impact narrative
 * Not a resume - this is proof of craft and scale
 */

export default function SelectedWork() {
  const { experience } = getResumeData();
  
  // Get featured experiences
  const featured = experience.filter((exp) => exp.featured);

  if (!featured || featured.length === 0) {
    return null;
  }

  return (
    <AnimatedSection as="section" className="py-24 md:py-32">
      <div className="container-custom">
        {/* Section header - editorial style */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            High-impact projects that demonstrate scale, craft, and leadership
          </p>
        </div>

        {/* Featured work items */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20 md:space-y-32"
        >
          {featured.map((work, index) => (
            <motion.article
              key={`${work.company}-${index}`}
              variants={staggerItem}
              className="grid md:grid-cols-12 gap-8 md:gap-12 group"
            >
              {/* Left column - Context */}
              <div className="md:col-span-5 space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-2 group-hover:text-accent transition-colors">
                    {work.company}
                  </h3>
                  <p className="text-muted font-mono text-sm">
                    {work.role} • {formatDateRange(work.startDate, work.endDate)}
                  </p>
                </div>

                {work.problem && (
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted mb-2 font-mono">
                      Challenge
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      {work.problem}
                    </p>
                  </div>
                )}
              </div>

              {/* Right column - Impact */}
              <div className="md:col-span-7 space-y-6">
                {work.solution && (
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted mb-2 font-mono">
                      Approach
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      {work.solution}
                    </p>
                  </div>
                )}

                {work.impact && (
                  <div className="border-l-2 border-accent pl-6">
                    <p className="text-sm uppercase tracking-wider text-accent mb-2 font-mono">
                      Impact
                    </p>
                    <p className="text-lg font-medium leading-relaxed">
                      {work.impact}
                    </p>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
