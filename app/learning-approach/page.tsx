import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { siteContent } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Learning Approach",
  description:
    "See how D.A Language Academy teaches listening, speaking, reading, writing, and grammar through practical methods and guided communication practice.",
  path: "/learning-approach",
});

export default function LearningApproachPage() {
  const { learningApproachPage } = siteContent;

  return (
    <>
      <Reveal>
        <PageHero
          eyebrow={learningApproachPage.hero.eyebrow}
          title={learningApproachPage.hero.title}
          description={learningApproachPage.hero.description}
          primaryAction={learningApproachPage.hero.primaryAction}
          secondaryAction={learningApproachPage.hero.secondaryAction}
          stats={learningApproachPage.hero.stats}
        />
      </Reveal>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={learningApproachPage.skillsSection.eyebrow}
              title={learningApproachPage.skillsSection.title}
              description={learningApproachPage.skillsSection.description}
              align="center"
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {siteContent.skills.map((skill, index) => (
              <Reveal key={skill.title} delay={index * 0.05}>
                <Card className="h-full text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-brand-700)] text-lg font-semibold text-white">
                    {skill.title.charAt(0)}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[color:var(--color-slate-900)]">
                    {skill.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--color-slate-600)]">
                    {skill.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <Reveal>
              <Card tone="muted" className="h-full">
                <SectionHeader
                  eyebrow={learningApproachPage.methodsSection.eyebrow}
                  title={learningApproachPage.methodsSection.title}
                  description={learningApproachPage.methodsSection.description}
                  tone="light"
                />
              </Card>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {siteContent.approach.methods.map((method, index) => (
                <Reveal key={method} delay={index * 0.05}>
                  <Card className="h-full">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-brand-700)]">
                      Method {index + 1}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold text-[color:var(--color-slate-900)]">
                      {method}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-slate-600)]">
                      Practical content like this helps learners connect English study to real comprehension and stronger expression.
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={learningApproachPage.principlesSection.eyebrow}
              title={learningApproachPage.principlesSection.title}
              description={learningApproachPage.principlesSection.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {siteContent.learningPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.06}>
                <Card className="h-full border-[color:var(--color-brand-200)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-gold-600)]">
                    Principle {index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[color:var(--color-slate-900)]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-slate-600)]">
                    {principle.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow={learningApproachPage.cta.eyebrow}
        title={learningApproachPage.cta.title}
        description={learningApproachPage.cta.description}
        primaryAction={learningApproachPage.cta.primaryAction}
        secondaryAction={learningApproachPage.cta.secondaryAction}
      />
    </>
  );
}
