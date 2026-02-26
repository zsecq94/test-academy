import { useTranslations } from 'next-intl'

import { richKey } from '@/i18n/rich'
import { SectionType } from '../types'
import { Block } from '../_components'
import { Container, HeroHeader, SvgIcon } from '@/components'

export default function TermsOfUse() {
  const t = useTranslations('terms')
  const sections = t.raw('sections') as SectionType[]

  return (
    <main>
      <HeroHeader title={t('title')} />
      <Container className="v1024:py-25 v1024:gap-15 flex flex-col gap-11 py-18">
        <div className="v1024:px-18 v1024:py-15 border-t-[3px] border-b border-black bg-gray-50 px-8 py-10">
          <h2 className="v1024:text-4xl text-3xl font-bold">
            {t('hero.title')}
          </h2>
          <p className="v1024:text-lg mt-8 text-base">
            {richKey(t, 'hero.description')}
          </p>
        </div>

        {sections.map((section, sectionIdx) => {
          const isLast = sectionIdx === sections.length - 1
          return (
            <div
              key={section.id}
              className="v1024:px-15 v1024:py-15 v1024:gap-9 flex flex-col gap-6 rounded-[12px] border border-[#DEDEE3] px-8 py-10"
            >
              <div className="v1024:gap-3 flex gap-2">
                <SvgIcon
                  name="caretRight"
                  className="v1024:h-12! v1024:w-12! mt-2 h-9! w-9! shrink-0"
                />
                <div className="v1024:flex-row v1024:text-3xl v1024:gap-3 flex flex-col text-lg font-bold">
                  <p className={isLast ? 'hidden' : ''}>
                    Chapter {sectionIdx + 1}.
                  </p>
                  <h2>{section.title}</h2>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {section.blocks.map((block, blockIdx) => {
                  return (
                    <Block
                      key={blockIdx}
                      t={t}
                      block={block}
                      sectionIdx={sectionIdx}
                      blockIdx={blockIdx}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </Container>
    </main>
  )
}
