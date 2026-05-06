import { Container } from "@/components/ui/container";
import { testimonials } from "@/data/testimonials";

/** Section 10 — testimonials. No cards, just typography separated by hairlines. */
export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex items-center gap-4 mb-16">
          <span className="block w-8 h-px bg-bronze" />
          <span className="eyebrow">In Their Words</span>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="py-12 border-t border-rule first:border-t-0"
            >
              <blockquote className="font-display text-2xl md:text-3xl text-green leading-snug">
                <span className="text-bronze mr-1">&ldquo;</span>
                {t.quote}
                <span className="text-bronze ml-1">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="block w-6 h-px bg-bronze" />
                <span className="eyebrow text-green/70">
                  {t.name} <span className="text-bronze">·</span> {t.context}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
