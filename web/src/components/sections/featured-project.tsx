import { Container } from "@/components/ui/container";
import { Media } from "@/components/ui/media";
import { featuredProject } from "@/data/featured-project";

/** Section 08 — full-width featured project case study. */
export function FeaturedProject() {
  return (
    <section className="py-24 md:py-32 bg-ivory-warm">
      <Container>
        <div className="flex items-center gap-4 mb-10">
          <span className="block w-8 h-px bg-bronze" />
          <span className="eyebrow">A Recent Project · {featuredProject.location.split(",")[1]?.trim()}</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-green max-w-3xl mb-12">
          {featuredProject.title}
        </h2>

        <Media
          src={featuredProject.image}
          alt={featuredProject.imageAlt}
          aspect="aspect-[16/9]"
          tone="green"
          placeholderLabel="Featured project · 16:9"
          sizes="100vw"
        />

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="eyebrow eyebrow-muted not-italic font-sans">Location</h3>
            <p className="mt-3 text-green">{featuredProject.location}</p>
          </div>
          <div>
            <h3 className="eyebrow eyebrow-muted not-italic font-sans">Products Used</h3>
            <ul className="mt-3 space-y-1 text-green">
              {featuredProject.productsUsed.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow eyebrow-muted not-italic font-sans">The Story</h3>
            <p className="mt-3 text-green/75 leading-relaxed">{featuredProject.story}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
