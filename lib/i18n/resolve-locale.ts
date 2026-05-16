import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

export function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}
