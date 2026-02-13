import { Section2 } from './types'
import { TFunction } from '@/global'
import { richKey } from '@/i18n/rich'
import { SvgIcon } from '@/components'
import Image from 'next/image'
import { GuideDisplayBox, GuideTitleBox } from '../../../_components'
import { ContentHighlightBox } from './ContentHighlightBox'

type Props = {
  t: TFunction
  topik: Section2['topik']
}

export function ContentTopik({ t, topik }: Props) {
  return (
    <div id="topik" className="flex scroll-mt-28 flex-col gap-9">
      <GuideTitleBox id={4} title={topik.q} />

      <GuideDisplayBox className="v768:flex-row v768:items-center flex flex-col">
        <Image
          src="/images/pages/guide/without-topik/thumb2.png"
          alt="without-topik-thumb2"
          width={1000}
          height={1000}
          className="v768:w-33 v768:h-33 h-29 w-full rounded-[12px] object-cover"
        />

        <div className="flex flex-col gap-7">
          <div className="flex items-start gap-3">
            <SvgIcon name="check" className="h-10 w-10 shrink-0" />
            <p className="v768:text-lg text-base font-medium">
              {richKey(t, 'withoutTopik.section2.topik.title')}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ul className="flex list-disc flex-col gap-3 pl-10">
              {topik.list.map((_, index) => (
                <li key={index} className="v768:text-lg text-xs">
                  {richKey(t, `withoutTopik.section2.topik.list.${index}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GuideDisplayBox>

      <ContentHighlightBox
        title={topik.footerDisplay.title}
        description={richKey(
          t,
          'withoutTopik.section2.topik.footerDisplay.description'
        )}
        icon="bell"
        type="p"
      />
    </div>
  )
}
