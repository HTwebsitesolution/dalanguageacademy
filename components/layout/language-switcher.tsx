"use client";

import { useRouter } from "next/navigation";

import { localeLabels, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { useLocalePath } from "@/hooks/use-locale-path";

const LOCALE_COOKIE = "NEXT_LOCALE";

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const { locale, switchPath } = useLocalePath();

  const switchLocale = (target: Locale) => {
    if (target === locale) return;
    setLocaleCookie(target);
    router.push(switchPath(target));
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--color-border-strong)] bg-white/90 p-0.5 text-xs font-semibold",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["en", "fr"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "rounded-full px-3 py-1.5 transition",
            locale === code
              ? "bg-[color:var(--color-brand-700)] text-white"
              : "text-[color:var(--color-slate-600)] hover:text-[color:var(--color-brand-700)]",
          )}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
