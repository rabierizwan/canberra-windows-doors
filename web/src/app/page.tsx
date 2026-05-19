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
      <SignatureProduct product={flagship} />

      {/* 06 — Doors collection */}
      <CollectionGrid
        id="collection"
        eyebrow="Doors"
        heading="The doors collection."
        products={doors}
        tone="ivory"
        cols={4}
        viewAllHref="/doors"
      />

      {/* 07 — Windows collection */}
      <CollectionGrid
        eyebrow="Windows"
        heading="The windows collection."
        products={windows}
        tone="green"
        cols={4}
        viewAllHref="/windows"
      />

      {/* 08 — Featured project */}
      <FeaturedProject />

      {/* 09 — Brand partners */}
      <BrandPartners />

      {/* 10 — Testimonials */}
      <Testimonials />

      {/* 11 — Two cities */}
      <TwoCities />

      {/* 12 — Final CTA */}
      <FinalCta />
    </>
  );
}
