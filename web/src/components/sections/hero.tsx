import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { site } from "@/lib/site";

/**
 * Section 02 — full-bleed photographic hero with editorial type overlay.
 * Image swaps in via Cloudinary later; layout is locked by the aspect ratio.
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
          className="h-[88vh] min-h-[640px] max-h-[920px]"
        />
        {/* Subtle Deep Green vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,31,24,0.55) 0%, rgba(20,31,24,0.15) 35%, rgba(20,31,24,0.05) 60%, rgba(20,31,24,0.65) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <Container as="div" className="relative h-[88vh] min-h-[640px] max-h-[920px] flex flex-col">
        <div className="flex-1 flex items-end pb-20 md:pb-28">
          <div className="max-w-4xl text-ivory">
            <span className="eyebrow text-bronze-soft">{site.hero.eyebrow}</span>
            <h1 className="mt-6 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.98] text-ivory">
              {site.hero.headline}
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ivory/80">
              {site.hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/request-a-quote" variant="primary-light" size="lg">
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
