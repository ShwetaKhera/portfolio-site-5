"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion";

/**
 * SkillBadge component
 * 
 * Displays individual skill with subtle styling
 * Animated when rendered in staggered container
 */

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.li variants={staggerItem}>
      <span className="inline-block px-3 py-1.5 text-sm border border-foreground/10 hover:border-foreground/20 transition-colors">
        {skill}
      </span>
    </motion.li>
  );
}
