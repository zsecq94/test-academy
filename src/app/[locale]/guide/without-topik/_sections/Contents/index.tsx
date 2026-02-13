import { useTranslations } from 'next-intl'

import { Section2 } from './types'
import { Container } from '@/components'
import { ContentNav } from './ContentNav'
import { ContentTopik } from './ContentTopik'
import { ContentEnglish } from './ContentEnglish'
import { ContentMobileNav } from './ContentMobileNav'
import { ContentConditional } from './ContentConditional'
import { ContentEligibility } from './ContentEligibility'
import { ContentConsiderations } from './ContentConsiderations'

export function Contents() {
  const t = useTranslations('guide')
  const section2 = t.raw('withoutTopik.section2') as Section2

  return (
    <section className="relative">
      <div className="v1280:block absolute top-0 bottom-0 left-0 hidden">
        <aside className="sticky top-0 h-fit self-start py-25">
          <ContentNav />
        </aside>
      </div>

      <Container>
        <div className="v1920:px-35 v1280:px-30 v1024:py-25 v1280:gap-23 v1024:gap-20 v768:gap-18 relative flex flex-col gap-15 border-t border-b border-gray-500 py-18">
          <ContentEligibility t={t} eligibility={section2.eligibility} />
          <ContentEnglish t={t} english={section2.english} />
          <ContentConditional t={t} conditional={section2.conditional} />
          <ContentTopik t={t} topik={section2.topik} />
          <ContentConsiderations
            t={t}
            considerations={section2.considerations}
          />
          <div className="v1280:hidden sticky bottom-0 block">
            <ContentMobileNav />
          </div>
        </div>
      </Container>
    </section>
  )
}
