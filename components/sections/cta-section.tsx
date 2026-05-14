import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

type CTASectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
};

export function CTASection({
  id,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: CTASectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-[linear-gradient(135deg,rgba(24,42,91,1),rgba(13,20,47,0.96))] px-6 py-10 text-white shadow-[0_28px_80px_rgba(11,18,39,0.25)] sm:px-8 sm:py-12 lg:px-12">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            tone="light"
            className="max-w-3xl"
          />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryAction.href}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-brand-800)] transition hover:bg-[color:var(--color-gold-100)] sm:w-auto"
            >
              {primaryAction.label}
            </Link>
            <Link
              href={secondaryAction.href}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/8 sm:w-auto"
            >
              {secondaryAction.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
