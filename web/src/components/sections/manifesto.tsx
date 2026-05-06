import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

/** Section 04 — two-column manifesto on ivory. Big serif left, body right. */
export function Manifesto() {
  return (
    <section className="py-32 md:py-40">
      <Container>
        <div className="flex items-center gap-4 mb-16">
          <span className="block w-12 h-px bg-bronze" />
          <span className="eyebrow">{site.manifesto.eyebrow}</span>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-green leading-[1.05]">
              {site.manifesto.headline}
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 space-y-6 text-green/75 text-lg leading-relaxed">
            {site.manifesto.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
