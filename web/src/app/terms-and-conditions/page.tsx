import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms governing use of this website and our services.",
};

export default function TermsPage() {
  return (
    <section className="py-24">
      <Container>
        <h1 className="font-display text-5xl text-ink">Terms &amp; Conditions</h1>
        <div className="mt-8 prose-style space-y-4 text-ink/75 max-w-3xl">
          <p>
            Full terms text will be added here. Source content lives in
            <code>/content/legal/terms-and-conditions.md</code>.
          </p>
        </div>
      </Container>
    </section>
  );
}
