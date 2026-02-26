'use client'

import * as React from 'react'
import { useTranslations } from 'next-intl'

import { useInView } from '@/hooks'
import { Container, Grid } from '@/components'
import { ODRing } from './ODRing'
import { richKey } from '@/i18n/rich'
import { ODCard } from './ODCard'

export type ODCardType = {
  id: number
  title: string
  description: string
}

export function OurDifference() {
  const t = useTranslations('home.ourDifference')
  const items = t.raw('items') as ODCardType[]

  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    once: true,
  })

  return (
    <section ref={ref}>
      <Container className="v1024:py-25 v1024:gap-21 flex flex-col gap-18 py-22">
        <p className="v768:text-xl text-base font-bold">{t('pageName')}</p>

        <ODRing inView={inView} />

        <div className="flex flex-col items-center justify-center gap-12 text-center">
          <p className="v1680:text-8xl v1024:text-7xl v768:text-5xl text-3xl font-bold">
            {t('title')}
          </p>
          <p className="v768:text-lg v1024:text-xl text-sm text-gray-900">
            {richKey(t, 'description')}
          </p>
        </div>

        <Grid>
          {items.map((item) => (
            <ODCard key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </section>
  )
}
