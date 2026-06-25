import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, email, or visit Canberra Windows & Doors. We aim to answer every enquiry within one business day.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-24 pb-20 border-b border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Get in touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-green leading-[1.05] max-w-3xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-8 text-lg text-green/75 max-w-2xl leading-relaxed">
            For a chat about the project, a question about a product, or
            anything in between — pick the channel that suits you. We aim to
            reply within one business day.
          </p>
        </Container>
      </section>

      {/* ── DETAILS ── */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {/* Visit */}
            <div className="border-t border-bronze pt-6">
              <h3 className="eyebrow eyebrow-muted not-italic font-sans">
                Visit
              </h3>
              <p className="mt-4 text-green/85 leading-relaxed">
                {site.address.street}
                <br />
                {site.address.suburb} {site.address.state}{" "}
                {site.address.postcode}
                <br />
                {site.address.country}
              </p>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener"
                className="mt-5 inline-block eyebrow text-green hover:text-bronze transition-colors"
              >
                View on map →
              </a>
            </div>

            {/* Call */}
            <div className="border-t border-bronze pt-6">
              <h3 className="eyebrow eyebrow-muted not-italic font-sans">
                Call
              </h3>
              <ul className="mt-4 space-y-3 text-green/85">
                <li>
                  <a
                    href={site.contact.phonePrimaryHref}
                    className="hover:text-bronze transition-colors"
                  >
                    {site.contact.phonePrimary}
                  </a>
                </li>
                {/* <li>
                  <a
                    href={site.contact.phoneAltHref}
                    className="hover:text-bronze transition-colors"
                  >
                    {site.contact.phoneAlt}
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Email */}
            <div className="border-t border-bronze pt-6">
              <h3 className="eyebrow eyebrow-muted not-italic font-sans">
                Email
              </h3>
              <p className="mt-4">
                <a
                  href={site.contact.emailHref}
                  className="text-green/85 hover:text-bronze transition-colors break-words"
                >
                  {site.contact.email}
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="border-t border-bronze pt-6">
              <h3 className="eyebrow eyebrow-muted not-italic font-sans">
                Hours
              </h3>
              <p className="mt-4 text-green/85 leading-relaxed">
                {site.hours.weekdays}.
                <br />
                {site.hours.weekend}.
              </p>
            </div>

            {/* Service area */}
            <div className="border-t border-bronze pt-6 md:col-span-2">
              <h3 className="eyebrow eyebrow-muted not-italic font-sans">
                Service area
              </h3>
              <p className="mt-4 text-green/85 leading-relaxed max-w-xl">
                Supply and installation across the ACT. Australia-wide supply
                with installation on request throughout Sydney.
              </p>
            </div>
          </div>

          {/* Quote callout */}
          <div className="mt-20 border-t border-rule pt-16">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-6">
                <h2 className="font-display text-3xl md:text-4xl text-green leading-[1.1]">
                  Prefer a detailed quote?
                </h2>
              </div>
              <div className="md:col-span-6 space-y-6">
                <p className="text-green/75 leading-relaxed">
                  Send through your sizes, drawings or photos and we&apos;ll
                  come back with options, timing, and a fair price — within one
                  business day.
                </p>
                <Button
                  href="/request-a-quote"
                  variant="primary"
                  size="lg"
                >
                  Request a quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
