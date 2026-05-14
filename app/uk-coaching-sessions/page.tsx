import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "UK Coaching Sessions",
  description:
    "See how D.A Language Academy supports weekly online speaking sessions with UK-based coaches for more confident English communication.",
};

export default function UKCoachingSessionsPage() {
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
                        <h2 className="mt-4 text-xl font-semibold text-[color:var(--color-slate-900)]">
                          {benefit}
                        </h2>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Card tone="muted" className="h-full overflow-hidden">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-300)]">
                  Online session view
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-white">
                  A modern video-call style experience designed for real speaking practice.
                </h2>
                <p className="mt-4 text-base leading-7 text-white/75">
                  Learners move beyond classroom-only interaction into a guided online discussion setting that feels current, dynamic, and internationally connected.
                </p>

                <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Weekly online speaking session
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                        UK-based coaching discussion
                      </p>
                    </div>
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                      Live session
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {ukCoachingPage.onlineSession.sessionTags.map((tag, index) => (
                      <div
                        key={tag}
                        className={`rounded-2xl border px-4 py-5 ${
                          index === 0
                            ? "border-[color:var(--color-gold-300)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))]"
                            : "border-white/10 bg-white/6"
                        }`}
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <div className="h-10 w-10 rounded-full bg-white/10" />
                          <div className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                        </div>
                        <p className="text-sm font-medium text-white/85">{tag}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3">
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
