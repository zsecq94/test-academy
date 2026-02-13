import * as React from 'react'
import { SvgIcon } from '@/components'
import { Item } from '.'

export function GSCard({
  item,
  title,
}: {
  item: Item
  title: React.ReactNode
}) {
  return (
    <button
      key={item.title}
      className="v768:gap-9 v768:p-18 flex flex-col justify-between gap-6 rounded-[10px] bg-white/20 p-11 backdrop-blur-xl"
    >
      <SvgIcon name={item.icon} className="v768:h-21 v768:w-21 h-15 w-15" />

      <span className="v768:text-2xl text-start text-base font-semibold">
        {title}
      </span>
      <div className="flex justify-end">
        <SvgIcon name="right" className="v768:h-18 v768:w-18 h-11 w-11" />
      </div>
    </button>
  )
}
