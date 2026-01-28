import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { getResumeData } from "@/lib/content";
import "@/styles/globals.css";

/**
 * Font optimization
 * Using next/font for automatic font optimization and preloading
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/**
 * Metadata configuration
 * Includes OpenGraph and Twitter Card metadata for social sharing
 */
export async function generateMetadata(): Promise<Metadata> {
  const { basics } = getResumeData();

  return {
    title: `${basics.name} – ${basics.title}`,
    description: basics.summary,
    keywords: ["frontend engineer", "web developer", "react", "typescript", "portfolio"],
    authors: [{ name: basics.name }],
    creator: basics.name,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      title: `${basics.name} – ${basics.title}`,
      description: basics.summary,
      siteName: basics.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${basics.name} – ${basics.title}`,
      description: basics.summary,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
