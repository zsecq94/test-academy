import { Section2 } from './types'
import { SvgIcon } from '@/components'
import { GuideDisplayBox, GuideText, GuideTitleBox } from '../../../_components'

type Props = {
  language: Section2['language']
}

export function ContentLanguage({ language }: Props) {
  return (
    <div id="language" className="flex scroll-mt-28 flex-col gap-9">
      <div className="flex flex-col gap-7">
        <GuideTitleBox id={2} title={language.title} />

        <GuideText>{language.description}</GuideText>
      </div>

      <GuideDisplayBox className="flex flex-col">
        {language.list.map((item, listIdx) => (
          <div key={listIdx} className="flex flex-col gap-9">
            <div className="border-b border-gray-300 pb-[20px] text-start">
              <p className="v768:text-xl text-base">{item.title}</p>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3">
                <SvgIcon name="check" className="h-10 w-10" />
                <p className="v768:text-lg text-base font-medium">
                  {item.subTitle}
                </p>
              </div>

              <ul className="flex list-disc flex-col gap-3 pl-10">
                {item.list.map((v, idx) => (
                  <li key={idx} className="v768:text-lg text-xs">
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[12px] bg-white p-15">
              <p className="v768:text-lg text-base">{item.displayText}</p>
            </div>
          </div>
        ))}
      </GuideDisplayBox>
    </div>
  )
}
