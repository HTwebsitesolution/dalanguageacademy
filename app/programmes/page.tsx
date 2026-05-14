import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { MediaFeature } from "@/components/sections/media-feature";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { siteContent } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Programmes",
  description:
    "Explore practical CEFR-based English programmes in Niamey with a 3-month structure, tests, certificates, and support for students and professionals.",
  path: "/programmes",
});

export default function ProgrammesPage() {
  const { programmesPage } = siteContent;

  return (
    <>
      <Reveal>
        <PageHero
          eyebrow={programmesPage.hero.eyebrow}
          title={programmesPage.hero.title}
          description={programmesPage.hero.description}
          primaryAction={programmesPage.hero.primaryAction}
          secondaryAction={programmesPage.hero.secondaryAction}
          stats={programmesPage.hero.stats}
        />
      </Reveal>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={programmesPage.pathway.eyebrow}
              title={programmesPage.pathway.title}
              description={programmesPage.pathway.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {siteContent.programmePathway.map((stage, index) => (
              <Reveal key={stage.level} delay={index * 0.06}>
                <Card className="h-full">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-600)]">
                    {stage.level}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[color:var(--color-slate-900)]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-slate-600)]">
                    {stage.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <MediaFeature {...siteContent.placeholderContent.programmesMedia} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <Reveal>
              <div>
                <SectionHeader
                  eyebrow="Core programme facts"
                  title="A 3-month structure with clear value and practical support."
                  description="The programme is designed to be transparent, accessible, and easy to understand for learners and organisations comparing options."
                />

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {siteContent.programmeFacts.map((fact, index) => (
                    <Reveal key={fact.label} delay={index * 0.05}>
                      <Card className="h-full">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-brand-700)]">
                          {fact.label}
                        </p>
                        <p className="mt-4 text-2xl font-semibold text-[color:var(--color-slate-900)]">
                          {fact.value}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[color:var(--color-slate-600)]">
                          {fact.detail}
                        </p>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Card tone="muted" className="h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-300)]">
                  Included and supported
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "Tests and certificates included",
                    "Student discounts available",
                    "2 sessions per week for students",
                    "2 sessions per week for professionals",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/80"
                    >
                      {item}
                    </div>
                  ))}
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
              eyebrow={programmesPage.schedule.eyebrow}
              title={programmesPage.schedule.title}
              description={programmesPage.schedule.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              {siteContent.programmeTracks.map((track, index) => (
                <Reveal key={track.title} delay={index * 0.06}>
                  <Card className="h-full">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-brand-700)]">
                      {track.title}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-[color:var(--color-slate-900)]">
                      {track.schedule}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[color:var(--color-slate-600)]">
                      {track.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08}>
              <Card tone="accent" className="h-full">
                <SectionHeader
                  eyebrow={programmesPage.audienceSection.eyebrow}
                  title={programmesPage.audienceSection.title}
                  description={programmesPage.audienceSection.description}
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {siteContent.audiences.map((audience) => (
                    <div
                      key={audience.title}
                      className="rounded-2xl border border-[color:var(--color-brand-200)] bg-white px-4 py-4"
                    >
                      <h3 className="text-lg font-semibold text-[color:var(--color-slate-900)]">
                        {audience.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--color-slate-600)]">
                        {audience.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow={programmesPage.cta.eyebrow}
        title={programmesPage.cta.title}
        description={programmesPage.cta.description}
        primaryAction={programmesPage.cta.primaryAction}
        secondaryAction={programmesPage.cta.secondaryAction}
      />
    </>
  );
}
