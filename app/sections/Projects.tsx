"use client";

import { motion } from "framer-motion";
import { getResumeData } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

/**
 * Projects section
 * 
 * Showcases selected personal and professional projects
 * Supports project images, GitHub links, and live demo links
 * Uses visible flag to control which projects appear
 * Featured projects appear first
 */

export default function Projects() {
  const resume = getResumeData();
  
  if (!resume.projects || resume.projects.length === 0) {
    return null;
  }

  // Filter to only visible projects
  const visibleProjects = resume.projects.filter((project) => project.visible !== false);
  
  if (visibleProjects.length === 0) {
    return null;
  }

  // Sort: featured first, then by order in JSON
  const sortedProjects = [...visibleProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <AnimatedSection as="section" className="py-24 md:py-32">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Personal and professional projects that showcase my technical skills and problem-solving approach
          </p>
        </div>

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 md:gap-10"
        >
          {sortedProjects.map((project, index) => (
            <motion.article
              key={`${project.name}-${index}`}
              variants={staggerItem}
              className="group border border-foreground/5 hover:border-accent/20 transition-all overflow-hidden flex flex-col"
            >
              {/* Project image - if provided */}
              {project.image && (
                <div className="relative w-full aspect-video bg-foreground/5 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-accent text-background text-xs uppercase tracking-wider font-mono px-3 py-1.5">
                      Featured
                    </div>
                  )}
                </div>
              )}

              {/* Project content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Project header */}
                <div className="mb-4">
                  {project.featured && !project.image && (
                    <span className="inline-block text-xs uppercase tracking-wider text-accent font-mono mb-2">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl md:text-2xl font-medium mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  {project.date && (
                    <p className="text-sm text-muted font-mono">{project.date}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-mono text-muted/70 px-2 py-1 border border-foreground/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links - pushed to bottom */}
                {(project.link || project.github) && (
                  <div className="flex gap-4 text-sm mt-auto pt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-0.5"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-0.5"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </a>
                    )}
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

