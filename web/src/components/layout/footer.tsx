import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80 mt-24">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-4">
            <div className="text-cream">
              <Logo />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-cream/70 max-w-xs">
              {site.tagline}. Premium aluminium windows and doors, made for the
              ACT climate.
            </p>
          </div>

          {/* Doors */}
          <div className="md:col-span-2">
            <h3 className="eyebrow text-cream/60 not-italic font-sans">Doors</h3>
            <ul className="mt-4 space-y-3">
              {site.nav.doors.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-cream transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Windows */}
          <div className="md:col-span-3">
            <h3 className="eyebrow text-cream/60 not-italic font-sans">Windows</h3>
            <ul className="mt-4 space-y-3">
              {site.nav.windows.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-cream transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="eyebrow text-cream/60 not-italic font-sans">Visit Us</h3>
            <address className="mt-4 not-italic text-sm leading-relaxed">
              {site.address.street}
              <br />
              {site.address.suburb} {site.address.state} {site.address.postcode}
              <br />
              {site.address.country}
            </address>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={site.contact.phonePrimaryHref}
                  className="hover:text-cream transition-colors"
                >
                  {site.contact.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  className="hover:text-cream transition-colors"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="text-cream/60 pt-2">{site.hours.weekdays}</li>
              <li className="text-cream/60">{site.hours.weekend}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-cream transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
