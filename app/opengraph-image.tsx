import { ImageResponse } from "next/og";
import { getResumeData } from "@/lib/content";

/**
 * OpenGraph image generator
 * 
 * Programmatically generates social preview image
 * Displays professional, minimal card with name and title
 */

export const runtime = "edge";
export const alt = "Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const { basics } = getResumeData();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 500,
              color: "#171717",
              letterSpacing: "-0.02em",
            }}
          >
            {basics.name}
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#737373",
            }}
          >
            {basics.title}
          </div>
        </div>

        {/* Minimal decorative element */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            width: 60,
            height: 2,
            backgroundColor: "#171717",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
