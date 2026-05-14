import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { Navbar } from "@/components/layout/navbar";
import { MotionProvider } from "@/components/motion/motion-provider";
import { siteContent } from "@/content/site";

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
  title: {
    default: siteContent.brand.name,
    template: `%s | ${siteContent.brand.name}`,
  },
  description: siteContent.brand.description,
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
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
