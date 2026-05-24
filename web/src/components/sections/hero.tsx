import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { site } from "@/lib/site";

/**
 * Section 02 — full-bleed photographic hero with editorial type overlay.
 *
 * All text reads in ivory (not bronze) because bronze is a warm earth tone
 * that loses contrast against the cream/warm tones common in interior
 * photography. Bronze remains as a brand-signature accent on the small
 * hairline rule next to the eyebrow.
 *
 * The two-layer gradient docks darker tones to the right side where the
 * text sits, so the photo's left/centre composition (windows, architecture)
 * stays crisp.
 */
export function Hero({ image }: { image?: string }) {
  return (
    <section className="relative">
      {/* Background image / placeholder */}
      <div className="absolute inset-0">
        <Media
          src={image}
          alt="Premium aluminium windows and doors in a Canberra home"
          aspect="aspect-auto h-[88vh] min-h-[640px] max-h-[920px]"
          tone="green"
          placeholderLabel="Hero photograph · 16:9"
          priority
          sizes="100vw"
          // Crop priority: keep the LEFT side of the photo visible on mobile
          // (where the viewport is narrow and the wide hero gets cropped),
          // recentre on desktop where there's room for the full composition.
          className="h-[88vh] min-h-[640px] max-h-[920px] [&_img]:object-[15%_center] md:[&_img]:object-center"
        />
        {/* Right-side darkening for text legibility + soft top/bottom edges */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              // Horizontal: dim the right side where the text sits, keep the left clean
              "linear-gradient(to right, rgba(20,31,24,0) 30%, rgba(20,31,24,0.35) 55%, rgba(20,31,24,0.75) 100%)",
              // Vertical: gentle top/bottom vignette
              "linear-gradient(to bottom, rgba(20,31,24,0.2) 0%, rgba(20,31,24,0) 25%, rgba(20,31,24,0) 70%, rgba(20,31,24,0.45) 100%)",
            ].join(", "),
          }}
        />
      </div>

      {/* Content — docked bottom-right */}
      <Container
        as="div"
        className="relative h-[88vh] min-h-[640px] max-h-[920px] flex flex-col"
      >
        <div className="flex-1 flex items-end justify-end pb-16 md:pb-24">
          <div className="max-w-md text-ivory">
            {/* Eyebrow — ivory for legibility, bronze rule as the brand accent */}
            <div className="flex items-center gap-3">
              <span
                className="block w-8 h-px bg-bronze-soft"
                aria-hidden
              />
              <span className="eyebrow text-ivory">{site.hero.eyebrow}</span>
            </div>

            <h1
              className="mt-5 font-display leading-[1.05] text-ivory"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
            >
              {site.hero.headline}
            </h1>

            <p className="mt-6 text-sm md:text-base leading-relaxed text-ivory/90">
              {site.hero.sub}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href="/request-a-quote" variant="primary-light" size="md">
                Request a Quote
              </Button>
              <a
                href="#collection"
                className="eyebrow text-ivory hover:text-bronze-soft transition-colors"
              >
                View the collection →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
