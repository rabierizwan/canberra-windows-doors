import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/data/products";
import { site } from "@/lib/site";

export default function HomePage() {
  const doors = PRODUCTS.filter((p) => p.category === "doors");
  const windows = PRODUCTS.filter((p) => p.category === "windows");

  return (
    <>
      {/* HERO */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-40">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">Established · Canberra · ACT</span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-ink">
              Windows &amp; doors that define{" "}
              <em className="text-bronze not-italic">Canberra&apos;s elegance</em>.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink/70 leading-relaxed">
              We don&apos;t just install windows and doors — we frame your world
              so the beauty of Canberra shines through. Premium aluminium,
              engineered for the ACT climate.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/request-a-quote" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="/about-us" variant="secondary" size="lg">
                About Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div className="rule mx-auto max-w-[1200px]" />

      {/* INTRODUCTION */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="eyebrow">About</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink leading-tight">
                Built strong, designed with impact.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-ink/75 text-lg leading-relaxed">
              <p>
                Canberra Windows &amp; Doors is a trusted supplier of high-quality
                windows and doors. With over a decade of experience, we work
                with homeowners and businesses across the ACT who appreciate
                craftsmanship, durability and well-considered design.
              </p>
              <p>
                Our products enhance each space with light, comfort and security
                — delivered with care and precision.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* DOORS */}
      <section className="py-24 bg-cream-50 border-y border-rule/60">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="eyebrow">Precision-Made</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink">Doors</h2>
            </div>
            <Link
              href="/services/sliding-door"
              className="eyebrow text-ink hover:text-bronze transition-colors hidden sm:block"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {doors.map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="group block bg-cream border border-rule/60 p-8 hover:border-ink transition-colors"
              >
                <span className="eyebrow text-muted">
                  {p.spec?.openingStyle ?? "Door"}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink group-hover:text-bronze transition-colors">
                  {p.heading}
                </h3>
                <span className="mt-6 inline-block text-xs uppercase tracking-[0.18em] text-ink/60 group-hover:text-ink">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* WINDOWS */}
      <section className="py-24">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="eyebrow">Premium Solution</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink">Windows</h2>
            </div>
            <Link
              href="/services/ht102"
              className="eyebrow text-ink hover:text-bronze transition-colors hidden sm:block"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {windows.map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="group block bg-cream-50 border border-rule/60 p-8 hover:border-ink transition-colors"
              >
                <span className="eyebrow text-muted">
                  {p.spec?.model ?? p.category}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink group-hover:text-bronze transition-colors">
                  {p.heading}
                </h3>
                <span className="mt-6 inline-block text-xs uppercase tracking-[0.18em] text-ink/60 group-hover:text-ink">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA BAND */}
      <section className="bg-ink text-cream py-24">
        <Container className="text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Schedule a free consultation
          </h2>
          <p className="mt-4 text-cream/70 max-w-xl mx-auto">
            Tell us about your project. We&apos;ll help you choose the right
            product, finish and configuration for your space.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Button
              href="/request-a-quote"
              variant="primary"
              size="lg"
              className="bg-cream text-ink hover:bg-cream-50"
            >
              Request a Quote
            </Button>
            <Button
              href={site.contact.phonePrimaryHref}
              variant="ghost"
              size="lg"
              className="text-cream hover:text-bronze"
            >
              {site.contact.phonePrimary}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
