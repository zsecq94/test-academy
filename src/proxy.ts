import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { Locales, routing } from './i18n/routing'

const detectLocale = (request: Request) => {
  const negotiatorHeaders = Object.fromEntries(request.headers.entries())
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const supported = routing.locales
  const found = languages.find((lang: string) =>
    supported.includes(lang.split('-')[0] as Locales)
  )

  return found ? found.split('-')[0] : routing.defaultLocale
}

export const proxy = async (request: Request) => {
  const locale = detectLocale(request) as Locales

  const handleI18nRouting = createMiddleware({
    locales: routing.locales,
    defaultLocale: locale,
    localePrefix: routing.localePrefix,
  })

  return handleI18nRouting(request as NextRequest)
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
