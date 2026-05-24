import { Container } from "@/components/ui/container";
import { getDrawings, type DrawingType } from "@/lib/documents";

/**
 * Renders the pair of technical drawings (80 standard + 100 thermal-broken)
 * for a given product type. Editorial list treatment — hairlines, no cards.
 *
 * Returns null when no drawings exist for the type, so it's safe to mount
 * on any product page unconditionally.
 */
export function TechnicalDrawings({ type }: { type: DrawingType }) {
  const drawings = getDrawings({ type });
  if (drawings.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-ivory-warm border-y border-rule">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Heading column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-bronze" />
              <span className="eyebrow">Technical Drawings</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-green leading-[1.05]">
              For specifiers &amp; builders.
            </h2>
            <p className="mt-5 text-green/70 leading-relaxed max-w-sm">
              Cross-section and installation detail sheets for both frame
              series. PDF — open in a new tab.
            </p>
          </div>

          {/* Downloads list */}
          <div className="lg:col-span-7">
            <ul className="border-t border-rule">
              {drawings.map((d) => (
                <li key={d.url}>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 py-6 border-b border-rule transition-colors hover:bg-ivory/60"
                  >
                    <div>
                      <span className="eyebrow eyebrow-muted not-italic font-sans">
                        {d.series === "80"
                          ? "80 mm Semi-Commercial Series"
                          : "100 mm Thermally Broken Windows"}
                      </span>
                      <h3 className="mt-2 font-display text-2xl text-green group-hover:text-bronze transition-colors">
                        {d.typeLabel}
                      </h3>
                      <p className="mt-1 text-sm text-green/55">
                        Cross-section &amp; installation detail
                      </p>
                    </div>
                    <span className="shrink-0 eyebrow text-green group-hover:text-bronze transition-colors inline-flex items-center gap-2">
                      PDF <span aria-hidden>→</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
