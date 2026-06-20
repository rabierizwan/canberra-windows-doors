import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Media } from "@/components/ui/media";
import { MaintenancePledge } from "@/components/sections/maintenance-pledge";
import { FinalCta } from "@/components/sections/final-cta";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Doors",
  description:
    "Four ways to open a wall. Premium aluminium doors supplied across Canberra and Sydney, with installation and aftercare from the same team.",
};

/** Decision guide — one card per door category. */
const decisionGuide = [
  {
    label: "For the everyday opening",
    title: "Sliding",
    body:
      "Glide one panel past another and let the room breathe. Smooth on the track, low maintenance, generous glass.",
    href: "/services/sliding-door",
  },
  {
    label: "For the wide aperture",
    title: "Stacker",
    body:
      "Three or four panels that stack neatly behind one another, clearing the opening when you want it gone.",
    href: "/services/stacker-door",
  },
  {
    label: "For opening it all up",
    title: "Bi-folding",
    body:
      "A concertina across the full opening. When it's folded back, the indoors and outdoors are one room.",
    href: "/services/folding-door",
  },
  {
    label: "For a classic entry",
    title: "Casement",
    body:
      "Side-hinged on robust hardware. The traditional swing in a full-glazed frame — single or double-leaf.",
    href: "/services/casement-door",
  },
];

/** Longer-form descriptions used in "The full range" cards. */
const fullRangeBlurb: Record<string, string> = {
  "sliding-door":
    "Our most asked-for door. Generous glass, easy travel, weather-tight at the meeting stile.",
  "stacker-door":
    "Three or four panels stacked behind one another. Built for wide openings without losing the line of the wall.",
  "folding-door":
    "Folds away in a stack so the opening reads as a single, uninterrupted line — outdoor room when you want it.",
  "casement-door":
    "Hinged at the side, weighted to swing true. A formal entry that handles weather with the same hardware as our windows.",
};

export default function DoorsIndexPage() {
  const doors = getProductsByCategory("doors");

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 border-b border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">The collection</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-green leading-[1.05] max-w-4xl">
            The doors.
          </h1>
          <p className="mt-8 text-lg text-green/75 max-w-2xl leading-relaxed">
            Four ways to open a wall — each one engineered the same way:
            considered profiles, proper hardware, and the option of a thermally
            broken frame whenever the room asks for it.
          </p>
        </Container>
      </section>

      {/* ── DECISION GUIDE ── */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Find your door</span>
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

      {/* ── THE FULL RANGE ── */}
      <section className="py-24 md:py-32 bg-ivory-warm border-y border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Every door we offer</span>
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
                <p className="mt-3 text-green/70 leading-relaxed line-clamp-3">
                  {fullRangeBlurb[p.slug] ?? p.intro?.[0]}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 eyebrow text-green group-hover:text-bronze transition-colors">
                  Explore {p.heading.toLowerCase()}{" "}
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── AFTERCARE PLEDGE ── */}
      <MaintenancePledge />

      {/* ── CLOSING CTA ── */}
      <FinalCta />
    </>
  );
}
