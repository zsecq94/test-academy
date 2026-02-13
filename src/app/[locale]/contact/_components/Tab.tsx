import clsx from 'clsx'
import { TabListType } from '../types'

type Props = {
  activeIndex: number
  setActiveIndex: (index: number) => void
  tabList: TabListType[]
}

export function Tab({ activeIndex, setActiveIndex, tabList }: Props) {
  return (
    <div
      className={clsx([
        'v1024:flex v1024:flex-row v1680:gap-21 v1280:gap-18 v1024:gap-15 grid grid-cols-2 justify-center',
        'border-primary border-t border-l',
        'v1024:border-none',
      ])}
    >
      {tabList.map((tab, index) => {
        const isActive = activeIndex === index
        return (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={clsx([
              'border-primary border-r border-b p-6',
              'v1024:border-r-0',
              isActive
                ? 'border-primary border-b-4 font-semibold text-black'
                : 'v1024:border-b-0 border-b text-gray-500',
            ])}
          >
            <p className="v1680:text-3xl v1280:text-2xl v1024:text-xl text-base">
              {tab.title}
            </p>
            {tab.subTitle && (
              <p className="v1024:text-base text-xs">{tab.subTitle}</p>
            )}
          </button>
        )
      })}
    </div>
  )
}
