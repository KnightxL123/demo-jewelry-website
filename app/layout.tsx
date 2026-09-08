import type { Metadata } from "next";
import { Jost, Playfair_Display } from "next/font/google";

import "./globals.css";
import { SiteFooter } from "@/components/site-footer";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darlings-finejewels-demo.example"),
  title: {
    default: "Darling's FineJewels by Candys — Fine Gold & Diamond Jewelry",
    template: "%s — Darling's FineJewels",
  },
  description:
    "Premium gold and diamond jewelry, imported and local, curated for life's most meaningful moments. Manila, Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
