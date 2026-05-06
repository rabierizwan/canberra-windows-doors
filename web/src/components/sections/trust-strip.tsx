import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

/** Section 03 — quiet trust band on Deep Green. */
export function TrustStrip() {
  return (
    <section className="bg-green text-ivory border-y border-bronze/20">
      <Container className="py-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {site.trustStats.map((stat, i) => (
            <li key={stat.label} className="flex items-center gap-12">
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl text-ivory">
                  {stat.value}
                </div>
                <div className="mt-2 eyebrow text-bronze-soft">{stat.label}</div>
              </div>
              {i < site.trustStats.length - 1 && (
                <span
                  aria-hidden
                  className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-bronze"
                />
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
