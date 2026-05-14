import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { siteContent } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Organisations",
  description:
    "Professional English training in Niamey for NGOs, institutions, organisations, and teams seeking stronger communication support.",
  path: "/organisations",
});

export default function OrganisationsPage() {
  const { organisationsPage } = siteContent;

  return (
    <>
      <Reveal>
        <PageHero
          eyebrow={organisationsPage.hero.eyebrow}
          title={organisationsPage.hero.title}
          description={organisationsPage.hero.description}
          primaryAction={organisationsPage.hero.primaryAction}
          secondaryAction={organisationsPage.hero.secondaryAction}
          stats={organisationsPage.hero.stats}
        />
      </Reveal>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <Card tone="accent" className="h-full">
                <SectionHeader
                  eyebrow={organisationsPage.credibility.eyebrow}
                  title={organisationsPage.credibility.title}
                  description={organisationsPage.credibility.description}
                />
                <p className="mt-6 text-sm leading-7 text-[color:var(--color-slate-600)]">
                  {organisationsPage.credibility.note}
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card tone="muted" className="h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-300)]">
                  Organisations and institutions
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {organisationsPage.credibility.names.map((name) => (
                    <div
                      key={name}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/85"
                    >
                      {name}
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
              eyebrow={organisationsPage.serviceAreas.eyebrow}
              title={organisationsPage.serviceAreas.title}
              description={organisationsPage.serviceAreas.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {organisationsPage.serviceAreas.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <Card className="h-full">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-brand-700)]">
                    Focus area {index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[color:var(--color-slate-900)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-slate-600)]">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Future proof section"
              title="Prepared space for a future professional reference."
              description="A carefully selected quote from an organisation-linked learner or institutional contact can be added later here without changing the page structure."
            />
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <TestimonialCard {...siteContent.placeholderContent.organisationsTestimonial} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow={organisationsPage.cta.eyebrow}
        title={organisationsPage.cta.title}
        description={organisationsPage.cta.description}
        primaryAction={organisationsPage.cta.primaryAction}
        secondaryAction={organisationsPage.cta.secondaryAction}
      />
    </>
  );
}
