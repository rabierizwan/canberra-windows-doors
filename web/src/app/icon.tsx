import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

/**
 * Browser-tab icon — renders the CW&D monogram (read from /public/brand/)
 * onto an ivory canvas at build time. The source PNG has ~25% transparent
 * padding around the visible mark, which gives the icon its breathing room
 * naturally.
 *
 * Served at /icon, auto-injected by Next.js as <link rel="icon">.
 */

// 128×128 gives crisp display on retina while keeping the rendered PNG tiny.
export const size = { width: 128, height: 128 };
export const contentType = "image/png";

// Brand tokens (kept local — ImageResponse runs in Satori, which has no
// access to Tailwind / CSS variables).
const IVORY = "#E6DDD0";

// Read the monogram once at module load (build time) and inline as data URL.
// Cheaper than a network fetch and avoids any runtime file-system access.
const MONOGRAM_PATH = path.join(process.cwd(), "public", "brand", "monogram.png");
const MONOGRAM_DATA_URL = `data:image/png;base64,${fs
  .readFileSync(MONOGRAM_PATH)
  .toString("base64")}`;

// Source PNG dimensions — 1536 × 1024 (3:2). Scaling to fit the canvas
// width preserves aspect, leaving cream space above and below the mark.
const MONO_W = 128;
const MONO_H = Math.round((MONO_W / 1536) * 1024); // ≈ 85px

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: IVORY,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={MONOGRAM_DATA_URL} width={MONO_W} height={MONO_H} alt="" />
      </div>
    ),
    { ...size },
  );
}
