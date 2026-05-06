import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Canberra Windows & Doors. Phone, email, or visit our showroom in Whitlam ACT.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-16 border-b border-rule/60">
        <Container>
          <span className="eyebrow">Get in touch</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-ink leading-[1.05] max-w-3xl">
            We&apos;d love to hear from you.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl">
            Whether you&apos;re looking for expert advice or a quote, we&apos;re ready
            to help. Reach out and let&apos;s discuss how we can bring your vision
            to life.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="eyebrow text-muted not-italic">Address</h3>
              <p className="mt-4 text-ink/80 leading-relaxed">
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
                className="mt-4 inline-block eyebrow text-ink hover:text-bronze"
              >
                View on Map →
              </a>
            </div>
            <div>
              <h3 className="eyebrow text-muted not-italic">Contact</h3>
              <ul className="mt-4 space-y-3 text-ink/80">
                <li>
                  <a href={site.contact.phonePrimaryHref} className="hover:text-bronze">
                    {site.contact.phonePrimary}
                  </a>
                </li>
                <li>
                  <a href={site.contact.phoneAltHref} className="hover:text-bronze">
                    {site.contact.phoneAlt}
                  </a>
                </li>
                <li>
                  <a href={site.contact.emailHref} className="hover:text-bronze">
                    {site.contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="eyebrow text-muted not-italic">Working Hours</h3>
              <p className="mt-4 text-ink/80 leading-relaxed">
                {site.hours.weekdays}
                <br />
                {site.hours.weekend}
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-ink/70 mb-4">
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
