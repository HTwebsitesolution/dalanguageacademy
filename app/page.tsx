import type { Metadata } from "next";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { MediaFeature } from "@/components/sections/media-feature";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { pageMedia } from "@/content/media-assets";
import { siteContent } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

const audienceIcons = [GraduationCap, BriefcaseBusiness, Users, Building2];

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description:
    "Practical English language training in Niamey for students, professionals and organisations. CEFR-based 3-month programmes with weekly online discussion sessions with UK-based coaches.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <CinematicHero />

      <section className="pb-10">
        <Container>
          <div className="grid gap-3 rounded-[2rem] border border-[color:var(--color-border)] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.trustStrip.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[1.5rem] bg-[color:var(--color-brand-50)] px-4 py-5 text-center text-sm font-semibold text-[color:var(--color-brand-700)]">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <MediaFeature {...pageMedia.home.academy} />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Learner and partner context"
              title="Real training environments behind the academy promise."
              description="Photos show the type of adult learners and organisation workshops D.A Language Academy supports. Approved quotes can be added when available."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {pageMedia.home.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.context} delay={index * 0.05}>
                <TestimonialCard {...testimonial} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="who-we-serve" className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Who we serve"
              title="Professional English learning for ambitious adults and institutions."
              description="D.A Language Academy is designed for learners and organisations that want practical progress, structured teaching, and a stronger command of English in real contexts."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.audiences.map((audience, index) => {
              const Icon = audienceIcons[index];

              return (
                <Reveal key={audience.title} delay={index * 0.05}>
                  <Card className="h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-700)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[color:var(--color-slate-900)]">
                      {audience.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[color:var(--color-slate-600)]">
                      {audience.description}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="programmes" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <Reveal>
              <SectionHeader
                eyebrow={siteContent.programmeOverview.eyebrow}
                title={siteContent.programmeOverview.title}
                description={siteContent.programmeOverview.description}
              />
            </Reveal>

            <Reveal delay={0.08}>
              <Card tone="accent">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-600)]">
                  Core facts
                </p>
                <div className="mt-6 space-y-5">
                  {siteContent.programmeFacts.map((fact, index) => (
                    <div
                      key={fact.label}
                      className={`flex items-start justify-between gap-4 pb-4 ${
                        index < siteContent.programmeFacts.length - 1
                          ? "border-b border-[color:var(--color-border)]"
                          : "pb-0"
                      }`}
                    >
                      <span className="text-sm font-medium text-[color:var(--color-slate-600)]">
                        {fact.label}
                      </span>
                      <span className="text-right text-sm font-semibold text-[color:var(--color-slate-900)]">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {siteContent.programmeOverview.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <Card className="h-full">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-700)]">
                    Pillar {index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[color:var(--color-slate-900)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-slate-600)]">
                    {pillar.description}
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
              eyebrow="Five English skills"
              title="A complete communication focus, not a narrow classroom experience."
              description="The programme develops the five language skills that adult learners need to communicate with greater accuracy, clarity, and confidence."
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

      <section id="approach" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <Card tone="muted" className="h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-300)]">
                  Learning methods
                </p>
                <h3 className="mt-5 font-display text-4xl leading-tight text-white">
                  English that feels useful from the start.
                </h3>
                <p className="mt-4 text-base leading-7 text-white/75">
                  Learners engage with relevant content and guided practice so progress is grounded in communication, not only theory.
                </p>
                <div className="mt-8 space-y-4">
                  {siteContent.approach.methods.map((method) => (
                    <div
                      key={method}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/80"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-6">
                <SectionHeader
                  eyebrow={siteContent.approach.eyebrow}
                  title={siteContent.approach.title}
                  description={siteContent.approach.description}
                />
                <Card className="border-[color:var(--color-brand-200)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-700)]">
                    Why this matters
                  </p>
                  <p className="mt-4 text-base leading-8 text-[color:var(--color-slate-600)]">
                    Adults improve faster when English is taught in context. D.A Language Academy connects grammar, vocabulary, and speaking practice to the situations learners actually face in study, work, and professional life.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-700)]"
                  >
                    Contact / Apply
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="uk-coaching" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <SectionHeader
                eyebrow={siteContent.ukCoaching.eyebrow}
                title={siteContent.ukCoaching.title}
                description={siteContent.ukCoaching.description}
              />
            </Reveal>

            <div className="grid gap-5">
              {siteContent.ukCoaching.highlights.map((item, index) => (
                <Reveal key={item} delay={index * 0.06}>
                  <Card tone="accent">
                    <p className="text-base leading-7 text-[color:var(--color-slate-700)]">
                      {item}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="organisations" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <Reveal>
              <Card className="h-full border-[color:var(--color-brand-200)] bg-[linear-gradient(180deg,#ffffff,#f8fafc)]">
                <SectionHeader
                  eyebrow={siteContent.organisations.eyebrow}
                  title={siteContent.organisations.title}
                  description={siteContent.organisations.description}
                />
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card tone="muted" className="h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-300)]">
                  Credibility teaser
                </p>
                <div className="mt-6 space-y-4">
                  {siteContent.organisations.highlights.map((item) => (
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

      <CTASection
        id="apply"
        eyebrow={siteContent.applyCta.eyebrow}
        title={siteContent.applyCta.title}
        description={siteContent.applyCta.description}
        primaryAction={siteContent.applyCta.primaryAction}
        secondaryAction={siteContent.applyCta.secondaryAction}
      />
    </>
  );
}
