import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Trusted experts in windows and doors across Canberra and the ACT. Over a decade of premium aluminium installations.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-16 border-b border-rule/60">
        <Container>
          <span className="eyebrow">About</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-ink leading-[1.05] max-w-3xl">
            Your trusted experts in windows &amp; doors.
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-3xl space-y-6 text-lg text-ink/75 leading-relaxed">
            <p>
              Welcome to Canberra Windows &amp; Doors, where we don&apos;t just open
              doors — we enhance your home. Our mission is simple: to complement
              your home or business with windows and doors made with top-notch
              craftsmanship.
            </p>
            <p>
              Whether you&apos;re looking to brighten up your living room, add some
              flair to your front entry or seal out those chilly Canberra winds,
              we&apos;ve got the perfect solution.
            </p>
            <p>
              We&apos;ve been transforming homes in Canberra for years and we&apos;re
              here to help you fall in love with your space all over again.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-cream-50 border-y border-rule/60">
        <Container>
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink mb-12">
            We make the process smooth.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-xl text-ink">Quality You Can Count On</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                We handpick the best materials to ensure your windows and doors
                stand the test of time and weather.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-ink">Expert Installers</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                Our installation team gets it right the first time — no mess,
                no fuss, just perfectly installed windows and doors.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-ink">Customer First, Always</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                From first consultation to final installation, we keep you
                informed and prioritise your needs every step of the way.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Ready to start your project?
          </h2>
          <div className="mt-8">
            <Button href="/request-a-quote" variant="primary" size="lg">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
