import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Trusted experts in windows and doors across Canberra and Sydney. Premium European-grade aluminium, supplied directly without distributor markup.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-20 border-b border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">About</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-green leading-[1.05] max-w-3xl">
            Your trusted experts in windows &amp; doors.
          </h1>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-3xl space-y-6 text-lg text-green/75 leading-relaxed">
            <p>
              Welcome to Canberra Windows &amp; Doors. We supply premium European-grade
              aluminium windows and doors directly to homes across Canberra and
              Sydney — without the distributor markup that inflates trade-channel
              pricing.
            </p>
            <p>
              For over seven years, we&apos;ve worked with homeowners, builders and
              architects who care about thermal performance, acoustic comfort and
              the kind of detail that&apos;s only visible up close.
            </p>
            <p>
              Whether you&apos;re looking to brighten up your living room, add some
              flair to your front entry or seal out those chilly Canberra winds,
              we&apos;ve got the right product, fairly priced.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-ivory-warm border-y border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Why Choose Us</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-green max-w-2xl mb-16">
            We make the process simple.
          </h2>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
            <div className="border-t border-bronze pt-6">
              <h3 className="font-display text-2xl text-green">Quality You Can Count On</h3>
              <p className="mt-3 text-green/70 leading-relaxed">
                We handpick European-grade materials so your windows and doors
                stand the test of time and weather.
              </p>
            </div>
            <div className="border-t border-bronze pt-6">
              <h3 className="font-display text-2xl text-green">Expert Installers</h3>
              <p className="mt-3 text-green/70 leading-relaxed">
                Our installation team gets it right the first time — no mess, no
                fuss, just perfectly installed windows and doors.
              </p>
            </div>
            <div className="border-t border-bronze pt-6">
              <h3 className="font-display text-2xl text-green">Customer First, Always</h3>
              <p className="mt-3 text-green/70 leading-relaxed">
                From first consultation to final installation, we keep you
                informed and prioritise your needs every step of the way.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="text-center">
          <h2 className="font-display text-3xl md:text-5xl text-green">
            Ready to start your project?
          </h2>
          <div className="mt-10">
            <Button href="/request-a-quote" variant="primary" size="lg">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
