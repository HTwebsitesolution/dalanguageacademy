import type { Metadata } from "next";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { siteContent } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about D.A Language Academy, its mission, values, CEFR-based structure, and practical English training approach in Niamey.",
  path: "/about",
});

export default function AboutPage() {
  const { aboutPage } = siteContent;

  return (
    <>
      <Reveal>
        <PageHero
          eyebrow={aboutPage.hero.eyebrow}
          title={aboutPage.hero.title}
          description={aboutPage.hero.description}
          primaryAction={aboutPage.hero.primaryAction}
          secondaryAction={aboutPage.hero.secondaryAction}
          stats={aboutPage.hero.stats}
        />
      </Reveal>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
            <Reveal>
              <Card tone="accent" className="h-full">
                <SectionHeader
                  eyebrow={aboutPage.intro.eyebrow}
                  title={aboutPage.intro.title}
                  description={aboutPage.intro.description}
                />
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="h-full">
                <SectionHeader
                  eyebrow={aboutPage.mission.eyebrow}
                  title={aboutPage.mission.title}
                  description={aboutPage.mission.description}
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {siteContent.audiences.map((audience) => (
                    <div
                      key={audience.title}
                      className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-slate-50)] px-4 py-4"
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

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <Reveal>
              <Card tone="accent" className="h-full">
                <SectionHeader
                  eyebrow="Official academy crest"
                  title="A trusted English academy with a clear academic identity."
                  description="The D.A Language Academy crest reflects structured teaching, professional standards, and a serious commitment to practical English communication in Niamey."
                />
                <p className="mt-6 text-sm leading-7 text-[color:var(--color-slate-600)]">
                  Established in 2022, the academy supports university students, professionals,
                  adult learners, and organisations through CEFR-based programmes and weekly UK
                  coaching discussions.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex justify-center lg:justify-end">
                <BrandLogo variant="full" priority />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={aboutPage.differentiators.eyebrow}
              title={aboutPage.differentiators.title}
              description={aboutPage.differentiators.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {aboutPage.differentiators.items.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <Card className="h-full">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-gold-600)]">
                    Point {index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[color:var(--color-slate-900)]">
                    {item}
                  </h3>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <Card tone="muted" className="h-full">
                <SectionHeader
                  eyebrow={aboutPage.values.eyebrow}
                  title={aboutPage.values.title}
                  description={aboutPage.values.description}
                  tone="light"
                />
              </Card>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {aboutPage.values.items.map((value, index) => (
                <Reveal key={value} delay={index * 0.05}>
                  <Card className="h-full text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-brand-700)]">
                      Value {index + 1}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold text-[color:var(--color-slate-900)]">
                      {value}
                    </h3>
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
              eyebrow={aboutPage.skillsSection.eyebrow}
              title={aboutPage.skillsSection.title}
              description={aboutPage.skillsSection.description}
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

      <CTASection
        eyebrow={aboutPage.cta.eyebrow}
        title={aboutPage.cta.title}
        description={aboutPage.cta.description}
        primaryAction={aboutPage.cta.primaryAction}
        secondaryAction={aboutPage.cta.secondaryAction}
      />
    </>
  );
}
