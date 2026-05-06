import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Canberra Windows & Doors. Phone, email, or visit our showroom in Wright ACT.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-20 border-b border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Get in Touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-green leading-[1.05] max-w-3xl">
            We&apos;d love to hear from you.
          </h1>
          <p className="mt-8 text-lg text-green/70 max-w-2xl">
            Whether you&apos;re after expert advice or a quote, we&apos;re ready to help.
            Reach out and let&apos;s discuss how we can bring your project to life.
          </p>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border-t border-bronze pt-6">
              <h3 className="eyebrow eyebrow-muted not-italic font-sans">Address</h3>
              <p className="mt-4 text-green/80 leading-relaxed">
                {site.address.street}
                <br />
                {site.address.suburb} {site.address.state} {site.address.postcode}
                <br />
                {site.address.country}
              </p>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener"
                className="mt-5 inline-block eyebrow text-green hover:text-bronze transition-colors"
              >
                View on Map →
              </a>
            </div>
            <div className="border-t border-bronze pt-6">
              <h3 className="eyebrow eyebrow-muted not-italic font-sans">Contact</h3>
              <ul className="mt-4 space-y-3 text-green/80">
                <li>
                  <a href={site.contact.phonePrimaryHref} className="hover:text-bronze transition-colors">
                    {site.contact.phonePrimary}
                  </a>
                </li>
                <li>
                  <a href={site.contact.phoneAltHref} className="hover:text-bronze transition-colors">
                    {site.contact.phoneAlt}
                  </a>
                </li>
                <li>
                  <a href={site.contact.emailHref} className="hover:text-bronze transition-colors">
                    {site.contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-t border-bronze pt-6">
              <h3 className="eyebrow eyebrow-muted not-italic font-sans">Working Hours</h3>
              <p className="mt-4 text-green/80 leading-relaxed">
                {site.hours.weekdays}
                <br />
                {site.hours.weekend}
              </p>
            </div>
          </div>

          <div className="mt-20 text-center border-t border-rule pt-16">
            <p className="text-green/70 mb-6">
              Need a project quote? Our request-a-quote form has more detail.
            </p>
            <Button href="/request-a-quote" variant="primary" size="lg">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
