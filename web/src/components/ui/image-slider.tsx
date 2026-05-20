"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Placeholder } from "./placeholder";
import { cn } from "@/lib/utils";

type ImageSliderProps = {
  /** Ordered Cloudinary URLs. Index 0 is shown first. */
  images: string[];
  /** Alt text base — used on every slide (slides after the first append " (n)"). */
  alt: string;
  /** Aspect ratio class(es). Same contract as the Media component. */
  aspect?: string;
  /** Placeholder tone when the array is empty. */
  tone?: "green" | "ivory";
  /** Caption shown on the placeholder when images is empty. */
  placeholderLabel?: string;
  /** Prioritise the first slide (above-the-fold heroes). */
  priority?: boolean;
  /** sizes attribute for next/image. */
  sizes?: string;
  /**
   * Auto-advance interval in ms. Set to 0 to disable.
   * Defaults to 7000 (slow, considered, never aggressive).
   * Respects prefers-reduced-motion automatically.
   */
  interval?: number;
  className?: string;
};

/**
 * Editorial image slider for product heroes. Crossfade between slides, slow
 * auto-advance with pause-on-hover/focus, dots in a backdrop capsule at the
 * bottom and bronze hairline arrows that fade in on hover. Accessible via
 * keyboard (tab onto a dot or arrow) and respects reduced-motion.
 *
 * Falls back gracefully:
 *   • 0 images → branded placeholder
 *   • 1 image  → plain Image (no slider chrome)
 *   • 2+       → full slider UI
 */
export function ImageSlider({
  images,
  alt,
  aspect = "aspect-[16/9]",
  tone = "green",
  placeholderLabel,
  priority,
  sizes = "100vw",
  interval = 7000,
  className,
}: ImageSliderProps) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance — single effect, gated by length/pause/interval/motion-pref.
  useEffect(() => {
    if (images.length <= 1) return;
    if (paused) return;
    if (interval <= 0) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval, images.length]);

  // Empty array → placeholder
  if (!images || images.length === 0) {
    return (
      <Placeholder
        aspect={aspect}
        tone={tone}
        label={placeholderLabel}
        className={className}
      />
    );
  }

  // Single image → no slider chrome
  if (images.length === 1) {
    return (
      <div className={cn("relative w-full overflow-hidden", aspect, className)}>
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const total = images.length;
  const goTo = (i: number) => setIdx(((i % total) + total) % total);
  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden group/slider",
        aspect,
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${alt} — ${total} images`}
    >
      {/* Stacked slides, crossfading */}
      {images.map((src, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:duration-0",
            i === idx ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== idx}
        >
          <Image
            src={src}
            alt={i === 0 ? alt : `${alt} (image ${i + 1})`}
            fill
            sizes={sizes}
            priority={priority && i === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Prev / Next — fade in on hover. Hidden from layout-not-shown via opacity. */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 z-10",
          "w-10 h-10 flex items-center justify-center text-base leading-none",
          "bg-ivory/85 backdrop-blur-sm border border-bronze/50 rounded-full text-green",
          "hover:bg-bronze hover:text-ivory hover:border-bronze",
          "transition-all duration-300 ease-out motion-reduce:transition-none",
          "opacity-0 group-hover/slider:opacity-100 focus-visible:opacity-100",
        )}
      >
        <span aria-hidden>←</span>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 z-10",
          "w-10 h-10 flex items-center justify-center text-base leading-none",
          "bg-ivory/85 backdrop-blur-sm border border-bronze/50 rounded-full text-green",
          "hover:bg-bronze hover:text-ivory hover:border-bronze",
          "transition-all duration-300 ease-out motion-reduce:transition-none",
          "opacity-0 group-hover/slider:opacity-100 focus-visible:opacity-100",
        )}
      >
        <span aria-hidden>→</span>
      </button>

      {/* Dots — sit in a subtle dark capsule so they read on any photo */}
      <div
        className={cn(
          "absolute bottom-5 left-1/2 -translate-x-1/2 z-10",
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
          "bg-green/45 backdrop-blur-sm",
        )}
        role="tablist"
        aria-label="Choose image"
      >
        {images.map((_, i) => {
          const active = i === idx;
          return (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={active}
              aria-label={`Show image ${i + 1} of ${total}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 ease-out motion-reduce:transition-none cursor-pointer",
                active
                  ? "w-7 bg-bronze"
                  : "w-1.5 bg-ivory/70 hover:bg-ivory",
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
