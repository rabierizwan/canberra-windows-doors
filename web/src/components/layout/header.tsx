"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Monogram source PNG dimensions (1536×1024 = 3:2)
const MONOGRAM_W = 1536;
const MONOGRAM_H = 1024;
const MONOGRAM_BASE_WIDTH = 134;
const MONOGRAM_BASE_HEIGHT = Math.round(
  (MONOGRAM_BASE_WIDTH / MONOGRAM_W) * MONOGRAM_H,
);
const SCROLLED_SCALE = 0.75;

type NavItem = { label: string; href: string };

/**
 * Hover/focus dropdown panel. CSS-only — desktop only (hidden on mobile,
 * where the full mobile menu replaces it).
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
 * Adaptive header — desktop: editorial 3-column layout with dropdowns.
 * Mobile: centred monogram + hamburger that opens a full-screen drawer.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ── Scroll hysteresis — collapse utility strip when scrolled ─────
  useEffect(() => {
    const COLLAPSE_AT = 140;
    const EXPAND_AT = 20;

    const onScroll = () => {
      setScrolled((prev) => {
        if (!prev && window.scrollY > COLLAPSE_AT) return true;
        if (prev && window.scrollY < EXPAND_AT) return false;
        return prev;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── ESC closes the mobile menu ───────────────────────────────────
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // ── Lock body scroll while the menu is open ──────────────────────
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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
          <Container className="h-9 flex items-center justify-center md:justify-between gap-6 text-[0.62rem] tracking-[0.22em] uppercase font-medium">
            <span className="hidden md:inline-block text-ivory/60">
              Sat – Sun · By Appointment
            </span>
            <a
              href={site.contact.phonePrimaryHref}
              className="text-ivory hover:text-bronze-soft transition-colors"
            >
              {site.contact.phonePrimary}
            </a>
            <span className="hidden md:inline-block text-ivory/60">
              Mon – Fri · 8:00 – 18:00
            </span>
          </Container>
        </div>

        {/* ─── Main bar ───
            Mobile: 3-column grid with hamburger on right, logo centred.
            Desktop: 3-column with dropdowns on left + nav on right. */}
        <div
          className={cn(
            "bg-ivory/90 backdrop-blur-md border-b border-rule",
            "transition-[padding] duration-300 ease-out motion-reduce:transition-none",
            scrolled ? "py-1" : "pt-2 md:pt-0 pb-3 md:pb-4",
          )}
        >
          <Container as="div" className="grid grid-cols-3 items-center">
            {/* ── LEFT (desktop) — empty on mobile.
                 `col-start-1` is set explicitly so that when this nav is
                 `hidden` (mobile), the centered logo + hamburger don't
                 shift left into the empty cell. */}
            <nav
              aria-label="Products navigation"
              className="hidden md:flex items-center gap-10 col-start-1"
            >
              <NavDropdown
                label="Doors"
                href="/doors"
                items={site.nav.doors}
                cols={1}
              />
              <NavDropdown
                label="Windows"
                href="/windows"
                items={site.nav.windows}
                cols={1}
              />
            </nav>

            {/* ── CENTER — logo lockup (monogram always; wordmark desktop-only) ── */}
            <Link
              href="/"
              aria-label="Canberra Windows & Doors — home"
              className="relative flex flex-col items-center justify-self-center hover:opacity-80 transition-opacity col-start-2"
            >
              <div
                className="transition-transform duration-300 ease-out origin-center motion-reduce:transition-none"
                style={{
                  transform: scrolled
                    ? `scale(${SCROLLED_SCALE})`
                    : "scale(0.75)",
                }}
              >
                {/* Request a 2× source so the scaled-down render stays crisp
                    on retina mobile. `sizes` tells Next which width to ship;
                    quality bumped from default 75 → 95 for the brand mark. */}
                <Image
                  src="/brand/monogram.png"
                  alt="CW&D"
                  width={MONOGRAM_BASE_WIDTH * 2}
                  height={MONOGRAM_BASE_HEIGHT * 2}
                  sizes={`${MONOGRAM_BASE_WIDTH}px`}
                  quality={95}
                  priority
                  className="select-none"
                  // Width in CSS; height: 'auto' so the browser derives it
                  // from the source's natural aspect ratio (silences the
                  // next/image aspect-ratio warning).
                  style={{
                    width: MONOGRAM_BASE_WIDTH,
                    height: "auto",
                  }}
                />
              </div>

              {/* Wordmark — desktop only (overflows on mobile + adds clutter) */}
              <div
                aria-hidden={scrolled}
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center w-max",
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

            {/* ── RIGHT — desktop nav OR mobile hamburger.
                 `col-start-3` pins this to the last column so it always
                 sits flush right, even when the col-1 nav is hidden. */}
            <div className="flex items-center justify-end col-start-3">
              <nav
                aria-label="Site navigation"
                className="hidden md:flex items-center gap-10"
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
              </nav>

              {/* Hamburger — mobile only. 3 stacked bars, 44×44 tap target.
                   Integer h-[2px] avoids the sub-pixel blur of h-[1.5px]. */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] -mr-2 text-green hover:text-bronze transition-colors"
              >
                <span aria-hidden className="block w-6 h-[2px] bg-current rounded-full" />
                <span aria-hidden className="block w-6 h-[2px] bg-current rounded-full" />
                <span aria-hidden className="block w-6 h-[2px] bg-current rounded-full" />
              </button>
            </div>
          </Container>
        </div>
      </header>

      {/* ─── MOBILE MENU — full-screen drawer ─── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "fixed inset-0 z-[60] md:hidden",
          "transition-opacity duration-300 ease-out motion-reduce:transition-none",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Backdrop — tap to close */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          className="absolute inset-0 bg-green/40 backdrop-blur-sm cursor-default"
        />

        {/* Panel — slides in from right */}
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-full max-w-sm bg-ivory flex flex-col",
            "transition-transform duration-300 ease-out motion-reduce:transition-none",
            "shadow-[-12px_0_40px_-10px_rgba(20,31,24,0.18)]",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Top bar — small monogram + close */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-rule">
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Canberra Windows & Doors — home"
              className="block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/brand/monogram.png"
                alt="CW&D"
                width={MONOGRAM_BASE_WIDTH * 2}
                height={MONOGRAM_BASE_HEIGHT * 2}
                sizes="160px"
                quality={95}
                priority
                className="select-none"
                style={{ width: "5rem", height: "auto" }}
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="w-11 h-11 flex items-center justify-center text-2xl leading-none text-green hover:text-bronze transition-colors -mr-2"
            >
              <span aria-hidden>×</span>
            </button>
          </div>

          {/* Nav links — scrollable if tall */}
          <nav
            aria-label="Mobile navigation"
            className="flex-1 overflow-y-auto px-6 py-8 space-y-8"
          >
            {/* Doors */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-px bg-bronze" aria-hidden />
                <span className="eyebrow">Doors</span>
              </div>
              <ul className="space-y-3">
                {site.nav.doors.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block font-display text-xl text-green hover:text-bronze transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Windows */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-px bg-bronze" aria-hidden />
                <span className="eyebrow">Windows</span>
              </div>
              <ul className="space-y-3">
                {site.nav.windows.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block font-display text-xl text-green hover:text-bronze transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other pages */}
            <div className="border-t border-rule pt-6 space-y-3">
              <Link
                href="/about-us"
                onClick={closeMenu}
                className="block font-display text-xl text-green hover:text-bronze transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block font-display text-xl text-green hover:text-bronze transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Footer — phone + CTA */}
          <div className="border-t border-rule px-6 py-6 space-y-4">
            <a
              href={site.contact.phonePrimaryHref}
              onClick={closeMenu}
              className="block eyebrow text-green hover:text-bronze transition-colors"
            >
              Call {site.contact.phonePrimary}
            </a>
            <Button
              href="/request-a-quote"
              variant="primary"
              size="md"
              className="w-full"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
