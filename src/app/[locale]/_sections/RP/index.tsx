'use client'

import * as React from 'react'
import { Container } from '@/components'
import { useInView } from '@/hooks'
import { useTranslations } from 'next-intl'
import { RPRing } from './RPRing'
import { richKey } from '@/i18n/rich'
import { RPSwiper } from './RPSwiper'

export function RealPossibilities() {
  const t = useTranslations('home.realPossibilities')
  const items = t.raw('items') as string[]

  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    once: true,
  })

  return (
    <section
      ref={ref}
      className="v1024:gap-21 v1024:py-25 flex flex-col gap-18 bg-gray-50 py-22"
    >
      <Container className="v1024:gap-21 flex flex-col gap-18">
        <p className="v768:text-xl text-base font-bold">{t('pageName')}</p>
        <RPRing inView={inView} bubbleText={t('bubbleText')} />

        <div className="flex flex-col items-center justify-center gap-12 text-center">
          <p className="v1680:text-8xl v1024:text-7xl v768:text-5xl text-3xl font-bold">
            {t('title')}
          </p>
          <p className="v768:text-lg v1024:text-xl text-sm text-gray-900">
            {richKey(t, 'description')}
          </p>
        </div>
      </Container>

      <RPSwiper items={items} />
    </section>
  )
}
