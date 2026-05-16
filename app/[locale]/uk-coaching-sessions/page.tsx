import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { getSiteContent } from "@/content";
import { getPageMedia } from "@/content/media-assets";
import { generateLocaleMetadata } from "@/lib/i18n/page-metadata";
import { resolveLocale } from "@/lib/i18n/resolve-locale";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  return generateLocaleMetadata(params, "ukCoaching");
}

export default async function UKCoachingSessionsPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale);
  const siteContent = getSiteContent(locale);
  const pageMedia = getPageMedia(locale);
  const { ukCoachingPage } = siteContent;

  return (
    <>
      <Reveal>
        <PageHero
          eyebrow={ukCoachingPage.hero.eyebrow}
          title={ukCoachingPage.hero.title}
          description={ukCoachingPage.hero.description}
          primaryAction={ukCoachingPage.hero.primaryAction}
          secondaryAction={ukCoachingPage.hero.secondaryAction}
          stats={ukCoachingPage.hero.stats}
          statsCardTitle={siteContent.pageHero.statsTitle}
        />
      </Reveal>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal>
              <div>
                <SectionHeader
                  eyebrow={ukCoachingPage.benefitsSection.eyebrow}
                  title={ukCoachingPage.benefitsSection.title}
                  description={ukCoachingPage.benefitsSection.description}
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {ukCoachingPage.benefits.map((benefit, index) => (
                    <Reveal key={benefit} delay={index * 0.05}>
                      <Card className="h-full">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-brand-700)]">
                          Benefit {index + 1}
                        </p>
                        <h3 className="mt-4 text-xl font-semibold text-[color:var(--color-slate-900)]">
                          {benefit}
                        </h3>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Card tone="muted" className="h-full overflow-hidden p-0">
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-300)]">
                    UK-linked coaching
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-white">
                    Real online discussion with international exposure.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/75">
                    Learners move beyond classroom-only interaction into guided online
                    discussion that connects Niamey-based training with UK-linked coaching
                    support.
                  </p>
                </div>

                <div className="relative aspect-[16/10]">
                  <Image
                    src={pageMedia.ukCoaching.session.src}
                    alt={pageMedia.ukCoaching.session.alt}
                    width={1200}
                    height={750}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-4 p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2">
                    {ukCoachingPage.onlineSession.sessionTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {ukCoachingPage.onlineSession.sessionPoints.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/80"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={ukCoachingPage.howItWorks.eyebrow}
              title={ukCoachingPage.howItWorks.title}
              description={ukCoachingPage.howItWorks.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {ukCoachingPage.howItWorks.steps.map((step, index) => (
              <Reveal key={step} delay={index * 0.06}>
                <Card className="h-full">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-gold-600)]">
                    Step {index + 1}
                  </p>
                  <p className="mt-4 text-lg font-semibold leading-8 text-[color:var(--color-slate-900)]">
                    {step}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow={ukCoachingPage.cta.eyebrow}
        title={ukCoachingPage.cta.title}
        description={ukCoachingPage.cta.description}
        primaryAction={ukCoachingPage.cta.primaryAction}
        secondaryAction={ukCoachingPage.cta.secondaryAction}
      />
    </>
  );
}
