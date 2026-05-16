"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useLocalePath } from "@/hooks/use-locale-path";
import { useSiteContent } from "@/hooks/use-site-content";
import { stripLocaleFromPathname } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";

import { Container } from "../ui/container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = stripLocaleFromPathname(pathname);
  const siteContent = useSiteContent();
  const { href } = useLocalePath();

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-white/88 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link href={href("/")} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-brand-700)] text-sm font-bold text-white">
            DA
          </div>
          <div>
            <p className="font-semibold text-[color:var(--color-slate-900)]">
              {siteContent.brand.name}
            </p>
            <p className="text-sm text-[color:var(--color-slate-500)]">
              {siteContent.brand.location}
            </p>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={href(item.href)}
              aria-current={currentPath === item.href ? "page" : undefined}
              className={cn(
                "text-sm font-medium transition hover:text-[color:var(--color-brand-700)]",
                currentPath === item.href
                  ? "text-[color:var(--color-brand-700)]"
                  : "text-[color:var(--color-slate-600)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <Link
            href={siteContent.contact.whatsappHref}
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-brand-700)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-brand-800)]"
          >
            {siteContent.ui.applyViaWhatsApp}
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] text-[color:var(--color-slate-900)] xl:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-[color:var(--color-border)] bg-white transition-[max-height] duration-300 xl:hidden",
          isOpen ? "max-h-[40rem]" : "max-h-0",
        )}
      >
        <Container aria-label="Mobile navigation" className="flex flex-col gap-5 py-5">
          <LanguageSwitcher className="self-start" />
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={href(item.href)}
              aria-current={currentPath === item.href ? "page" : undefined}
              className={cn(
                "text-sm font-medium",
                currentPath === item.href
                  ? "text-[color:var(--color-brand-700)]"
                  : "text-[color:var(--color-slate-700)]",
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteContent.contact.whatsappHref}
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-brand-700)] px-5 py-3 text-sm font-semibold text-white"
            onClick={() => setIsOpen(false)}
          >
            {siteContent.ui.applyViaWhatsApp}
          </Link>
        </Container>
      </div>
    </header>
  );
}
