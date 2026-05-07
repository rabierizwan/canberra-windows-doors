import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /**
   * "dark"  → for ivory/light backgrounds (header). Monogram rendered as-is.
   * "light" → for green/dark backgrounds (footer). Monogram is inverted to ivory via CSS.
   */
  variant?: "dark" | "light";
  /** Show the small wordmark + bronze rule below the mark */
  showWordmark?: boolean;
  /** Rendered width in px; height auto-scales from the image aspect ratio */
  width?: number;
  className?: string;
};

// Source PNG dimensions (3:2 aspect — 1536×1024)
const SRC_W = 1536;
const SRC_H = 1024;

export function Logo({
  variant = "dark",
  showWordmark = true,
  width = 88,
  className,
}: LogoProps) {
  const height = Math.round((width / SRC_W) * SRC_H);

  return (
    <Link
      href="/"
      aria-label="Canberra Windows & Doors — home"
      className={cn(
        "inline-flex flex-col items-center gap-2 hover:opacity-80 transition-opacity",
        className,
      )}
    >
      <Image
        src="/brand/monogram.png"
        alt="CW&D"
        width={width}
        height={height}
        priority
        className={cn(
          "w-auto select-none",
          // Footer / dark backgrounds: invert dark monogram → ivory tone.
          // brightness-0 makes it solid black, then invert flips to white,
          // which reads as ivory against the deep-green footer.
          variant === "light" && "brightness-0 invert opacity-90",
        )}
        style={{ height: `${height}px` }}
      />

      {showWordmark && (
        <>
          <span className="block w-12 h-px bg-bronze" aria-hidden />
          <span className="eyebrow text-[0.6rem] text-bronze">
            Canberra Windows &amp; Doors
          </span>
        </>
      )}
    </Link>
  );
}
