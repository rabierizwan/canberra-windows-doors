import { cn } from "@/lib/utils";

type PlaceholderProps = {
  /** Aspect-ratio class, e.g. "aspect-[16/9]", "aspect-[4/5]", "aspect-square" */
  aspect?: string;
  /** Tone — "ivory" for dark sections, "green" for light sections */
  tone?: "green" | "ivory";
  /** Optional label shown bottom-left */
  label?: string;
  className?: string;
};

/**
 * Branded image placeholder. Used until Cloudinary URLs are wired in.
 * Looks intentional, not "image not found".
 */
export function Placeholder({
  aspect = "aspect-[16/9]",
  tone = "green",
  label,
  className,
}: PlaceholderProps) {
  const isGreen = tone === "green";
  return (
    <div
      role="img"
      aria-label={label ?? "Image placeholder"}
      className={cn(
        "relative w-full overflow-hidden",
        aspect,
        isGreen ? "bg-green/5" : "bg-ivory/10",
        className,
      )}
    >
      {/* subtle bronze diagonal corner mark */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line
          x1="0"
          y1="100"
          x2="100"
          y2="0"
          stroke="currentColor"
          strokeWidth="0.15"
          className={isGreen ? "text-bronze/40" : "text-bronze/30"}
        />
      </svg>

      {/* corner mark */}
      <div
        className={cn(
          "absolute top-6 left-6 h-px w-8",
          isGreen ? "bg-bronze/60" : "bg-bronze",
        )}
      />

      {/* caption */}
      {label && (
        <span
          className={cn(
            "absolute bottom-6 left-6 eyebrow",
            isGreen ? "text-green/60" : "text-ivory/70",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
