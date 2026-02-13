import { HeroHeader } from '@/components'
import { richKey } from '@/i18n/rich'
import { useTranslations } from 'next-intl'
import { Hero, ProceduresGrid } from './_sections'

export default function ProceduresPage() {
  const t = useTranslations('procedures')
  return (
    <main>
      <HeroHeader title={t('title')} description={richKey(t, 'description')} />

      <section className="v1024:py-25 flex flex-col gap-(--gutter) py-18">
        <Hero />
        <ProceduresGrid />

        <p className="v1024:flex-row v1024:text-lg flex flex-col items-center justify-center gap-4 text-center text-base">
          {richKey(t, 'footerText')}
        </p>
      </section>
    </main>
  )
}
