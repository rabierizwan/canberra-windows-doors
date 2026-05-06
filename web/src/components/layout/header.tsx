import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { site } from "@/lib/site";

/**
 * Sticky header on ivory. Phone number always visible (trades customers call).
 * Mobile nav drawer is intentionally deferred to Phase 1 polish.
 */
export function Header() {
  return (
    <header className="border-b border-rule bg-ivory/85 backdrop-blur-md sticky top-0 z-50">
      <Container as="div" className="flex items-center justify-between py-5">
        <Logo showWordmark={false} />

        <nav aria-label="Primary" className="hidden md:flex items-center gap-10">
          {site.nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="eyebrow eyebrow-muted hover:text-bronze transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href={site.contact.phonePrimaryHref}
            className="hidden sm:inline-block eyebrow text-green hover:text-bronze transition-colors"
            aria-label={`Call us at ${site.contact.phonePrimary}`}
          >
            {site.contact.phonePrimary}
          </a>
          <Button href="/request-a-quote" variant="primary" size="sm">
            Request a Quote
          </Button>
        </div>
      </Container>
    </header>
  );
}
