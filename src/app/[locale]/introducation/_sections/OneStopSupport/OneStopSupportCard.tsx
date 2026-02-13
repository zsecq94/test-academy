import { TFunction } from '@/global'
import { Item } from '.'
import { SvgIcon } from '@/components'
import clsx from 'clsx'
import { richKey } from '@/i18n/rich'

type Props = {
  t: TFunction
  idx: number
  item: Item
}

export function OneStopSupportCard({ t, idx, item }: Props) {
  return (
    <div className="v1280:gap-15 flex flex-col gap-10">
      <div
        className={clsx([
          'v1680:px-17 v1680:py-21 v1280:px-14 v1280:py-17 flex flex-col items-center justify-center gap-11 px-10 py-10 text-white',
          t(`items.${idx}.bg`),
        ])}
      >
        <SvgIcon name={item.icon} className="v1280:h-25 v1280:w-25 h-20 w-20" />

        <p className="v1680:text-4xl v1440:text-3xl text-center text-2xl font-bold">
          {richKey(t, `items.${idx}.title`)}
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <p className="text-xl font-semibold">{item.description}</p>

        <ul className="flex flex-col gap-8">
          {item.list.map((text, idx) => (
            <li key={idx} className="flex gap-6">
              <p
                className={clsx([
                  'v1280:h-18 v1280:w-18 v1280:text-xl flex h-14 w-14 shrink-0 items-center justify-center rounded-[4px] text-base font-semibold text-white',
                  item.bg,
                ])}
              >
                {idx + 1}
              </p>
              <p className="pt-3 text-xl">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
