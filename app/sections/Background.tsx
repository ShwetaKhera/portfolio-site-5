"use client";

import { motion } from "framer-motion";
import { getResumeData, formatDateRange } from "@/lib/content";
import { fadeInUp } from "@/lib/motion";
import AnimatedSection from "@/components/AnimatedSection";

/**
 * Background section
 * 
 * Compact timeline of all experience + education
 * De-emphasized - provides credibility without dominating
 * No bullets, just clean timeline
 */

export default function Background() {
  const { experience, education } = getResumeData();

  return (
    <AnimatedSection as="section" className="py-24 md:py-32">
      <div className="container-custom">
        {/* Two-column asymmetric layout */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left column - Header */}
          <div className="md:col-span-4">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight sticky top-8">
              Background
            </h2>
          </div>

          {/* Right column - Timeline */}
          <div className="md:col-span-8 space-y-16">
            {/* Experience timeline */}
            {experience && experience.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted mb-8 font-mono">
                  Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <motion.div
                      key={`${job.company}-${index}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 pb-6 border-b border-foreground/5 last:border-0"
                    >
                      <time className="text-sm font-mono text-muted shrink-0 md:w-32">
                        {formatDateRange(job.startDate, job.endDate)}
                      </time>
                      <div className="flex-1">
                        <p className="font-medium">
                          {job.role}
                        </p>
                        <p className="text-muted text-sm">
                          {job.company}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {education && education.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted mb-8 font-mono">
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={`${edu.institution}-${index}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6"
                    >
                      <time className="text-sm font-mono text-muted shrink-0 md:w-32">
                        {edu.period}
                      </time>
                      <div className="flex-1">
                        <p className="font-medium">
                          {edu.degree}
                        </p>
                        <p className="text-muted text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
