import { getResumeData } from "@/lib/content";
import AnimatedSection from "@/components/AnimatedSection";

/**
 * Hero section - Editorial positioning
 * 
 * Establishes positioning through confident headline
 * No contact details - purely about impact and craft
 */

export default function Hero() {
  const { basics } = getResumeData();

  return (
    <AnimatedSection as="section" className="pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="container-custom">
        <div className="max-w-4xl">
          {/* Name - understated */}
          <p className="text-sm uppercase tracking-wider text-muted mb-8 font-mono">
            {basics.name}
          </p>
          
          {/* Headline - hero statement */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-balance">
            {basics.headline}
          </h1>
          
          {/* Accent mark - subtle visual element */}
          <div className="w-16 h-1 bg-accent mb-8"></div>
          
          {/* Title - contextual */}
          <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl">
            {basics.title} • {basics.location}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

