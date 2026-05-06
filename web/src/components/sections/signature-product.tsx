import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Media } from "@/components/ui/media";
import type { Product } from "@/types/product";

/**
 * Section 05 — flagship product feature, asymmetric.
 * Image takes 7/12, type takes 4/12 + offset.
 */
export function SignatureProduct({ product }: { product: Product }) {
  return (
    <section className="py-24 md:py-32 bg-green text-ivory">
      <Container>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7">
            <Media
              src={product.image}
              alt={product.imageAlt ?? `${product.heading} install`}
              aspect="aspect-[4/3]"
              tone="ivory"
              placeholderLabel={`${product.heading} · 4:3`}
              sizes="(min-width: 768px) 58vw, 100vw"
            />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="flex items-center gap-4">
              <span className="block w-8 h-px bg-bronze" />
              <span className="eyebrow text-bronze-soft">The Flagship</span>
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl text-ivory leading-[1.05]">
              {product.heading}
            </h2>
            <p className="mt-6 text-ivory/70 text-lg leading-relaxed">
              {product.intro?.[0]}
            </p>
            <Link
              href={`/services/${product.slug}`}
              className="mt-10 inline-flex items-center gap-3 eyebrow text-bronze-soft hover:text-ivory transition-colors"
            >
              Explore {product.heading} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
