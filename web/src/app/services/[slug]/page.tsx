import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { SpecTable } from "@/components/product/spec-table";
import { OptionList } from "@/components/product/option-list";
import {
  getProductBySlug,
  getAllSlugs,
  getProductsByCategory,
} from "@/data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.metaTitle ?? product.heading,
    description: product.metaDescription,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      {/* HERO — image + type, asymmetric */}
      <section className="bg-ivory border-b border-rule">
        <Container className="pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <span className="block w-8 h-px bg-bronze" />
                <span className="eyebrow capitalize">{product.category}</span>
              </div>
              <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-green leading-[1.05]">
                {product.heading}
              </h1>
              {product.subheading && (
                <p className="mt-5 text-lg text-bronze">{product.subheading}</p>
              )}
              {product.intro?.length > 0 && (
                <div className="mt-8 space-y-4 text-green/75 leading-relaxed">
                  {product.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
              <div className="mt-10">
                <Button href="/request-a-quote" variant="primary" size="lg">
                  {product.ctaLabel ?? "Request a Quote"}
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Media
                src={product.image}
                alt={product.imageAlt ?? product.heading}
                aspect="aspect-[4/3]"
                tone="green"
                placeholderLabel={`${product.heading} · 4:3`}
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      {product.benefits && product.benefits.length > 0 && (
        <section className="py-24 md:py-32">
          <Container>
            <div className="flex items-center gap-4 mb-12">
              <span className="block w-8 h-px bg-bronze" />
              <span className="eyebrow">Why choose</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-green max-w-2xl mb-16">
              The difference is in the detail.
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {product.benefits.map((b, i) => (
                <div key={i} className="border-t border-bronze pt-6">
                  <h3 className="font-display text-2xl text-green">{b.title}</h3>
                  <p className="mt-3 text-green/70 leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* SPEC + OPTIONS */}
      {(product.spec ||
        product.glassTypes ||
        product.hardwareBrands ||
        product.profileColors ||
        product.flyscreens) && (
        <section className="py-24 md:py-32 bg-ivory-warm border-y border-rule">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12">
              {product.spec && (
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="block w-8 h-px bg-bronze" />
                    <span className="eyebrow">Specification</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-green mb-8">
                    Built to standard.
                  </h2>
                  <SpecTable spec={product.spec} />
                </div>
              )}
              <div
                className={`space-y-8 ${
                  product.spec ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-12"
                }`}
              >
                {product.glassTypes && (
                  <OptionList label="Glass Types" items={product.glassTypes} />
                )}
                {product.glassColors && (
                  <OptionList label="Glass Colours" items={product.glassColors} />
                )}
                {product.profileColors && (
                  <OptionList label="Profile Colours" items={product.profileColors} />
                )}
                {product.hardwareBrands && (
                  <OptionList label="Hardware Brands" items={product.hardwareBrands} />
                )}
                {product.flyscreens && (
                  <OptionList label="Flyscreen Options" items={product.flyscreens} />
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* PERFORMANCE + APPLICATIONS */}
      {(product.performance || product.applications) && (
        <section className="py-24 md:py-32">
          <Container className="space-y-16">
            {product.performance && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="block w-8 h-px bg-bronze" />
                  <span className="eyebrow">Performance</span>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-rule border border-rule">
                  {product.performance.map((p) => (
                    <li
                      key={p}
                      className="bg-ivory py-8 text-center text-sm text-green"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.applications && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="block w-8 h-px bg-bronze" />
                  <span className="eyebrow">Applications</span>
                </div>
                <p className="text-2xl md:text-3xl font-display text-green/80 leading-snug">
                  {product.applications.join(" · ")}
                </p>
              </div>
            )}
          </Container>
        </section>
      )}

      {/* FREE-FORM SECTIONS */}
      {product.sections && product.sections.length > 0 && (
        <section className="py-24 border-t border-rule">
          <Container>
            <div className="space-y-16 max-w-3xl">
              {product.sections.map((s, i) => (
                <div key={i}>
                  <h2 className="font-display text-3xl text-green">{s.heading}</h2>
                  <div className="mt-4 space-y-4 text-green/75 leading-relaxed">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="py-24 md:py-32 bg-green text-ivory">
          <Container>
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-px bg-bronze" />
              <span className="eyebrow capitalize">More {product.category}</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ivory mb-16">
              Explore the range.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/services/${p.slug}`}
                  className="group block"
                >
                  <Media
                    src={p.image}
                    alt={p.imageAlt ?? p.heading}
                    aspect="aspect-[4/5]"
                    tone="ivory"
                    placeholderLabel={`${p.heading} · 4:5`}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <h3 className="mt-5 font-display text-xl text-ivory group-hover:text-bronze-soft transition-colors">
                    {p.heading}
                  </h3>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
