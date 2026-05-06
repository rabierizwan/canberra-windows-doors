import Image from "next/image";
import { Placeholder } from "./placeholder";
import { cn } from "@/lib/utils";

type MediaProps = {
  /** Image src — typically a Cloudinary URL. If omitted, renders a Placeholder. */
  src?: string;
  alt: string;
  aspect?: string;
  tone?: "green" | "ivory";
  /** Caption shown on the placeholder when no src is provided */
  placeholderLabel?: string;
  /** True for above-the-fold images (LCP) */
  priority?: boolean;
  /** Sizes attribute — defaults sensible for full-width hero/sections */
  sizes?: string;
  className?: string;
};

/**
 * Single point of image rendering across the site.
 * Swap a Cloudinary URL into `src` later; layout is locked by `aspect`
 * so swapping won't cause CLS.
 */
export function Media({
  src,
  alt,
  aspect = "aspect-[16/9]",
  tone = "green",
  placeholderLabel,
  priority,
  sizes = "100vw",
  className,
}: MediaProps) {
  if (!src) {
    return (
      <Placeholder
        aspect={aspect}
        tone={tone}
        label={placeholderLabel}
        className={className}
      />
    );
  }

  return (
    <div className={cn("relative w-full overflow-hidden", aspect, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
