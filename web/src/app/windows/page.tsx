import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Media } from "@/components/ui/media";
import { MaintenancePledge } from "@/components/sections/maintenance-pledge";
import { FinalCta } from "@/components/sections/final-cta";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Windows",
  description:
    "The CW&D windows collection — premium aluminium and thermal-broken windows for Canberra and Sydney. Awning, hung, sliding, casement and HT102.",
};

/** "Find your window" — one entry per window type. */
const decisionGuide = [
  {
    label: "For ventilation",
    title: "Awning",
    body:
      "Top-hung sashes that open in light rain. Available in the 80 standard and 100 thermal-broken series.",
    href: "/services/awning-window",
  },
  {
    label: "For light & view",
    title: "Sliding",
    body:
      "Maximum aperture, minimum interruption — large glass panels that glide aside.",
    href: "/services/sliding-windows-canberra",
  },
  {
    label: "For airflow & reach",
    title: "Casement",
    body:
      "Side-hinged sashes that swing wide for full ventilation and an unobstructed outlook.",
    href: "/services/casement-window",
  },
  {
    label: "For classic homes",
    title: "Hung",
    body:
      "Vertical-sliding sashes — a timeless form with modern sealing and hardware.",
    href: "/services/hung-windows",
  },
];

export default function WindowsIndexPage() {
  const windows = getProductsByCategory("windows");

  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 border-b border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">The Collection</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-green leading-[1.05] max-w-4xl">
            The windows collection.
          </h1>
          <p className="mt-8 text-lg text-green/70 max-w-2xl leading-relaxed">
            Eight window types — from classical hung sashes to thermally
            broken HT102 frames built for Canberra winters and Sydney
            summers. Premium European supply, fair Australian pricing.
          </p>
        </Container>
      </section>

      {/* DECISION GUIDE */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Find Your Window</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-green max-w-2xl mb-16">
            Choose by what you need.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {decisionGuide.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block border-t border-bronze pt-6 hover:border-green transition-colors"
              >
                <span className="eyebrow eyebrow-muted">{item.label}</span>
                <h3 className="mt-4 font-display text-3xl text-green group-hover:text-bronze transition-colors">
                  {item.title}
                </h3>
                <p className="mt-4 text-green/70 leading-relaxed">
                  {item.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 eyebrow text-green group-hover:text-bronze transition-colors">
                  Explore <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* THE FULL COLLECTION */}
      <section className="py-24 md:py-32 bg-ivory-warm border-y border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Every Window We Offer</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-green mb-16 max-w-2xl">
            The full range.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {windows.map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="group block"
              >
                <Media
                  src={p.image}
                  alt={p.imageAlt ?? p.heading}
                  aspect="aspect-[4/5]"
                  tone="green"
                  placeholderLabel={`${p.heading} · 4:5`}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="font-display text-xl md:text-2xl text-green group-hover:text-bronze transition-colors">
                    {p.heading}
                  </h3>
                </div>
                <span className="eyebrow text-green/40 mt-1 block">
                  {p.spec?.openingStyle ?? p.spec?.model ?? ""}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 eyebrow text-green group-hover:text-bronze transition-colors">
                  Explore <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SPECIALIST PAGES — thermal-broken series + alfresco service */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Also From CW&amp;D</span>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <Link
              href="/services/thermal-break-window"
              className="group block border-t border-bronze pt-6 hover:border-green transition-colors"
            >
              <span className="eyebrow eyebrow-muted">The 100 Series</span>
              <h3 className="mt-4 font-display text-3xl text-green group-hover:text-bronze transition-colors">
                Thermal-Broken Windows
              </h3>
              <p className="mt-4 text-green/70 leading-relaxed">
                Why a thermal break matters — energy efficiency, condensation
                control and NCC 7-star compliance, explained.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 eyebrow text-green group-hover:text-bronze transition-colors">
                Learn more <span aria-hidden>→</span>
              </span>
            </Link>
            <Link
              href="/services/alfresco-window"
              className="group block border-t border-bronze pt-6 hover:border-green transition-colors"
            >
              <span className="eyebrow eyebrow-muted">Glazing Service</span>
              <h3 className="mt-4 font-display text-3xl text-green group-hover:text-bronze transition-colors">
                Alfresco &amp; Sunrooms
              </h3>
              <p className="mt-4 text-green/70 leading-relaxed">
                Convert open patios and decks into weather-resistant,
                year-round alfresco and sunroom spaces.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 eyebrow text-green group-hover:text-bronze transition-colors">
                Explore the service <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* MAINTENANCE PLEDGE */}
      <MaintenancePledge />

      {/* FINAL CTA */}
      <FinalCta />
    </>
  );
}
