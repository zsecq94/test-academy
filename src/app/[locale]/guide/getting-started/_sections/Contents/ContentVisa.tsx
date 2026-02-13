import { Section2 } from './types'
import { GuideDisplayBox, GuideText, GuideTitleBox } from '../../../_components'
import { TFunction } from '@/global'
import { SvgIcon } from '@/components'
import { richKey } from '@/i18n/rich'

type Props = {
  t: TFunction
  visa: Section2['visa']
}

export function ContentVisa({ t, visa }: Props) {
  return (
    <div id="visa" className="flex scroll-mt-28 flex-col gap-9">
      <div className="flex flex-col gap-7">
        <GuideTitleBox id={1} title={visa.title} />

        <GuideText>
          {richKey(t, 'gettingStarted.section2.visa.description')}
        </GuideText>
      </div>

      <GuideDisplayBox className="flex flex-col">
        {visa.list.map((item, listIdx) => (
          <div key={listIdx} className="v768:gap-15 flex flex-col gap-9">
            <div className="border-b border-gray-300 pb-[20px] text-start">
              <p className="v768:text-lg text-base">{item.title}</p>
            </div>

            <ul className="v768:gap-15 flex flex-col gap-9">
              {item.items.map((v, itemIdx) => (
                <li key={itemIdx} className="flex flex-col gap-7">
                  <div className="flex items-center gap-3">
                    <SvgIcon name="check" className="h-10 w-10" />
                    <p className="v768:text-lg text-base font-medium">
                      {v.title}
                    </p>
                  </div>

                  <ul className="flex list-disc flex-col gap-3 pl-10">
                    {v.list.map((val, idx) => (
                      <li key={idx} className="v768:text-lg text-xs">
                        {val}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </GuideDisplayBox>

      <GuideText>{visa.footerText}</GuideText>
    </div>
  )
}
