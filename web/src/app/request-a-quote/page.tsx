import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { QuoteForm } from "@/components/forms/quote-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote for premium windows and doors in Canberra or Sydney. Tell us about your project and we'll get back to you within one business day.",
};

export default function QuotePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 border-b border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Quote</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-green leading-[1.05] max-w-3xl">
            Request a quote.
          </h1>
          <p className="mt-8 text-lg text-green/75 max-w-2xl leading-relaxed">
            A few details about the project — the rooms, the sizes if you have
            them, your timing. We&apos;ll come back within one business day
            with options and a fair price.
          </p>
        </Container>
      </section>

      {/* FORM + ASIDE */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form column */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

            {/* Aside — direct contact + hours */}
            <aside className="lg:col-span-4 lg:col-start-9 space-y-10">
              <div className="border-t border-bronze pt-6">
                <span className="eyebrow eyebrow-muted not-italic font-sans">
                  Prefer to talk?
                </span>
                <ul className="mt-4 space-y-3 text-green">
                  <li>
                    <a
                      href={site.contact.phonePrimaryHref}
                      className="font-display text-2xl hover:text-bronze transition-colors"
                    >
                      {site.contact.phonePrimary}
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.contact.emailHref}
                      className="text-sm hover:text-bronze transition-colors break-words"
                    >
                      {site.contact.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-t border-rule pt-6">
                <span className="eyebrow eyebrow-muted not-italic font-sans">
                  Hours
                </span>
                <p className="mt-4 text-sm text-green/80 leading-relaxed">
                  {site.hours.weekdays}.
                  <br />
                  {site.hours.weekend}.
                </p>
              </div>

              <div className="border-t border-rule pt-6">
                <span className="eyebrow eyebrow-muted not-italic font-sans">
                  Service area
                </span>
                <p className="mt-4 text-sm text-green/80 leading-relaxed">
                  Supply and installation across the ACT. Australia-wide supply
                  with installation on request throughout Sydney.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
