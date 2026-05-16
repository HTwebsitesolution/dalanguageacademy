"use client";

import Link from "next/link";

import { useSiteContent } from "@/hooks/use-site-content";

const linkClassName =
  "block rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/85 transition hover:border-white/20 hover:bg-white/10";

/** Contact shortcuts for dark panels on Home and Contact only. */
export function DirectContactLinks() {
  const { contact } = useSiteContent();

  return (
    <div className="space-y-4">
      <Link href={contact.whatsappHref} className={linkClassName}>
        {contact.whatsappLabel}
      </Link>
      {contact.phoneNumbers.map((phone) => (
        <Link key={phone.href} href={phone.href} className={linkClassName}>
          {phone.label}
        </Link>
      ))}
      <Link href={contact.adminEmail.href} className={linkClassName}>
        {contact.adminEmail.label}
      </Link>
      <Link href={contact.email.href} className={linkClassName}>
        {contact.email.label}
      </Link>
    </div>
  );
}
