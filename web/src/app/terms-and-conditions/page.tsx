import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms governing use of this website and our services.",
};

export default function TermsPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-bronze" />
          <span className="eyebrow">Legal</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-green">
          Terms &amp; Conditions
        </h1>
        <div className="mt-10 space-y-4 text-green/75 max-w-3xl leading-relaxed">
          <p>
            Full terms text will be added here. Source content lives in{" "}
            <code className="text-bronze">/content/legal/terms-and-conditions.md</code>.
          </p>
        </div>
      </Container>
    </section>
  );
}
