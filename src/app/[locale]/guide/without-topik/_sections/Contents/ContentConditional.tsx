import { Section2 } from './types'
import { TFunction } from '@/global'
import { richKey } from '@/i18n/rich'
import { SvgIcon } from '@/components'
import { GuideDisplayBox, GuideText, GuideTitleBox } from '../../../_components'

type Props = {
  t: TFunction
  conditional: Section2['conditional']
}

export function ContentConditional({ t, conditional }: Props) {
  return (
    <div id="conditional" className="flex scroll-mt-28 flex-col gap-9">
      <GuideTitleBox id={3} title={conditional.q} />

      <GuideDisplayBox className="flex w-full flex-col">
        <div className="border-b border-gray-300 pb-10">
          <GuideText size="xl_to_base">{conditional.title}</GuideText>
        </div>

        {conditional.list.map((item, itemIdx) => (
          <div key={item.title} className="flex flex-col gap-7">
            <div className="flex items-center gap-3">
              <SvgIcon name="check" className="h-10 w-10" />
              <p className="v768:text-lg text-base font-medium">{item.title}</p>
            </div>

            <ul className="flex list-disc flex-col gap-3 pl-10">
              {item.items.map((val, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <li className="v768:text-lg text-xs">
                    {richKey(
                      t,
                      `withoutTopik.section2.conditional.list.${itemIdx}.items.${idx}.title`
                    )}
                  </li>

                  {val.list && (
                    <ul className="flex flex-col gap-3">
                      {val.list.map((v, i) => (
                        <li
                          key={i}
                          className="v768:text-base relative pl-8 text-xs text-gray-500 before:absolute before:left-0 before:content-['-']"
                        >
                          {v}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </GuideDisplayBox>

      <GuideText>
        {richKey(t, 'withoutTopik.section2.conditional.footerText')}
      </GuideText>
    </div>
  )
}
