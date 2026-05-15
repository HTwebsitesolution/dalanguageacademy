import type { Metadata } from "next";
import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { ContactApplyForm } from "@/components/forms/contact-apply-form";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { siteContent } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact / Apply",
  description:
    "Contact D.A Language Academy by WhatsApp, phone, email, or the frontend-only application form for English training in Niamey.",
  path: "/contact",
});

const methodIcons = [MessageCircleMore, Phone, Mail, MapPin];

export default function ContactPage() {
  const { contactPage, contact } = siteContent;

  return (
    <>
      <Reveal>
        <PageHero
          eyebrow={contactPage.hero.eyebrow}
          title={contactPage.hero.title}
          description={contactPage.hero.description}
          primaryAction={contactPage.hero.primaryAction}
          secondaryAction={contactPage.hero.secondaryAction}
          stats={contactPage.hero.stats}
        />
      </Reveal>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={contactPage.intro.eyebrow}
              title={contactPage.intro.title}
              description={contactPage.intro.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactPage.methods.map((method, index) => {
              const Icon = methodIcons[index];

              return (
                <Reveal key={method.title} delay={index * 0.05}>
                  <Card className="h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-700)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[color:var(--color-slate-900)]">
                      {method.title}
                    </h3>

                    {method.title === "Phone" ? (
                      <div className="mt-3 space-y-2">
                        {contact.phoneNumbers.map((phone) => (
                          <Link
                            key={phone.href}
                            href={phone.href}
                            className="block text-sm font-medium text-[color:var(--color-brand-700)] underline-offset-4 hover:underline"
                          >
                            {phone.label}
                          </Link>
                        ))}
                      </div>
                    ) : method.title === "Email" ? (
                      <Link
                        href={contact.email.href}
                        className="mt-3 block text-sm font-medium text-[color:var(--color-brand-700)] underline-offset-4 hover:underline"
                      >
                        {contact.email.label}
                      </Link>
                    ) : method.title === "Location" ? (
                      <p className="mt-3 text-sm font-medium text-[color:var(--color-slate-900)]">
                        {method.label}
                      </p>
                    ) : (
                      <Link
                        href={method.href}
                        className="mt-3 block text-sm font-medium text-[color:var(--color-brand-700)] underline-offset-4 hover:underline"
                      >
                        {method.label}
                      </Link>
                    )}

                    <p className="mt-4 text-sm leading-7 text-[color:var(--color-slate-600)]">
                      {method.description}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <Reveal>
              <Card className="h-full border-[color:var(--color-brand-200)]">
                <SectionHeader
                  eyebrow="Application form"
                  title="Share your details and preferred contact route."
                  description="The form is polished and ready for future integration, but it does not submit to a backend yet."
                />

                <div className="mt-8">
                  <ContactApplyForm
                    learnerTypes={contactPage.form.learnerTypes}
                    programmeInterests={contactPage.form.programmeInterests}
                    preferredContactMethods={contactPage.form.preferredContactMethods}
                    submitMessage={contactPage.form.submitMessage}
                    guidanceNote={contactPage.form.guidanceNote}
                  />
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card tone="muted" className="h-full">
                <div className="mb-6 flex items-center gap-4">
                  <BrandLogo variant="contact" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-300)]">
                    Direct contact
                  </p>
                </div>
                <h2 className="mt-5 font-display text-4xl leading-tight text-white">
                  Reach the academy directly while online form connection is still pending.
                </h2>
                <p className="mt-4 text-base leading-7 text-white/75">
                  For now, the fastest action routes remain WhatsApp, direct phone contact, and email.
                </p>

                <div className="mt-8 space-y-4">
                  <Link
                    href={contact.whatsappHref}
                    className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/85"
                  >
                    {contactPage.hero.primaryAction.label}
                  </Link>
                  {contact.phoneNumbers.map((phone) => (
                    <Link
                      key={phone.href}
                      href={phone.href}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/85"
                    >
                      {phone.label}
                    </Link>
                  ))}
                  <Link
                    href={contact.email.href}
                    className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/85"
                  >
                    {contact.email.label}
                  </Link>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/85">
                    {contactPage.methods[3]?.label}
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

    </>
  );
}
