"use client";

import { useEffect, useRef, useState } from "react";

import { LocaleLink } from "@/components/layout/locale-link";
import { Container } from "@/components/ui/container";
import { useSiteContent } from "@/hooks/use-site-content";
import { cn } from "@/lib/utils";

/** Academy hero background — served from /public */
const HERO_VIDEO_SRC = "/videos/hero-section.mp4";

const FADE_SECONDS = 0.5;
const LOOP_GAP_MS = 100;

type HeroContent = ReturnType<typeof useSiteContent>["hero"];

function HeroProgrammeCard({
  stats,
  title,
}: {
  stats: HeroContent["stats"];
  title: string;
}) {
  return (
    <div className="hero-fade-rise hero-fade-rise-delay-4 rounded-[1.75rem] border border-white/15 bg-white/10 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-3">
      <div className="rounded-[1.35rem] bg-[color:var(--color-slate-900)]/90 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold-300)]">
          {title}
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
              <p className="mt-2 break-words text-sm leading-6 text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CinematicHeroVideo({
  src,
  enabled,
}: {
  src: string;
  enabled: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!enabled || failed) return;

    const video = videoRef.current;
    if (!video) return;

    let rafId = 0;
    let loopTimeout: ReturnType<typeof setTimeout> | undefined;

    const setOpacity = (value: number) => {
      video.style.opacity = String(Math.min(1, Math.max(0, value)));
    };

    const tick = () => {
      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const time = video.currentTime;

      if (time < FADE_SECONDS) {
        setOpacity(time / FADE_SECONDS);
      } else if (time > duration - FADE_SECONDS) {
        setOpacity((duration - time) / FADE_SECONDS);
      } else {
        setOpacity(1);
      }

      rafId = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      setOpacity(0);
      loopTimeout = setTimeout(() => {
        video.currentTime = 0;
        void video.play();
      }, LOOP_GAP_MS);
    };

    const handleCanPlay = () => {
      setOpacity(0);
      void video.play();
      rafId = requestAnimationFrame(tick);
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("canplay", handleCanPlay);

    if (video.readyState >= 2) {
      handleCanPlay();
    }

    return () => {
      cancelAnimationFrame(rafId);
      if (loopTimeout) clearTimeout(loopTimeout);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [enabled, failed]);

  if (!enabled || failed) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover opacity-0"
      autoPlay
      muted
      playsInline
      preload="metadata"
      aria-hidden
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function CinematicHero() {
  const { hero } = useSiteContent();
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionEnabled(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative isolate min-h-[min(100svh,56rem)] overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(145deg,var(--color-brand-800)_0%,#0a1228_42%,#060b18_100%)]"
        aria-hidden
      />

      <CinematicHeroVideo src={HERO_VIDEO_SRC} enabled={motionEnabled} />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(15,30,69,0.92)_0%,rgba(15,30,69,0.78)_38%,rgba(15,23,42,0.55)_68%,rgba(15,23,42,0.35)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(225,195,122,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(2,6,23,0.85),transparent)]"
        aria-hidden
      />

      <Container className="relative z-10 flex min-h-[min(100svh,56rem)] items-center py-28 sm:py-32">
        <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
          <div className="space-y-7 sm:space-y-8">
            <div className="hero-fade-rise inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold-300)] backdrop-blur-sm sm:text-sm">
              {hero.eyebrow}
            </div>

            <div className="hero-fade-rise hero-fade-rise-delay-1 space-y-5 sm:space-y-6">
              <h1 className="max-w-3xl font-display text-[2.6rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-[3.4rem] lg:text-[4rem] xl:text-[4.35rem]">
                {hero.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="max-w-xl text-base leading-8 text-white/82 sm:text-lg">
                {hero.description}
              </p>
            </div>

            <div className="hero-fade-rise hero-fade-rise-delay-2 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <LocaleLink
                href={hero.primaryCta.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-gold-300)] px-6 py-3.5 text-sm font-semibold text-[color:var(--color-brand-800)] transition hover:bg-[color:var(--color-gold-100)] sm:w-auto"
              >
                {hero.primaryCta.label}
              </LocaleLink>
              <LocaleLink
                href={hero.secondaryCta.href}
                className={cn(
                  "inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15 sm:w-auto",
                )}
              >
                {hero.secondaryCta.label}
              </LocaleLink>
            </div>

            <p className="hero-fade-rise hero-fade-rise-delay-3 max-w-xl text-sm leading-7 text-white/65">
              {hero.trustLine}
            </p>
          </div>

          <HeroProgrammeCard stats={hero.stats} title={hero.statsCardTitle} />
        </div>
      </Container>
    </section>
  );
}
