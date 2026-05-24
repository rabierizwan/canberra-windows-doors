import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Media } from "@/components/ui/media";
import { Button } from "@/components/ui/button";
import { MaintenancePledge } from "@/components/sections/maintenance-pledge";
import { FinalCta } from "@/components/sections/final-cta";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Doors",
  description:
    "The CW&D doors collection — premium aluminium and glass doors for Canberra and Sydney homes. Sliding, folding and casement options.",
};

/** Four "find your door" categories — matches the four door products. */
const decisionGuide = [
  {
    label: "For everyday",
    title: "Sliding",
    body:
      "One or two glazed panels on rollers — the everyday opening for connecting indoor rooms to outdoor spaces.",
    href: "/services/sliding-door",
  },
  {
    label: "For wide openings",
    title: "Stacker",
    body:
      "Three or four panels that stack behind one another — clean sightlines across very wide apertures.",
    href: "/services/stacker-door",
  },
  {
    label: "For entertaining",
    title: "Bi-folding",
    body:
      "Multi-panel concertina that clears the full aperture — for spaces that open right up when you want them to.",
    href: "/services/folding-door",
  },
  {
    label: "For traditional entries",
    title: "Casement",
    body:
      "Side-hinged glazed door — the classic swing motion paired with a full glass panel. Single or double-leaf.",
    href: "/services/casement-door",
  },
];

export default function DoorsIndexPage() {
  const doors = getProductsByCategory("doors");

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
            The doors collection.
          </h1>
          <p className="mt-8 text-lg text-green/70 max-w-2xl leading-relaxed">
            Considered, robust, made for the way you live. Premium aluminium
            and glass doors — supplied across Canberra and Sydney, installed
            with the same hands that maintain them.
          </p>
        </Container>
      </section>

      {/* DECISION GUIDE */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Find Your Door</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-green max-w-2xl mb-16">
            Choose by how you live.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
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
            <span className="eyebrow">Every Door We Offer</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-green mb-16 max-w-2xl">
            The full range.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {doors.map((p) => (
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
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="mt-6 flex items-baseline justify-between">
                  <h3 className="font-display text-2xl text-green group-hover:text-bronze transition-colors">
                    {p.heading}
                  </h3>
                  <span className="eyebrow text-green/40">
                    {p.spec?.openingStyle ?? p.spec?.model ?? ""}
                  </span>
                </div>
                {p.intro?.[0] && (
                  <p className="mt-3 text-green/70 leading-relaxed line-clamp-3">
                    {p.intro[0]}
                  </p>
                )}
                <span className="mt-5 inline-flex items-center gap-2 eyebrow text-green group-hover:text-bronze transition-colors">
                  Explore {p.heading} <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
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
