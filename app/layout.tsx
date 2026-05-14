import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { Navbar } from "@/components/layout/navbar";
import { MotionProvider } from "@/components/motion/motion-provider";
import { siteMetadata } from "@/lib/metadata";

import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body-source",
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display-source",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.siteTitle,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.siteTitle,
    description: siteMetadata.description,
    siteName: siteMetadata.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.siteTitle,
    description: siteMetadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="antialiased">
        <MotionProvider>
          <a
            href="#main-content"
            className="sr-only absolute left-4 top-4 z-[60] rounded-full bg-[color:var(--color-brand-700)] px-4 py-2 text-sm font-semibold text-white focus:not-sr-only"
          >
            Skip to content
          </a>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
