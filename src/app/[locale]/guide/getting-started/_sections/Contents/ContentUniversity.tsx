import Image from 'next/image'
import { Section2 } from './types'
import { GuideDisplayBox, GuideText, GuideTitleBox } from '../../../_components'
import { SvgIcon } from '@/components'

type Props = {
  university: Section2['university']
}

export function ContentUniversity({ university }: Props) {
  return (
    <div id="university" className="flex scroll-mt-28 flex-col gap-9">
      <GuideTitleBox id={3} title={university.title} />

      <GuideDisplayBox className="v768:flex-row v768:items-center flex flex-col">
        <Image
          src="/images/pages/guide/getting-started/thumb1.png"
          alt="getting-started-thumb1"
          width={1000}
          height={1000}
          className="v768:w-33 v768:h-33 h-29 w-full rounded-[12px] object-cover"
        />

        <div className="flex flex-col gap-7">
          <div className="flex items-start gap-3">
            <SvgIcon name="check" className="h-10 w-10 shrink-0" />
            <p className="v768:text-lg text-base font-medium">
              {university.display.title}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ul className="flex list-disc flex-col gap-3 pl-10">
              {university.display.list.map((item, index) => (
                <li key={index} className="v768:text-lg text-xs">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GuideDisplayBox>

      <GuideText>{university.footerText}</GuideText>
    </div>
  )
}
