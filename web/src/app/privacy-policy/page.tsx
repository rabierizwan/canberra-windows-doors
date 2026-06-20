import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Canberra Windows & Doors collects, uses, and protects your personal information under the Australian Privacy Principles.",
};

const EFFECTIVE_DATE = "3 May 2021";
const LAST_UPDATED = "6 June 2026";
const PRIVACY_EMAIL = "info@canberrawindowsdoors.com.au";

/** Small reusable section heading — matches the T&Cs page style. */
function SectionHeading({ num, title }: { num: number; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-5">
      <span className="eyebrow text-bronze tabular-nums">
        {num.toString().padStart(2, "0")}
      </span>
      <h2 className="font-display text-2xl md:text-3xl text-green leading-tight">
        {title}
      </h2>
    </div>
  );
}

/** Tidy bullet list used across multiple sections. */
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-green/80 leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[1.25rem_1fr] gap-x-2">
          <span className="text-bronze pt-1.5 leading-none">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-24 pb-16 border-b border-rule">
        <Container>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-8 h-px bg-bronze" />
            <span className="eyebrow">Legal</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-green leading-[1.05] max-w-3xl">
            Privacy Policy
          </h1>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm text-green/65">
            <div className="flex items-baseline gap-2">
              <dt className="eyebrow eyebrow-muted not-italic font-sans">
                Effective
              </dt>
              <dd>{EFFECTIVE_DATE}</dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="eyebrow eyebrow-muted not-italic font-sans">
                Last updated
              </dt>
              <dd>{LAST_UPDATED}</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 md:py-20">
        <Container>
          <p className="max-w-3xl text-lg text-green/80 leading-relaxed">
            Canberra Windows &amp; Doors (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you visit{" "}
            <a href={site.url} className="text-bronze hover:underline">
              {site.url.replace(/^https?:\/\//, "")}
            </a>{" "}
            or engage our services. We handle personal information in
            accordance with the Australian Privacy Principles under the{" "}
            <em>Privacy Act 1988 (Cth)</em>.
          </p>
        </Container>
      </section>

      {/* ── SECTIONS ── */}
      <section className="pb-20">
        <Container>
          <div className="max-w-3xl space-y-14">
            {/* 01 — Information We Collect */}
            <article id="section-1">
              <SectionHeading num={1} title="Information We Collect" />
              <div className="space-y-6">
                <div>
                  <h3 className="eyebrow eyebrow-muted not-italic font-sans mb-3">
                    a. Personal Information
                  </h3>
                  <Bullets
                    items={[
                      "Name",
                      "Email address",
                      "Phone number",
                      "Postal address",
                      "Project details, and any other information you provide when filling out forms on our website or contacting us directly",
                    ]}
                  />
                </div>
                <div>
                  <h3 className="eyebrow eyebrow-muted not-italic font-sans mb-3">
                    b. Non-Personal Information
                  </h3>
                  <Bullets
                    items={[
                      "IP address",
                      "Browser type and version",
                      "Device information",
                      "Pages visited and time spent on our website",
                      "Referring website addresses",
                    ]}
                  />
                </div>
              </div>
            </article>

            {/* 02 — How We Use Your Information */}
            <article id="section-2">
              <SectionHeading num={2} title="How We Use Your Information" />
              <Bullets
                items={[
                  "Provide, operate and improve our products and services",
                  "Respond to your enquiries, prepare quotations, and arrange supply (and installation on request)",
                  "Manage your order and keep you informed about your project",
                  "Send updates or news where you have asked to receive them",
                  "Analyse website usage to improve your experience",
                  "Meet our legal obligations and enforce our terms and conditions",
                ]}
              />
            </article>

            {/* 03 — Sharing Your Information */}
            <article id="section-3">
              <SectionHeading num={3} title="Sharing Your Information" />
              <p className="text-green/80 leading-relaxed mb-4">
                We do not sell or rent your personal information. We may share
                it in the following circumstances:
              </p>
              <dl className="space-y-3 text-green/80 leading-relaxed">
                <div>
                  <dt className="font-medium text-green">Service Providers</dt>
                  <dd>
                    Trusted third parties who help us operate, such as website
                    hosting and email services.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-green">Legal Compliance</dt>
                  <dd>Where required by law, regulation, or legal process.</dd>
                </div>
                <div>
                  <dt className="font-medium text-green">Business Transfers</dt>
                  <dd>
                    In connection with any merger, sale, or transfer of assets.
                  </dd>
                </div>
              </dl>
            </article>

            {/* 04 — Cookies and Tracking Technologies */}
            <article id="section-4">
              <SectionHeading
                num={4}
                title="Cookies and Tracking Technologies"
              />
              <p className="text-green/80 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing
                experience and collect non-personal information. You can manage
                your cookie preferences through your browser settings.
              </p>
            </article>

            {/* 05 — Third-Party Links */}
            <article id="section-5">
              <SectionHeading num={5} title="Third-Party Links" />
              <p className="text-green/80 leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for their privacy practices or content.
              </p>
            </article>

            {/* 06 — Data Security */}
            <article id="section-6">
              <SectionHeading num={6} title="Data Security" />
              <p className="text-green/80 leading-relaxed">
                We implement reasonable security measures to protect personal
                information from unauthorised access, disclosure, alteration, or
                destruction. No method of data transmission or storage is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </article>

            {/* 07 — Your Rights */}
            <article id="section-7">
              <SectionHeading num={7} title="Your Rights" />
              <Bullets
                items={[
                  "Access the personal information we hold about you",
                  "Request corrections to that information",
                  "Request deletion of your information",
                  "Opt out of certain communications",
                ]}
              />
              <p className="mt-4 text-green/80 leading-relaxed">
                To exercise these rights, contact us at{" "}
                <a
                  href={`mailto:${PRIVACY_EMAIL}`}
                  className="text-bronze hover:underline"
                >
                  {PRIVACY_EMAIL}
                </a>
                .
              </p>
            </article>

            {/* 08 — Changes to This Privacy Policy */}
            <article id="section-8">
              <SectionHeading
                num={8}
                title="Changes to This Privacy Policy"
              />
              <p className="text-green/80 leading-relaxed">
                We reserve the right to update this Privacy Policy at any time.
                Changes take effect immediately upon posting on this page.
              </p>
            </article>

            {/* 09 — Contact Us */}
            <article id="section-9">
              <SectionHeading num={9} title="Contact Us" />
              <dl className="border-t border-rule divide-y divide-rule">
                <div className="grid grid-cols-[6rem_1fr] gap-x-4 py-3">
                  <dt className="eyebrow eyebrow-muted not-italic">Website</dt>
                  <dd>
                    <a
                      href={site.url}
                      className="text-green hover:text-bronze transition-colors break-words"
                    >
                      {site.url.replace(/^https?:\/\//, "")}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-x-4 py-3">
                  <dt className="eyebrow eyebrow-muted not-italic">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${PRIVACY_EMAIL}`}
                      className="text-green hover:text-bronze transition-colors"
                    >
                      {PRIVACY_EMAIL}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-x-4 py-3">
                  <dt className="eyebrow eyebrow-muted not-italic">Phone</dt>
                  <dd>
                    <a
                      href={site.contact.phonePrimaryHref}
                      className="text-green hover:text-bronze transition-colors"
                    >
                      {site.contact.phonePrimary}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-x-4 py-3">
                  <dt className="eyebrow eyebrow-muted not-italic">Address</dt>
                  <dd className="text-green">
                    16 Chaloupka St, Whitlam ACT 2611, Australia
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
