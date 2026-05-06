import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote for premium windows and doors in Canberra. Tell us about your project and we'll get back to you.",
};

export default function QuotePage() {
  return (
    <>
      <section className="pt-24 pb-16 border-b border-rule/60">
        <Container>
          <span className="eyebrow">Quote</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-ink leading-[1.05] max-w-3xl">
            Request a quote.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl">
            Tell us about your project. We&apos;ll respond within one business day
            with options, timing and pricing.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-ink/70">
              The quote form will be wired up next — for now you can reach us
              directly:
            </p>
            <ul className="mt-6 space-y-3 text-lg text-ink">
              <li>
                Phone:{" "}
                <a href={site.contact.phonePrimaryHref} className="text-bronze hover:underline">
                  {site.contact.phonePrimary}
                </a>
              </li>
              <li>
                Email:{" "}
                <a href={site.contact.emailHref} className="text-bronze hover:underline">
                  {site.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-10">
              <Button href="/contact" variant="secondary" size="lg">
                Contact Page
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
