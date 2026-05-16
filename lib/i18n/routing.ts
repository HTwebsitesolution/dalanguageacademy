import type { Locale } from "@/lib/i18n/config";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

export function withLocale(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = normalized === "/" ? "" : normalized;
  return `/${locale}${base}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : defaultLocale;
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  return withLocale(stripLocaleFromPathname(pathname), locale);
}

export { locales };
