import Image from 'next/image'
import { Section2 } from './types'
import { TFunction } from '@/global'
import { richKey } from '@/i18n/rich'
import { SvgIcon } from '@/components'
import { ContentHighlightBox } from './ContentHighlightBox'
import { GuideDisplayBox, GuideTitleBox } from '../../../_components'

type Props = {
  t: TFunction
  considerations: Section2['considerations']
}
export function ContentConsiderations({ t, considerations }: Props) {
  return (
    <div id="considerations" className="flex scroll-mt-28 flex-col gap-9">
      <GuideTitleBox id={5} title={considerations.q} />

      <GuideDisplayBox className="v768:flex-row v768:items-center flex flex-col">
        <Image
          src="/images/pages/guide/without-topik/thumb3.png"
          alt="without-topik-thumb3"
          width={1000}
          height={1000}
          className="v768:w-33 v768:h-33 h-29 w-full rounded-[12px] object-cover"
        />

        <div className="flex flex-col gap-7">
          <div className="flex items-start gap-3">
            <SvgIcon name="check" className="h-10 w-10 shrink-0" />
            <p className="v768:text-lg text-base font-medium">
              {richKey(t, 'withoutTopik.section2.considerations.title')}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ul className="flex list-disc flex-col gap-3 pl-10">
              {considerations.list.map((_, index) => (
                <li key={index} className="v768:text-lg text-xs">
                  {richKey(
                    t,
                    `withoutTopik.section2.considerations.list.${index}`
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GuideDisplayBox>

      <ContentHighlightBox
        title={considerations.footerDisplay.title}
        description={richKey(
          t,
          'withoutTopik.section2.considerations.footerDisplay.description'
        )}
        icon="alert"
        type="e"
      />
    </div>
  )
}
