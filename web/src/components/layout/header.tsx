import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { site } from "@/lib/site";

/**
 * Top-of-page header. Mobile nav is intentionally minimal for v1 —
 * upgrade to a full sheet/drawer once the page-template work is done.
 */
export function Header() {
  return (
    <header className="border-b border-rule/60 bg-cream/90 backdrop-blur-sm sticky top-0 z-50">
      <Container as="div" className="flex items-center justify-between py-5">
        <Logo showWordmark={false} />

        <nav aria-label="Primary" className="hidden md:flex items-center gap-10">
          {site.nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="eyebrow text-ink hover:text-bronze transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <Button href="/request-a-quote" variant="primary" size="sm">
            Request a Quote
          </Button>
        </div>
      </Container>
    </header>
  );
}
