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
              When we supply and install your doors, the same team stays close
              for the life of the product. Seals, adjustments, hardware tune-ups
              — handled by the people who set them in the first place.
            </p>
            <p>
              For supply-only orders, your installer becomes the point of contact
              for adjustments and aftercare. Either way, every frame we send out
              is ready to be looked after properly.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
