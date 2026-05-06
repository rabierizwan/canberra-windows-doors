import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-bronze" />
          <span className="eyebrow">Legal</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-green">
          Privacy Policy
        </h1>
        <div className="mt-10 space-y-4 text-green/75 max-w-3xl leading-relaxed">
          <p>
            Full privacy policy text will be added here. Source content lives
            in <code className="text-bronze">/content/legal/privacy-policy.md</code>.
          </p>
        </div>
      </Container>
    </section>
  );
}
