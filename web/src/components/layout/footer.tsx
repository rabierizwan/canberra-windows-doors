import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-green-deep text-ivory/80">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Logo variant="light" width={140} />
            <p className="mt-8 text-sm leading-relaxed text-ivory/60 max-w-xs">
              {site.footerTagline}
            </p>
          </div>

          {/* Doors */}
          <div className="md:col-span-2">
            <h3 className="eyebrow eyebrow-light not-italic font-sans">Doors</h3>
            <ul className="mt-5 space-y-3">
              {site.nav.doors.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Windows */}
          <div className="md:col-span-3">
            <h3 className="eyebrow eyebrow-light not-italic font-sans">Windows</h3>
            <ul className="mt-5 space-y-3">
              {site.nav.windows.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="md:col-span-3">
            <h3 className="eyebrow eyebrow-light not-italic font-sans">Visit Us</h3>
            <address className="mt-5 not-italic text-sm leading-relaxed">
              {site.address.street}
              <br />
              {site.address.suburb} {site.address.state} {site.address.postcode}
              <br />
              {site.address.country}
            </address>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a
                  href={site.contact.phonePrimaryHref}
                  className="hover:text-ivory transition-colors"
                >
                  {site.contact.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  className="hover:text-ivory transition-colors"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="text-ivory/50 pt-2">{site.hours.weekdays}</li>
              <li className="text-ivory/50">{site.hours.weekend}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-ivory/40">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-ivory transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-ivory transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
