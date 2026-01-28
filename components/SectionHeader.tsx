/**
 * SectionHeader component
 * 
 * Consistent header styling across all sections
 * Uses semantic HTML (h2) for accessibility
 */

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ children, className = "" }: SectionHeaderProps) {
  return (
    <h2 className={`text-2xl md:text-3xl font-medium tracking-tight mb-12 ${className}`}>
      {children}
    </h2>
  );
}
