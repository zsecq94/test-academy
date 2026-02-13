import '@/styles/globals.css'

import type { Metadata } from 'next'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

import { generalSans, pretendard } from './fonts'
import { LANG_MAP, locales, type Locales } from '@/i18n/routing'
import { Footer, GridOverlay, Header } from '@/components'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'REC’s Academy',
  description: 'REC’s Academy',
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

function isLocale(v: string): v is Locales {
  return (locales as readonly string[]).includes(v)
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()

  const locale = raw 
  const messages = await getMessages()

  return (
    <html lang={LANG_MAP[locale] ?? 'ko-KR'} className="overflow-x-clip">
      <body
        className={`${generalSans.variable} ${pretendard.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
        {/* <GridOverlay /> */}
      </body>
    </html>
  )
}
