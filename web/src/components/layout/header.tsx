"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Monogram source PNG dimensions (1536×1024 = 3:2)
const MONOGRAM_W = 1536;
const MONOGRAM_H = 1024;
// Base width at rest. Sized to feel like the centerpiece, not a footnote.
const MONOGRAM_BASE_WIDTH = 134;
const MONOGRAM_BASE_HEIGHT = Math.round(
  (MONOGRAM_BASE_WIDTH / MONOGRAM_W) * MONOGRAM_H,
);
// Scale applied when the page is scrolled. 0.75 keeps the mark readable
// and proportional to the surrounding nav text.
const SCROLLED_SCALE = 0.75;

type NavItem = { label: string; href: string };

/**
 * Hover/focus dropdown panel. CSS-only (no JS state) — uses named
 * Tailwind groups so it works as part of a server-rendered tree.
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
  const half = Math.ceil(items.length / 2);
  const left = cols === 2 ? items.slice(0, half) : items;
  const right = cols === 2 ? items.slice(half) : [];
  const colWidth = "min-w-[180px]";

  return (
    <div className="group/dropdown relative inline-flex items-center">
      <Link
        href={href}
        className="eyebrow eyebrow-muted hover:text-bronze group-hover/dropdown:text-bronze group-focus-within/dropdown:text-bronze transition-colors"
      >
        {label}
      </Link>

      <div
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 pt-5 z-50",
          "invisible opacity-0 translate-y-1",
          "group-hover/dropdown:visible group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0",
          "group-focus-within/dropdown:visible group-focus-within/dropdown:opacity-100 group-focus-within/dropdown:translate-y-0",
          "transition-all duration-200 ease-out motion-reduce:transition-none",
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
 * Adaptive header — Direction A (Architectural Lintel) blended with
 * Direction D (scroll-state).
 *
 * State 1 (top of page):
 *   - Deep-green utility strip with locations / phone / hours
 *   - Tall ivory main bar with centred CW&D lockup (monogram + bronze
 *     rule + wordmark) flanked by left + right nav
 *
 * State 2 (scrolled):
 *   - Utility strip collapses (height + opacity to 0)
 *   - Main bar tightens, monogram scales to 62%, wordmark hides
 *   - Same left/right nav layout — only the centerpiece changes
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* ─── Utility strip — slides up on scroll ─── */}
      <div
        aria-hidden={scrolled}
        className={cn(
          "bg-green-deep text-ivory overflow-hidden",
          "transition-[height,opacity] duration-300 ease-out motion-reduce:transition-none",
          scrolled ? "h-0 opacity-0" : "h-9 opacity-100",
        )}
      >
        <Container className="h-9 flex items-center justify-between text-[0.62rem] tracking-[0.22em] uppercase font-medium">
          <span className="inline-flex items-center gap-3 text-ivory/85">
            <span className="block w-1 h-1 rounded-full bg-bronze" aria-hidden />
            Canberra <span className="text-ivory/30">·</span> Sydney
          </span>
          <a
            href={site.contact.phonePrimaryHref}
            className="hidden sm:inline-block text-ivory hover:text-bronze-soft transition-colors"
          >
            {site.contact.phonePrimary}
          </a>
          <span className="hidden md:inline-block text-ivory/60">
            Mon – Fri · 8:00 – 18:00
          </span>
        </Container>
      </div>

      {/* ─── Main bar ───
          Extra bottom padding at rest accommodates the absolutely-positioned
          wordmark that hangs below the monogram (so the side nav can align
          with the monogram center, not the lockup's center). */}
      <div
        className={cn(
          "bg-ivory/90 backdrop-blur-md border-b border-rule",
          "transition-[padding] duration-300 ease-out motion-reduce:transition-none",
          scrolled ? "py-3" : "pt-5 pb-12",
        )}
      >
        <Container as="div" className="grid grid-cols-3 items-center">
          {/* ── LEFT NAV ── */}
          <nav
            aria-label="Products navigation"
            className="hidden md:flex items-center gap-10"
          >
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
          </nav>

          {/* ── CENTERED LOGO LOCKUP ──
              The monogram is the lockup's bounding box (so the row centers
              correctly with side nav). The wordmark hangs absolutely below
              and visually completes the lockup without affecting layout. */}
          <Link
            href="/"
            aria-label="Canberra Windows & Doors — home"
            className="relative flex flex-col items-center justify-self-center hover:opacity-80 transition-opacity"
          >
            {/* Monogram */}
            <div
              className="transition-transform duration-300 ease-out origin-center motion-reduce:transition-none"
              style={{ transform: scrolled ? `scale(${SCROLLED_SCALE})` : "scale(0.75)" }}
            >
              <Image
                src="/brand/monogram.png"
                alt="CW&D"
                width={MONOGRAM_BASE_WIDTH}
                height={MONOGRAM_BASE_HEIGHT}
                priority
                className="select-none"
              />
            </div>

            {/* Bronze rule + wordmark — absolute, hangs below the monogram.
                The monogram PNG has ~25% transparent padding above and below
                the visible "CW&D" artwork. Positioning at `top-full` would
                drop the wordmark at the bottom of that empty padding area,
                creating a visible gap. We instead anchor it at ~80% of the
                monogram box height — just below where the artwork actually
                ends — so the lockup reads as a single composed element. */}
            <div
              aria-hidden={scrolled}
              className={cn(
                "absolute left-1/2 -translate-x-1/2 flex flex-col items-center w-max",
                "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
                scrolled
                  ? "opacity-0 -translate-y-2 pointer-events-none"
                  : "opacity-100 translate-y-0",
              )}
              style={{ top: `${Math.round(MONOGRAM_BASE_HEIGHT * 0.8)}px` }}
            >
              <span className="block w-12 h-px bg-bronze" aria-hidden />
              <span className="mt-3 text-[0.6rem] tracking-[0.3em] uppercase text-bronze font-medium whitespace-nowrap">
                Canberra Windows &amp; Doors
              </span>
            </div>
          </Link>

          {/* ── RIGHT NAV ── */}
          <nav
            aria-label="Site navigation"
            className="hidden md:flex items-center justify-end gap-8"
          >
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
            <Button href="/request-a-quote" variant="primary" size="sm">
              Request a Quote
            </Button>
          </nav>

          {/* ── MOBILE: Quote-only on small screens (full nav drawer is Phase 1) ── */}
          <div className="md:hidden col-start-3 justify-self-end">
            <Button href="/request-a-quote" variant="primary" size="sm">
              Quote
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
