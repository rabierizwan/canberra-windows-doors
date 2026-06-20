import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MaintenancePledge } from "@/components/sections/maintenance-pledge";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Seven years of supplying high-end aluminium windows and doors to homes across Canberra and Sydney, direct, and looked after long after they're fitted.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-24 pb-20 border-b border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">About</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-green leading-[1.05] max-w-3xl">
            Quietly obsessed with the details.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-green/75 leading-relaxed">
            Seven years on, we&apos;re still doing the same thing: putting
            considered aluminium windows and doors into Canberra and Sydney
            homes, supplied directly, and looked after long after they&apos;re
            in.
          </p>
        </Container>
      </section>

      {/* ── WHO WE BUILD FOR ── */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <div className="flex items-center gap-4 mb-6">
                <span className="block w-8 h-px bg-bronze" />
                <span className="eyebrow">Who we build for</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-green leading-[1.05]">
                Homeowners, builders, and people who can tell.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-green/75 leading-relaxed">
              <p>
                Architects who specify down to the millimetre. Builders who
                want one supplier they can plan around. Owners renovating the
                home they intend to stay in.
              </p>
              <p>
                What they share is a preference for the frame that does its job
                quietly — the one that seals, slides, locks, and ages well
                without anyone having to think about it again.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── AFTERCARE PLEDGE (shared section) ── */}
      <MaintenancePledge />

      {/* ── SIMPLE TO WORK WITH ── */}
      <section className="py-24 md:py-32 bg-ivory-warm border-y border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Why CW&amp;D</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-green max-w-2xl mb-16">
            Simple to work with. Built to last.
          </h2>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
            <div className="border-t border-bronze pt-6">
              <h3 className="font-display text-2xl text-green">
                Quality you can feel
              </h3>
              <p className="mt-3 text-green/70 leading-relaxed">
                High-grade aluminium profiles, proper seals, hardware that
                doesn&apos;t loosen up. Choose CWD80 for the elegant
                semi-commercial frame, or CWD100 when thermal performance
                matters.
              </p>
            </div>
            <div className="border-t border-bronze pt-6">
              <h3 className="font-display text-2xl text-green">
                Fitted once, fitted right
              </h3>
              <p className="mt-3 text-green/70 leading-relaxed">
                Across the ACT we measure, deliver and install ourselves. Across
                Sydney we supply Australia-wide and install on request — same
                detailing, same standard.
              </p>
            </div>
            <div className="border-t border-bronze pt-6">
              <h3 className="font-display text-2xl text-green">
                You, at the centre
              </h3>
              <p className="mt-3 text-green/70 leading-relaxed">
                One point of contact through quoting, supply, install and
                aftercare. We answer within one business day, and we&apos;re
                still around when something needs a hand a decade in.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-24 md:py-32">
        <Container className="text-center">
          <h2 className="font-display text-3xl md:text-5xl text-green max-w-2xl mx-auto">
            Ready to start the conversation?
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
