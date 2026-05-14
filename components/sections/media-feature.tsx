import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

type MediaFeatureProps = {
  eyebrow: string;
  title: string;
  description: string;
  placeholderLabel: string;
  altTextHint: string;
  note: string;
};

export function MediaFeature({
  eyebrow,
  title,
  description,
  placeholderLabel,
  altTextHint,
  note,
}: MediaFeatureProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <Card className="h-full border-[color:var(--color-brand-200)]">
            <SectionHeader eyebrow={eyebrow} title={title} description={description} />
            <p className="mt-6 text-sm leading-7 text-[color:var(--color-slate-600)]">
              {note}
            </p>
          </Card>

          <Card className="h-full overflow-hidden">
            <div className="rounded-[1.75rem] border border-dashed border-[color:var(--color-brand-300)] bg-[linear-gradient(180deg,rgba(244,247,253,0.95),rgba(231,238,251,0.85))] p-6">
              <div className="flex min-h-72 items-center justify-center rounded-[1.4rem] border border-[color:var(--color-border)] bg-white/70 px-6 py-8 text-center">
                <div className="max-w-sm space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-700)]">
                    Future media placeholder
                  </p>
                  <h3 className="font-display text-3xl leading-tight text-[color:var(--color-slate-900)]">
                    {placeholderLabel}
                  </h3>
                  <p className="text-sm leading-7 text-[color:var(--color-slate-600)]">
                    Alt text placeholder for future media:
                  </p>
                  <p className="rounded-2xl bg-[color:var(--color-slate-50)] px-4 py-4 text-sm leading-7 text-[color:var(--color-slate-700)]">
                    {altTextHint}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
