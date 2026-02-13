import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { loadI18nTranslations } from 'next-intl-split/load'
import { Locales, locales } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  if (!locale || !locales.includes(locale as Locales)) notFound()

  let messages = (await import(`../messages/${locale}.json`)).default

  if (process.env.NODE_ENV === 'development') {
    messages = loadI18nTranslations('./src/messages', locale, true)
  }

  return {
    locale,
    messages,
  }
})
