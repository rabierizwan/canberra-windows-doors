import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

/** Section 12 — closing CTA on Ivory band. */
export function FinalCta() {
  return (
    <section className="py-24 md:py-32 bg-ivory border-t border-rule">
      <Container className="text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-8 h-px bg-bronze" />
          <span className="eyebrow">Get Started</span>
          <span className="block w-8 h-px bg-bronze" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-green leading-[1.05] max-w-2xl mx-auto">
          {site.closing.headline}
        </h2>
        <p className="mt-6 text-green/70 max-w-xl mx-auto leading-relaxed">
          {site.closing.body}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button href="/request-a-quote" variant="primary" size="lg">
            Request a Quote
          </Button>
          <a
            href={site.contact.phonePrimaryHref}
            className="eyebrow text-green hover:text-bronze transition-colors"
          >
            or call {site.contact.phonePrimary}
          </a>
        </div>
      </Container>
    </section>
  );
}
