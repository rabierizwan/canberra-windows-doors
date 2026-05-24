import { ImageResponse } from "next/og";

/**
 * Programmatic browser-tab icon — generated at build time via ImageResponse.
 *
 * Renders the "CW&D" monogram on the brand's Deep Green background. At true
 * favicon size (16-32px) the "&D" portion becomes hard to read, so we crop
 * to "CW" — the recognisable start of the mark, sized for legibility.
 *
 * Next.js auto-injects this at <link rel="icon"> and serves it at /icon.
 * Replace with a static icon.png/icon.svg in /app to swap to a real export.
 */

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Brand tokens (kept local — ImageResponse runs in a separate Edge context
// where Tailwind / CSS variables aren't available).
const GREEN = "#141F18";
const IVORY = "#E6DDD0";

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
          background: GREEN,
          color: IVORY,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 600,
          fontSize: 28,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        CW&D
      </div>
    ),
    { ...size },
  );
}
