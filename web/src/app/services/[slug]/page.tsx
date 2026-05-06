import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SpecTable } from "@/components/product/spec-table";
import { OptionList } from "@/components/product/option-list";
import { getProductBySlug, getAllSlugs, getProductsByCategory } from "@/data/products";

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
      {/* HERO */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 border-b border-rule/60">
        <Container>
          <span className="eyebrow capitalize">{product.category}</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-ink leading-[1.05] max-w-3xl">
            {product.heading}
          </h1>
          {product.subheading && (
            <p className="mt-6 text-lg text-bronze max-w-2xl">{product.subheading}</p>
          )}
          {product.intro?.length > 0 && (
            <div className="mt-8 max-w-2xl space-y-4 text-lg text-ink/75 leading-relaxed">
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
        </Container>
      </section>

      {/* BENEFITS */}
      {product.benefits && product.benefits.length > 0 && (
        <section className="py-20">
          <Container>
            <span className="eyebrow">Why choose</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink">
              The difference is in the detail.
            </h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.benefits.map((b, i) => (
                <div key={i} className="border-t border-ink pt-6">
                  <h3 className="font-display text-xl text-ink">{b.title}</h3>
                  <p className="mt-3 text-ink/70 leading-relaxed">{b.body}</p>
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
        <section className="py-20 bg-cream-50 border-y border-rule/60">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12">
              {product.spec && (
                <div className="lg:col-span-5">
                  <span className="eyebrow">Specification</span>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink mb-8">
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
        <section className="py-20">
          <Container className="space-y-12">
            {product.performance && (
              <div>
                <span className="eyebrow">Performance</span>
                <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-rule/60 border border-rule/60">
                  {product.performance.map((p) => (
                    <li
                      key={p}
                      className="bg-cream py-6 text-center text-sm text-ink"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.applications && (
              <div>
                <span className="eyebrow">Applications</span>
                <p className="mt-4 text-2xl md:text-3xl font-display text-ink/80 leading-snug">
                  {product.applications.join(" · ")}
                </p>
              </div>
            )}
          </Container>
        </section>
      )}

      {/* FREE-FORM SECTIONS */}
      {product.sections && product.sections.length > 0 && (
        <section className="py-20 border-t border-rule/60">
          <Container>
            <div className="space-y-16 max-w-3xl">
              {product.sections.map((s, i) => (
                <div key={i}>
                  <h2 className="font-display text-3xl text-ink">{s.heading}</h2>
                  <div className="mt-4 space-y-4 text-ink/75 leading-relaxed">
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
        <section className="py-20 bg-cream-50 border-t border-rule/60">
          <Container>
            <span className="eyebrow">More {product.category}</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink mb-12">
              Explore the range.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/services/${p.slug}`}
                  className="group block bg-cream border border-rule/60 p-8 hover:border-ink transition-colors"
                >
                  <span className="eyebrow text-muted">
                    {p.spec?.openingStyle ?? p.spec?.model ?? p.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink group-hover:text-bronze transition-colors">
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
