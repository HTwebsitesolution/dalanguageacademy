import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { siteContent } from "@/content/site";

import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-slate-950)] py-14 text-white">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.9fr]">
        <div className="space-y-4">
          <BrandLogo variant="footer" />
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-gold-300)]">
            {siteContent.brand.name}
          </p>
          <h2 className="font-display text-3xl leading-tight">
            {siteContent.brand.promise}
          </h2>
          <p className="max-w-xl text-base leading-7 text-white/70">
            {siteContent.brand.description}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            Explore
          </h3>
          <ul className="space-y-3">
            {siteContent.navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-white/75">
            {siteContent.contact.phoneNumbers.map((phone) => (
              <p key={phone.href}>
                <Link href={phone.href} className="break-words transition hover:text-white">
                  {phone.label}
                </Link>
              </p>
            ))}
            <p>
              <Link
                href={siteContent.contact.email.href}
                className="break-words transition hover:text-white"
              >
                {siteContent.contact.email.label}
              </Link>
            </p>
            <div>
              {siteContent.contact.locationLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
