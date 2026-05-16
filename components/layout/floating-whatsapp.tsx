"use client";

import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

import { useSiteContent } from "@/hooks/use-site-content";

export function FloatingWhatsApp() {
  const siteContent = useSiteContent();

  return (
    <Link
      href={siteContent.contact.whatsappHref}
      aria-label={siteContent.contact.whatsappLabel}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[color:var(--color-whatsapp)] px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(18,140,126,0.35)] transition hover:translate-y-[-2px] hover:shadow-[0_24px_55px_rgba(18,140,126,0.42)]"
    >
      <MessageCircleMore className="h-5 w-5" />
      <span className="hidden sm:inline">{siteContent.contact.whatsappLabel}</span>
    </Link>
  );
}
