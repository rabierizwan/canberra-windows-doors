import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

/** Section 11 — service area band on Deep Green. */
export function TwoCities() {
  return (
    <section className="bg-green text-ivory py-32 md:py-40">
      <Container className="text-center">
        <div className="inline-flex items-center gap-4 mb-10">
          <span className="block w-8 h-px bg-bronze" />
          <span className="eyebrow text-bronze-soft">{site.serviceArea.eyebrow}</span>
          <span className="block w-8 h-px bg-bronze" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-ivory leading-[1.08] max-w-4xl mx-auto">
          {site.serviceArea.headline}
        </h2>
        <div className="mt-10 max-w-xl mx-auto space-y-5 text-ivory/70 leading-relaxed">
          {site.serviceArea.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
