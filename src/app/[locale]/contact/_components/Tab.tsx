import clsx from 'clsx'
import { TabListType } from '../types'

type Props = {
  activeIndex: number
  setActiveIndex: (index: number) => void
  tabList: TabListType[]
}

function StableWeightText({
  text,
  active,
  activeClass = 'font-semibold',
  inactiveClass = 'font-normal',
  className,
}: {
  text: string
  active: boolean
  activeClass?: string
  inactiveClass?: string
  className?: string
}) {
  return (
    <span
      data-text={text}
      className={clsx(
        'relative inline-block',
        'before:invisible before:block before:h-0 before:overflow-hidden before:content-[attr(data-text)]',
        'before:font-semibold',
        active ? activeClass : inactiveClass,
        className
      )}
    >
      {text}
    </span>
  )
}

export function Tab({ activeIndex, setActiveIndex, tabList }: Props) {
  return (
    <div
      className={clsx([
        'v1024:flex v1024:flex-row v1024:gap-15 v1280:gap-18 v1680:gap-21 grid grid-cols-2 justify-center',
        // 모바일 테두리 그리드 프레임 유지
        'border-primary v1024:border-none border-t border-l',
      ])}
    >
      {tabList.map((tab, index) => {
        const isActive = activeIndex === index

        return (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={clsx([
              'p-8 text-center',
              'border-primary v1024:border-0 border-r border-b',
              'relative',
              'after:absolute after:right-0 after:bottom-0 after:left-0 after:h-2 after:content-[""]',
              isActive
                ? 'after:bg-primary text-black'
                : 'text-gray-500 after:bg-transparent',
            ])}
          >
            {/* title: line-height 고정 + weight 고정 */}
            <p className="v1680:text-3xl v1280:text-2xl v1024:text-xl text-base leading-tight">
              <StableWeightText text={tab.title} active={isActive} />
            </p>

            {/* subtitle: 항상 한 줄 공간 확보 -> 높이 고정 */}
            <p className="v1024:text-base text-xs leading-tight">
              {tab.subTitle && (
                <StableWeightText
                  text={tab.subTitle}
                  active={isActive}
                  activeClass="font-medium"
                />
              )}
            </p>
          </button>
        )
      })}
    </div>
  )
}
