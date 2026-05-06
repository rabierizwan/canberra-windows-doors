import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /**
   * "dark"  → for ivory/light backgrounds (header). Falls back to typographic
   *           placeholder until a green-on-ivory SVG is supplied at /brand/logo.svg.
   * "light" → for green/dark backgrounds (footer, dark sections). Uses /brand/logo-white.svg.
   */
  variant?: "dark" | "light";
  /** Show the small wordmark + bronze rule below the mark */
  showWordmark?: boolean;
  /** Rendered width in px; height auto-scales from the SVG aspect ratio */
  width?: number;
  className?: string;
};

const SVG_W = 1668;
const SVG_H = 943;

export function Logo({
  variant = "dark",
  showWordmark = true,
  width = 96,
  className,
}: LogoProps) {
  const height = Math.round((width / SVG_W) * SVG_H);

  return (
    <Link
      href="/"
      aria-label="Canberra Windows & Doors — home"
      className={cn(
        "inline-flex flex-col items-center gap-2 hover:opacity-80 transition-opacity",
        className,
      )}
    >
      {variant === "light" ? (
        <Image
          src="/brand/logo-white.svg"
          alt="CW&D"
          width={width}
          height={height}
          priority
        />
      ) : (
        <span className="font-display text-2xl tracking-tight leading-none text-green">
          CW<span className="italic">&amp;</span>D
        </span>
      )}

      {showWordmark && (
        <>
          <span
            className={cn(
              "block w-12 h-px",
              variant === "light" ? "bg-bronze" : "bg-bronze",
            )}
            aria-hidden
          />
          <span
            className={cn(
              "eyebrow text-[0.6rem]",
              variant === "light" ? "text-bronze" : "text-bronze",
            )}
          >
            Canberra Windows &amp; Doors
          </span>
        </>
      )}
    </Link>
  );
}
