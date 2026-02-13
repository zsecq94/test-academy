import Image from 'next/image'
import { richKey } from '@/i18n/rich'

import { GuideDisplayBox, GuideText, GuideTitleBox } from '../../../_components'
import { Section2 } from './types'
import { TFunction } from '@/global'
import { SvgIcon } from '@/components'

type Props = {
  t: TFunction
  eligibility: Section2['eligibility']
}
export function ContentEligibility({ t, eligibility }: Props) {
  return (
    <div id="eligibility" className="flex scroll-mt-28 flex-col gap-9">
      <div className="v768:items-center flex flex-col items-start justify-center gap-5">
        <GuideTitleBox id={1} title={eligibility.q} />

        <div className="v768:justify-center flex w-full justify-end">
          <div className="bg-accent v768:px-17 v768:py-7 rounded-full px-13 py-4">
            <p className="v768:text-3xl text-xl font-bold text-white">
              {eligibility.a}
            </p>
          </div>
        </div>

        <GuideText>
          {richKey(t, 'withoutTopik.section2.eligibility.title')}
        </GuideText>
      </div>

      <GuideDisplayBox className="v768:flex-row v768:items-center flex flex-col">
        <Image
          src="/images/pages/guide/without-topik/thumb1.png"
          alt="without-topik-thumb1"
          width={1000}
          height={1000}
          className="v768:w-33 v768:h-33 h-29 w-full rounded-[12px] object-cover"
        />

        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <SvgIcon name="check" className="h-10 w-10" />
            <p className="v768:text-lg text-base font-medium">
              {richKey(t, 'withoutTopik.section2.eligibility.display.title')}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ul className="flex list-disc flex-col gap-3 pl-10">
              {eligibility.display.list.map((_, index) => (
                <li key={index} className="v768:text-lg text-sm">
                  {richKey(
                    t,
                    `withoutTopik.section2.eligibility.display.list.${index}`
                  )}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-5 px-5">
              {eligibility.display.items.map((item, index) => (
                <div
                  key={index}
                  className="v768:text-base rounded-full border border-gray-500 bg-white px-10 py-3 text-sm"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GuideDisplayBox>

      <GuideText>
        {richKey(t, 'withoutTopik.section2.eligibility.footerText')}
      </GuideText>
    </div>
  )
}
