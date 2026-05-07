import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string };

/**
 * Hover/focus-triggered dropdown panel for nav items that have sub-links.
 * Uses CSS-only group hover + focus-within so this stays a server component.
 *
 * The `pt-5` on the panel wrapper creates an invisible bridge between the
 * parent label and the panel — keeps the panel open as the cursor crosses.
 */
function NavDropdown({
  label,
  href,
  items,
  cols = 1,
}: {
  label: string;
  href: string;
  items: readonly NavItem[];
  cols?: 1 | 2;
}) {
  // Split items into roughly equal columns for the 2-col layout.
  const half = Math.ceil(items.length / 2);
  const left = cols === 2 ? items.slice(0, half) : items;
  const right = cols === 2 ? items.slice(half) : [];

  // Each column needs to be wide enough to fit the longest label without wrapping.
  const colWidth = "min-w-[180px]";

  return (
    // inline-flex + items-center matches the box model of the plain <Link>
    // siblings (About/Contact) so all four nav items sit on the same baseline.
    <div className="group/dropdown relative inline-flex items-center">
      <Link
        href={href}
        className="eyebrow eyebrow-muted hover:text-bronze group-hover/dropdown:text-bronze group-focus-within/dropdown:text-bronze transition-colors"
      >
        {label}
      </Link>

      <div
        className={cn(
          // Position + invisible bridge above the panel
          "absolute top-full left-1/2 -translate-x-1/2 pt-5 z-50",
          // Hidden by default, revealed on hover/focus of the group
          "invisible opacity-0 translate-y-1",
          "group-hover/dropdown:visible group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0",
          "group-focus-within/dropdown:visible group-focus-within/dropdown:opacity-100 group-focus-within/dropdown:translate-y-0",
          "transition-all duration-200 ease-out",
        )}
      >
        <div
          className={cn(
            "bg-ivory border border-rule p-7 w-max",
            "shadow-[0_24px_60px_-15px_rgba(20,31,24,0.18)]",
          )}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-bronze" />
            <span className="eyebrow">{label}</span>
          </div>

          {/* Use flex with explicit column widths — far more reliable than grid
              + whitespace-nowrap, which let cells overflow the parent. */}
          <div className="flex gap-12">
            <ul className={cn("space-y-3", colWidth)}>
              {left.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block font-display text-base text-green hover:text-bronze transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {right.length > 0 && (
              <ul className={cn("space-y-3", colWidth)}>
                {right.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block font-display text-base text-green hover:text-bronze transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-rule">
            <Link
              href={href}
              className="eyebrow text-green hover:text-bronze transition-colors inline-flex items-center gap-2"
            >
              View all <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <NavDropdown
            label="Doors"
            href="/services/sliding-door"
            items={site.nav.doors}
            cols={1}
          />
          <NavDropdown
            label="Windows"
            href="/services/ht102"
            items={site.nav.windows}
            cols={2}
          />
          <Link
            href="/about-us"
            className="eyebrow eyebrow-muted hover:text-bronze transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="eyebrow eyebrow-muted hover:text-bronze transition-colors"
          >
            Contact
          </Link>
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
