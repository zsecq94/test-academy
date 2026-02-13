import { useTranslations } from 'next-intl'

import { Section2 } from './types'
import { Container } from '@/components'
import { ContentNav } from './ContentNav'
import { ContentVisa } from './ContentVisa'
import { ContentLanguage } from './ContentLanguage'
import { ContentMobileNav } from './ContentMobileNav'
import { ContentUniversity } from './ContentUniversity'
import { ContentPreparation } from './ContentPreparation'

export function Contents() {
  const t = useTranslations('guide')
  const section2 = t.raw('gettingStarted.section2') as Section2

  return (
    <section className="relative">
      <div className="v1280:block absolute top-0 bottom-0 left-0 hidden">
        <aside className="sticky top-0 h-fit self-start py-25">
          <ContentNav />
        </aside>
      </div>

      <Container>
        <div className="v1920:px-35 v1280:px-30 v1024:py-25 v1280:gap-23 v1024:gap-20 v768:gap-18 relative flex flex-col gap-15 border-t border-b border-gray-500 py-18">
          <ContentVisa t={t} visa={section2.visa} />
          <ContentLanguage language={section2.language} />
          <ContentUniversity university={section2.university} />
          <ContentPreparation t={t} preparation={section2.preparation} />

          <div className="v1280:hidden sticky bottom-0 block">
            <ContentMobileNav />
          </div>
        </div>
      </Container>
    </section>
  )
}
