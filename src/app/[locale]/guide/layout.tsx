import { HeroHeader } from '@/components'
import { richKey } from '@/i18n/rich'
import { useTranslations } from 'next-intl'

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = useTranslations('guide')

  return (
    <main>
      <HeroHeader title={t('title')} description={richKey(t, 'description')} />

      {children}
    </main>
  )
}
