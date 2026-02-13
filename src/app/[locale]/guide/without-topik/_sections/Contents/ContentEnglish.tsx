import clsx from 'clsx'

import { GuideDisplayBox, GuideText, GuideTitleBox } from '../../../_components'
import { Section2 } from './types'
import { TFunction } from '@/global'
import { richKey } from '@/i18n/rich'

type Props = {
  t: TFunction
  english: Section2['english']
}

export function ContentEnglish({ t, english }: Props) {
  return (
    <div id="english" className="flex scroll-mt-28 flex-col gap-9">
      <GuideTitleBox id={2} title={english.q} />

      <GuideDisplayBox className="flex w-full flex-col">
        <div className="border-b border-gray-300 pb-9">
          <GuideText size="xl_to_base">
            {richKey(t, 'withoutTopik.section2.english.title')}
          </GuideText>
        </div>

        <table className="border-primary w-full table-fixed border-collapse border-t-2">
          <thead>
            <tr>
              {english.table.head.map((head, index) => (
                <th
                  key={head}
                  className={clsx([
                    'v768:text-base w-1/2 border-b border-gray-200 bg-[#EAEFFA] p-5 text-center text-sm font-bold',
                    index === 0 && 'border-r',
                  ])}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {english.table.body.map((body, index) => (
              <tr
                key={body.key}
                className="v768:text-base bg-white text-center text-sm"
              >
                <td className="w-1/2 border-r border-b border-gray-200 p-5">
                  {body.key}
                </td>
                <td className="w-1/2 border-b border-gray-200 p-5">
                  {richKey(
                    t,
                    `withoutTopik.section2.english.table.body.${index}.value`
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GuideDisplayBox>

      <GuideText>
        {richKey(t, 'withoutTopik.section2.english.footerText')}
      </GuideText>
    </div>
  )
}
