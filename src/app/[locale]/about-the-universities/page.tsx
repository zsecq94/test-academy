import { HeroHeader } from '@/components'
import { richKey } from '@/i18n/rich'
import { useTranslations } from 'next-intl'
import { Hero, AboutSwiper } from './_sections'

export default function AboutPage() {
  const t = useTranslations('about')
  return (
    <main>
      <HeroHeader title={t('title')} description={richKey(t, 'description')} />

      <Hero />
      <AboutSwiper />
    </main>
  )
}
