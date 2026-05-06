import Script from "next/script";
import { env } from "@/lib/env";

/**
 * Loads Google Analytics 4 only if NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
 * No-ops in dev (and during builds without the env var), so you can
 * safely wire this in now and turn it on later by setting the env var.
 */
export function GoogleAnalytics() {
  const id = env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
