"use client";

import { getResumeData } from "@/lib/content";
import { analytics } from "@/lib/analytics";
import AnimatedSection from "@/components/AnimatedSection";

/**
 * Contact section
 * 
 * Clear call-to-action with effortless ways to connect
 * Prominent, accessible links
 * No clutter, just action
 */

export default function Contact() {
  const { basics } = getResumeData();

  const handleLinkClick = (label: string, url: string) => {
    analytics.trackLinkClick(label, url);
  };

  return (
    <AnimatedSection as="section" className="py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl">
          {/* CTA */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8 text-balance">
            Let's build something exceptional together
          </h2>

          {/* Links - large, accessible */}
          <div className="space-y-4 mb-12">
            <a
              href={`mailto:${basics.email}`}
              onClick={() => handleLinkClick("Email", `mailto:${basics.email}`)}
              className="group block"
            >
              <span className="text-sm uppercase tracking-wider text-muted font-mono block mb-1">
                Email
              </span>
              <span className="text-2xl md:text-3xl font-medium group-hover:text-accent transition-colors">
                {basics.email}
              </span>
            </a>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <a
                href={basics.github}
                onClick={() => handleLinkClick("GitHub", basics.github)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 border border-foreground/10 hover:border-accent transition-colors"
              >
                <span className="text-sm uppercase tracking-wider text-muted font-mono block mb-2">
                  GitHub
                </span>
                <span className="text-lg font-medium group-hover:text-accent transition-colors block truncate">
                  {basics.github.replace("https://", "")}
                </span>
              </a>

              <a
                href={basics.linkedin}
                onClick={() => handleLinkClick("LinkedIn", basics.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 border border-foreground/10 hover:border-accent transition-colors"
              >
                <span className="text-sm uppercase tracking-wider text-muted font-mono block mb-2">
                  LinkedIn
                </span>
                <span className="text-lg font-medium group-hover:text-accent transition-colors block truncate">
                  {basics.linkedin.replace("https://", "")}
                </span>
              </a>
            </div>
          </div>

          {/* Location */}
          <p className="text-muted">
            Currently based in {basics.location}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

