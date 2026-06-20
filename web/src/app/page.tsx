import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Manifesto } from "@/components/sections/manifesto";
import { SignatureProduct } from "@/components/sections/signature-product";
import { CollectionGrid } from "@/components/sections/collection-grid";
import { FeaturedProject } from "@/components/sections/featured-project";
import { BrandPartners } from "@/components/sections/brand-partners";
import { Testimonials } from "@/components/sections/testimonials";
import { TwoCities } from "@/components/sections/two-cities";
import { FinalCta } from "@/components/sections/final-cta";
import { getProductBySlug, getProductsByCategory } from "@/data/products";
import { heroImage } from "@/lib/images";

export default function HomePage() {
  const doors = getProductsByCategory("doors");
  const windows = getProductsByCategory("windows");
  const flagship = getProductBySlug("awning-window")!;

  return (
    <>
      {/* 02 — Hero */}
      <Hero image={heroImage} />

      {/* 03 — Trust strip */}
      <TrustStrip />

      {/* 04 — Manifesto */}
      <Manifesto />

      {/* 05 — Signature product */}
      <SignatureProduct
        product={flagship}
        body="Top-hung and outward-opening, the awning lets you keep the air moving even when the weather turns. Thermally broken in our CWD100 series, with the same fit and finish you'll find on every frame we send out."
        ctaLabel="Explore the awning window"
      />

      {/* 06 — Doors collection */}
      <CollectionGrid
        id="collection"
        eyebrow="Doors"
        heading="The doors."
        body="Four ways to open a wall. Each one engineered the same way: thermally broken where you need it, single-fixed-frame where you don't, and finished in your choice of colour."
        products={doors}
        tone="ivory"
        cols={4}
        viewAllHref="/doors"
        viewAllLabel="View all doors"
      />

      {/* 07 — Windows collection */}
      <CollectionGrid
        eyebrow="Windows"
        heading="The windows."
        body="From quiet bedrooms to wide kitchen openings, the right window does its work without asking for attention. Choose by how the room is used — we'll match the series and the glazing."
        products={windows}
        tone="green"
        cols={4}
        viewAllHref="/windows"
        viewAllLabel="View all windows"
      />

      {/* 08 — Featured project */}
      <FeaturedProject />

      {/* 09 — Brand partners */}
      {/* <BrandPartners /> */}

      {/* 10 — Testimonials */}
      <Testimonials />

      {/* 11 — Two cities */}
      <TwoCities />

      {/* 12 — Final CTA */}
      <FinalCta />
    </>
  );
}
