import { HeroHeader } from '@/components'
import { Hero, OneStopSupport } from './_sections'
import { useTranslations } from 'next-intl'
import { richKey } from '@/i18n/rich'

export default function IntroductionPage() {
  const t = useTranslations('introduction')

  return (
    <main>
      <HeroHeader title={t('title')} description={richKey(t, 'description')} />
      <Hero />
      <OneStopSupport />
    </main>
  )
}
