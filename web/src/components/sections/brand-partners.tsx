import { Container } from "@/components/ui/container";
import { partners } from "@/data/partners";

/** Section 09 — supplier partners row. Logos rendered as text until SVGs supplied. */
export function BrandPartners() {
  return (
    <section className="py-20 md:py-24 border-y border-rule">
      <Container>
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="block w-8 h-px bg-bronze" />
          <span className="eyebrow">We Work With the World&apos;s Best</span>
          <span className="block w-8 h-px bg-bronze" />
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partners.map((p) => (
            <li
              key={p.name}
              className="font-display text-2xl md:text-3xl text-green/40 hover:text-green/80 transition-colors tracking-wide"
              title={p.name}
            >
              {p.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
