import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://canberrawindowsdoors.com.au"),
  title: {
    default: "Canberra Windows & Doors | Premium Aluminium Windows & Doors in ACT",
    template: "%s | Canberra Windows & Doors",
  },
  description:
    "Premium aluminium windows and doors in Canberra. Sliding, folding and glazed doors; awning, hung, sliding and casement windows in the CWD80 Semi-Commercial Series or CWD100 Thermally Broken range. Trusted across the ACT for over a decade.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://canberrawindowsdoors.com.au",
    siteName: "Canberra Windows & Doors",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-green">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
