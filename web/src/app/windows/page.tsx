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
    "Quiet rooms, warm winters, cooler summers. Aluminium windows in CWD80 Semi-Commercial or CWD100 Thermally Broken, supplied across Canberra and Sydney.",
};

/** Decision guide — one card per window type. */
const decisionGuide = [
  {
    label: "For airflow",
    title: "Awning",
    body:
      "Top-hung, opens outward from the base. Lets fresh air through even in light rain.",
    href: "/services/awning-window",
  },
  {
    label: "For everyday rooms",
    title: "Sliding",
    body:
      "A horizontal sash on a smooth track. Quiet, easy to clean, generous glass.",
    href: "/services/sliding-windows-canberra",
  },
  {
    label: "For full ventilation",
    title: "Casement",
    body:
      "Side-hinged and swings wide open. The most air through the same opening.",
    href: "/services/casement-window",
  },
  {
    label: "For classic homes",
    title: "Hung",
    body:
      "Vertically-sliding sashes — a traditional silhouette with modern sealing.",
    href: "/services/hung-windows",
  },
];

/** Longer-form descriptions used in "The full range" cards. */
const fullRangeBlurb: Record<string, string> = {
  "awning-window":
    "Top-hung. Opens outward. Built to keep ventilation going through a light shower.",
  "sliding-windows-canberra":
    "The everyday window. One sash glides past another, easy to keep clean.",
  "casement-window":
    "Side-hinged, full-aperture opening. Best when you want the most air through the smallest frame.",
  "hung-windows":
    "Vertically-sliding sashes. The traditional form, kept properly sealed.",
};

export default function WindowsIndexPage() {
  const windows = getProductsByCategory("windows");

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
            The windows.
          </h1>
          <p className="mt-8 text-lg text-green/75 max-w-2xl leading-relaxed">
            Four shapes, two frames. Choose CWD80 for an elegant
            semi-commercial profile, or step up to CWD100 thermally broken
            where the room really needs it.
          </p>
        </Container>
      </section>

      {/* ── DECISION GUIDE ── */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Find your window</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-green max-w-2xl mb-16">
            Choose by what the room is for.
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

      {/* ── ALSO FROM US ── */}
      <section className="py-24 md:py-32 bg-ivory-warm border-y border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Also from us</span>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <Link
              href="/services/thermal-break-window"
              className="group block border-t border-bronze pt-6 hover:border-green transition-colors"
            >
              <span className="eyebrow eyebrow-muted">CWD100 series</span>
              <h3 className="mt-4 font-display text-3xl text-green group-hover:text-bronze transition-colors">
                Thermally broken windows
              </h3>
              <p className="mt-4 text-green/70 leading-relaxed">
                Where the aluminium is split internally with an insulating
                bridge — quieter rooms, less condensation, lower bills.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 eyebrow text-green group-hover:text-bronze transition-colors">
                Why a thermal break <span aria-hidden>→</span>
              </span>
            </Link>
            <Link
              href="/services/alfresco-window"
              className="group block border-t border-bronze pt-6 hover:border-green transition-colors"
            >
              <span className="eyebrow eyebrow-muted">A glazing service</span>
              <h3 className="mt-4 font-display text-3xl text-green group-hover:text-bronze transition-colors">
                Alfresco &amp; sunrooms
              </h3>
              <p className="mt-4 text-green/70 leading-relaxed">
                Turn an exposed patio or deck into a room you can use through
                the year — sealed in, properly glazed, no draughts.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 eyebrow text-green group-hover:text-bronze transition-colors">
                Explore the service <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── THE FULL RANGE ── */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Every window we offer</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-green mb-16 max-w-2xl">
            The full range.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
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
