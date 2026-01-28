"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion";

/**
 * TimelineItem component
 * 
 * Displays a single experience or education entry
 * Uses staggered animation when rendered in a list
 */

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  highlights?: string[];
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  location,
  highlights,
}: TimelineItemProps) {
  return (
    <motion.article variants={staggerItem} className="group">
      <div className="flex flex-col gap-1 mb-3">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <time className="text-sm text-muted font-mono tabular-nums shrink-0">{period}</time>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
          <p className="text-muted">{subtitle}</p>
          {location && (
            <>
              <span className="hidden md:inline text-muted">·</span>
              <p className="text-sm text-muted">{location}</p>
            </>
          )}
        </div>
      </div>

      {highlights && highlights.length > 0 && (
        <ul className="space-y-2 ml-0">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0">
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
