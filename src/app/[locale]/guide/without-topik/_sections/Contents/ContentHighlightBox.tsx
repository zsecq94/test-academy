import { IconName, SvgIcon } from '@/components'
import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  title: string
  description: ReactNode
  icon: IconName
  type: 'e' | 'p'
}

const types = {
  e: 'text-emeraldgreen bg-[#ECFCFE]',
  p: 'text-primary bg-[#EAEFFA]',
}

export function ContentHighlightBox({ title, description, icon, type }: Props) {
  return (
    <div
      className={clsx([
        'v768:px-20 v768:py-17 flex flex-col gap-9 rounded-[12px] px-15 py-10',
        types[type],
      ])}
    >
      <div className="flex items-start gap-3">
        <SvgIcon name={icon} className="h-10 w-10" />
        <p className="v768:text-xl text-base font-semibold">{title}</p>
      </div>

      <p className="v768:text-xl text-sm">{description}</p>
    </div>
  )
}
