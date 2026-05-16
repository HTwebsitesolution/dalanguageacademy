import { LocaleLink } from "@/components/layout/locale-link";
import { Container } from "@/components/ui/container";

type HeroStat = {
  value: string;
  label: string;
};

type HeroAction = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  titleLines?: readonly string[];
  description: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  stats: readonly HeroStat[];
  statsCardTitle?: string;
};

export function PageHero({
  eyebrow,
  title,
  titleLines,
  description,
  primaryAction,
  secondaryAction,
  stats,
  statsCardTitle = "Why learners choose D.A Academy",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(24,42,91,0.16),transparent_62%)]" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-[color:var(--color-brand-200)] bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-700)] backdrop-blur">
              {eyebrow}
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl font-display text-[2.95rem] leading-[0.98] tracking-[-0.03em] text-[color:var(--color-slate-900)] sm:text-[3.7rem] lg:text-[4.4rem] xl:text-[4.9rem]">
                {titleLines?.length ? (
                  titleLines.map((line) => (
                    <span key={line} className="sm:block">
                      {line}
                    </span>
                  ))
                ) : (
                  title
                )}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--color-slate-600)] sm:text-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <LocaleLink
                href={primaryAction.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-brand-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-brand-800)] sm:w-auto"
              >
                {primaryAction.label}
              </LocaleLink>
              <LocaleLink
                href={secondaryAction.href}
                className="inline-flex w-full items-center justify-center rounded-full border border-[color:var(--color-border-strong)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-slate-900)] transition hover:border-[color:var(--color-brand-300)] hover:text-[color:var(--color-brand-700)] sm:w-auto"
              >
                {secondaryAction.label}
              </LocaleLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,244,251,0.92))] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:p-8">
            <div className="rounded-[1.5rem] bg-[color:var(--color-slate-900)] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold-300)]">
                {statsCardTitle}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="break-words text-xl font-semibold leading-tight text-white sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 break-words text-sm leading-6 text-white/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
