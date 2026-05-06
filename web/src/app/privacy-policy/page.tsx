import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <Container>
        <h1 className="font-display text-5xl text-ink">Privacy Policy</h1>
        <div className="mt-8 prose-style space-y-4 text-ink/75 max-w-3xl">
          <p>
            Full privacy policy text will be added here. Source content lives
            in <code>/content/legal/privacy-policy.md</code>.
          </p>
        </div>
      </Container>
    </section>
  );
}
