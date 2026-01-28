"use client";

/**
 * Privacy-friendly analytics
 * 
 * Uses Vercel Analytics for lightweight, GDPR-compliant tracking
 * - No cookies
 * - No personal data collection
 * - Minimal performance impact
 * 
 * Tracks:
 * - Page views (automatic)
 * - External link clicks
 * - Scroll depth
 */

import { track } from "@vercel/analytics";

export const analytics = {
  /**
   * Track external link click
   */
  trackLinkClick: (name: string, url: string) => {
    track("external_link_click", { name, url });
  },

  /**
   * Track scroll depth milestone
   */
  trackScrollDepth: (depth: number) => {
    track("scroll_depth", { depth });
  },
};

/**
 * Hook to track scroll depth
 * Fires events at 25%, 50%, 75%, and 100% scroll
 */
export function useScrollTracking() {
  if (typeof window === "undefined") return;

  const milestones = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const scrollPercent =
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    milestones.forEach((milestone) => {
      if (scrollPercent >= milestone && !tracked.has(milestone)) {
        analytics.trackScrollDepth(milestone);
        tracked.add(milestone);
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}
