"use client";

import { useEffect } from "react";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";
import Projects from "./sections/Projects";
import Capabilities from "./sections/Capabilities";
import Background from "./sections/Background";
import Contact from "./sections/Contact";
import { useScrollTracking } from "@/lib/analytics";

/**
 * Main portfolio page
 * 
 * Editorial composition focused on narrative and impact
 * Flow: positioning → proof → projects → capabilities → credibility → action
 */

export default function Home() {
  // Initialize scroll depth tracking
  useEffect(() => {
    const cleanup = useScrollTracking();
    return cleanup;
  }, []);

  return (
    <main>
      <Hero />
      <SelectedWork />
      <Projects />
      <Capabilities />
      <Background />
      <Contact />
    </main>
  );
}

