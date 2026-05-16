import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { Navbar } from "@/components/layout/navbar";
import { SetHtmlLang } from "@/components/layout/set-html-lang";
import { getSiteContent } from "@/content";
import { isLocale, locales } from "@/lib/i18n/config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const siteContent = getSiteContent(locale);

  return (
  <>
    <SetHtmlLang locale={locale} />
    <a
      href="#main-content"
      className="sr-only absolute left-4 top-4 z-[60] rounded-full bg-[color:var(--color-brand-700)] px-4 py-2 text-sm font-semibold text-white focus:not-sr-only"
    >
      {siteContent.ui.skipToContent}
    </a>
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  </>
  );
}
