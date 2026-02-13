import { defineRouting } from 'next-intl/routing'

export const locales = ['kr', 'en', 'fr', 'ru'] as const
export type Locales = (typeof locales)[number]

export const LANG_MAP: Record<Locales, string> = {
  kr: 'ko-KR',
  en: 'en-US',
  fr: 'fr-FR',
  ru: 'ru-RU',
}

export const routing = defineRouting({
  // 지원하는 모든 locale
  locales,

  // 기본 locale
  defaultLocale: 'kr',

  // locale prefix 전략
  localePrefix: 'as-needed',
})
