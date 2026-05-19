import { Container } from "@/components/ui/container";

/**
 * "We stand behind our work" — used on /doors and /windows index pages.
 * Reinforces that aftercare is available on every install
 * (and implicitly: only on installs we completed ourselves).
 */
export function MaintenancePledge() {
  return (
    <section className="py-24 md:py-32 bg-green text-ivory">
      <Container>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-bronze" />
              <span className="eyebrow text-bronze-soft">Aftercare</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.05]">
              Installed by us, maintained by us.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-5 text-ivory/75 leading-relaxed">
            <p>
              When CW&amp;D supplies <em>and</em> installs your windows or doors,
              the same team stays available for the life of the product — on
              hand for adjustments, weather-seal replacements and hardware
              tune-ups whenever you need them.
            </p>
            <p>
              We service the windows and doors we&apos;ve fitted ourselves, so
              what you choose today keeps performing in five, ten, fifteen
              years.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
