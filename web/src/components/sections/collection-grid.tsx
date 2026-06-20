import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Media } from "@/components/ui/media";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

type CollectionGridProps = {
  eyebrow: string;
  heading: string;
  /** Optional body paragraph rendered below the heading */
  body?: string;
  products: Product[];
  /** "ivory" → ivory bg, dark text. "green" → green bg, light text. */
  tone?: "ivory" | "green";
  /** Number of columns at the largest breakpoint */
  cols?: 2 | 3 | 4;
  /** href for the "View all" link */
  viewAllHref?: string;
  /** Label for the view-all link, e.g. "View all doors" */
  viewAllLabel?: string;
  /** id for in-page anchor links */
  id?: string;
};

/**
 * Sections 06 + 07 — collection of product cards. Photo-first design.
 * Re-used for both Doors (ivory) and Windows (green).
 */
export function CollectionGrid({
  eyebrow,
  heading,
  body,
  products,
  tone = "ivory",
  cols = 4,
  viewAllHref,
  viewAllLabel = "View all",
  id,
}: CollectionGridProps) {
  const isGreen = tone === "green";
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[cols];

  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32",
        isGreen ? "bg-green text-ivory" : "bg-ivory text-green",
      )}
    >
      <Container>
        <div className="flex flex-col gap-6 mb-12 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className={cn("block w-8 h-px", isGreen ? "bg-bronze" : "bg-bronze")} />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h2
              className={cn(
                "mt-4 font-display text-5xl md:text-6xl",
                isGreen ? "text-ivory" : "text-green",
              )}
            >
              {heading}
            </h2>
            {body && (
              <p
                className={cn(
                  "mt-6 text-base md:text-lg leading-relaxed",
                  isGreen ? "text-ivory/80" : "text-green/75",
                )}
              >
                {body}
              </p>
            )}
          </div>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className={cn(
                "hidden sm:inline-flex eyebrow transition-colors items-center gap-2 shrink-0",
                isGreen ? "text-ivory hover:text-bronze-soft" : "text-green hover:text-bronze",
              )}
            >
              {viewAllLabel} <span aria-hidden>→</span>
            </Link>
          )}
        </div>

        <div className={cn("grid gap-x-6 gap-y-10 grid-cols-2", colClass)}>
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/services/${p.slug}`}
              className="group block"
            >
              <div className="overflow-hidden">
                <Media
                  src={p.image}
                  alt={p.imageAlt ?? p.heading}
                  aspect="aspect-[4/5]"
                  tone={isGreen ? "ivory" : "green"}
                  placeholderLabel={`${p.heading} · 4:5`}
                  sizes={cols === 4 ? "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 50vw" : "50vw"}
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3
                  className={cn(
                    "font-display text-xl md:text-2xl group-hover:text-bronze transition-colors",
                    isGreen ? "text-ivory" : "text-green",
                  )}
                >
                  {p.heading}
                </h3>
                <span
                  className={cn(
                    "eyebrow",
                    isGreen ? "text-ivory/50" : "text-green/40",
                  )}
                >
                  {p.spec?.openingStyle ?? p.spec?.model ?? ""}
                </span>
              </div>
              <div
                className={cn(
                  "mt-3 h-px transition-all duration-500 origin-left",
                  isGreen ? "bg-bronze/40 group-hover:bg-bronze" : "bg-rule group-hover:bg-bronze",
                  "scale-x-0 group-hover:scale-x-100",
                )}
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
