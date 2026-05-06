import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Show the full wordmark below the monogram */
  showWordmark?: boolean;
  className?: string;
};

/**
 * CW&D logo — pure CSS / typographic version.
 * When the owner supplies an SVG file, swap this for an <Image> at /public/brand/logo.svg.
 */
export function Logo({ showWordmark = true, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Canberra Windows & Doors — home"
      className={cn(
        "inline-flex flex-col items-center gap-2 text-ink hover:opacity-80 transition-opacity",
        className,
      )}
    >
      <span className="font-display text-2xl tracking-tight leading-none">
        CW<span className="italic">&amp;</span>D
      </span>
      {showWordmark && (
        <>
          <span className="block w-12 h-px bg-rule" aria-hidden />
          <span className="eyebrow text-[0.6rem]">Canberra Windows &amp; Doors</span>
        </>
      )}
    </Link>
  );
}
