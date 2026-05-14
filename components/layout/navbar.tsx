"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

import { Container } from "../ui/container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-white/88 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
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

        <nav className="hidden items-center gap-7 lg:flex">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[color:var(--color-slate-600)] transition hover:text-[color:var(--color-brand-700)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-brand-700)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-brand-800)]"
          >
            Apply Online
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] text-[color:var(--color-slate-900)] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-[color:var(--color-border)] bg-white transition-[max-height] duration-300 lg:hidden",
          isOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-5 py-5">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[color:var(--color-slate-700)]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-brand-700)] px-5 py-3 text-sm font-semibold text-white"
            onClick={() => setIsOpen(false)}
          >
            Apply Online
          </Link>
        </Container>
      </div>
    </header>
  );
}
