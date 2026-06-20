import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms governing use of the Canberra Windows & Doors website and our products and services.",
};

/** Numbered T&Cs sections. Adding a section: append to the array; the page
 *  numbers and renders automatically. */
const SECTIONS: { title: string; clauses: string[] }[] = [
  {
    title: "Use of Website",
    clauses: [
      "A minimum age requirement of 18 years applies.",
      "You must use the website lawfully and must not infringe the rights of others or restrict their use of the website.",
      "We reserve the right to modify or discontinue the website, temporarily or permanently, without notice.",
    ],
  },
  {
    title: "Intellectual Property",
    clauses: [
      "All website content, including text, images, logos, and graphics, belongs to or is licensed to Canberra Windows & Doors and is protected by intellectual property laws.",
      "You may not reproduce, distribute, modify, or create derivative works of any content without our prior written consent.",
    ],
  },
  {
    title: "Product and Service Information",
    clauses: [
      "We aim for accuracy but make no guarantee that website content is complete or correct.",
      "All products and services are subject to availability and may be withdrawn or modified at our discretion.",
      "Prices and specifications are subject to change without notice. A written quotation sets out the price and specification for your project and takes precedence over general information on this website.",
    ],
  },
  {
    title: "Quotations, Orders and Payment",
    clauses: [
      "Quotations are based on the sizes, specifications and information available at the time. Please check your window and door sizes and layout carefully before accepting a quotation. Once a quotation is accepted, we are not responsible for any incorrect sizes provided by the customer or builder.",
      "A deposit of 40% is payable when you place an order. The balance is due within 7 days of delivery. Your order is confirmed once the deposit is received.",
      "Quotations exclude any government-imposed duties or taxes that may apply at the time of import. Where these apply, they will be itemised separately with supporting documentation.",
    ],
  },
  {
    title: "Delivery",
    clauses: [
      "The estimated lead time for delivery is 6 to 10 weeks from order confirmation and receipt of the deposit. Timeframes are estimates and not guarantees.",
      "Delivery is made to a safe, accessible point. Goods are not lifted to upper levels or carried over unsafe or unclear ground, and risk in the goods passes to the customer on delivery.",
      "Any damage must be reported to us within 48 hours of delivery.",
    ],
  },
  {
    title: "Installation",
    clauses: [
      "Installation is available on request and is quoted separately from supply.",
      "Where installation is not arranged with us, the customer is responsible for engaging a suitably qualified installer. Correct installation is essential to product performance and to any applicable warranty.",
    ],
  },
  {
    title: "Warranty and Aftercare",
    clauses: [
      "Products are covered by the applicable manufacturer warranty. Nothing in these Terms limits any rights you have under the Australian Consumer Law.",
      "We provide ongoing aftercare and maintenance only for windows and doors that we have installed. Products supplied by us but installed by others are not covered by our installation or maintenance service.",
      "Final cleaning of the windows and doors is the responsibility of the customer or builder. Protective film and tape must be removed by the builder within 3 months of installation.",
    ],
  },
  {
    title: "User-Generated Content",
    clauses: [
      "By submitting content, you grant Canberra Windows & Doors a non-exclusive, royalty-free, perpetual, and worldwide licence to use, reproduce, and display that content.",
      "You are solely responsible for the legality of submitted content and its compliance with third-party rights.",
    ],
  },
  {
    title: "Limitation of Liability",
    clauses: [
      "To the extent permitted by law, Canberra Windows & Doors is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the website.",
      "The website is provided “as is” without warranties of any kind, express or implied. Nothing in these Terms excludes, restricts or modifies any consumer guarantee, right or remedy that cannot lawfully be excluded under the Australian Consumer Law.",
    ],
  },
  {
    title: "Links to Third-Party Websites",
    clauses: [
      "External links are provided for convenience and do not imply endorsement.",
      "We assume no responsibility for the content or practices of third-party websites.",
    ],
  },
  {
    title: "Privacy",
    clauses: [
      "Our Privacy Policy governs how we collect, use, and protect your personal information, and forms part of these Terms.",
    ],
  },
  {
    title: "Governing Law",
    clauses: [
      "These Terms are governed by and construed in accordance with the laws of the Australian Capital Territory (ACT).",
      "Disputes fall under the exclusive jurisdiction of the courts of Canberra, ACT.",
    ],
  },
  {
    title: "Changes to Terms",
    clauses: [
      "Updates will appear on this page with the effective date noted.",
      "Continued use after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
];

const EFFECTIVE_DATE = "3 May 2021";
const LAST_UPDATED = "6 June 2026";

export default function TermsPage() {
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
            Terms &amp; Conditions
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
            Welcome to Canberra Windows &amp; Doors. These Terms and Conditions
            govern your use of our website,{" "}
            <a
              href={site.url}
              className="text-bronze hover:underline"
            >
              {site.url.replace(/^https?:\/\//, "")}
            </a>
            , and the products and services we provide. By accessing the website
            or engaging our services, you agree to these Terms. If you do not
            agree, please do not use the website or our services.
          </p>
        </Container>
      </section>

      {/* ── NUMBERED SECTIONS ── */}
      <section className="pb-20">
        <Container>
          <div className="max-w-3xl space-y-14">
            {SECTIONS.map((section, idx) => {
              const num = idx + 1;
              return (
                <article key={num} id={`section-${num}`}>
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="eyebrow text-bronze tabular-nums">
                      {num.toString().padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl text-green leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  <ol className="space-y-4">
                    {section.clauses.map((clause, ci) => (
                      <li
                        key={ci}
                        className="grid grid-cols-[3rem_1fr] gap-x-3 text-green/80 leading-relaxed"
                      >
                        <span className="eyebrow eyebrow-muted not-italic pt-1 tabular-nums">
                          {num}.{ci + 1}
                        </span>
                        <span>{clause}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              );
            })}

            {/* ── 14. Contact Us ── (rendered separately for richer formatting) */}
            <article id="section-14">
              <div className="flex items-baseline gap-4 mb-5">
                <span className="eyebrow text-bronze tabular-nums">14</span>
                <h2 className="font-display text-2xl md:text-3xl text-green leading-tight">
                  Contact Us
                </h2>
              </div>
              <dl className="border-t border-rule divide-y divide-rule">
                <div className="grid grid-cols-[6rem_1fr] gap-x-4 py-3">
                  <dt className="eyebrow eyebrow-muted not-italic">Email</dt>
                  <dd>
                    <a
                      href={`mailto:info@canberrawindowsdoors.com.au`}
                      className="text-green hover:text-bronze transition-colors"
                    >
                      info@canberrawindowsdoors.com.au
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
              </dl>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
