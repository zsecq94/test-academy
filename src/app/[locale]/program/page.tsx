import { useTranslations } from 'next-intl'

import { richKey } from '@/i18n/rich'
import { Section } from './_sections'
import { HeroHeader } from '@/components'
import { SectionType } from './types'

export default function ProgramPage() {
  const t = useTranslations('program')

  const sections = t.raw('sections') as SectionType[]

  return (
    <main>
      <HeroHeader title={t('title')} description={richKey(t, 'description')} />

      {sections.map((section, idx) => (
        <Section key={section.title + idx} idx={idx} section={section} />
      ))}
    </main>
  )
}
