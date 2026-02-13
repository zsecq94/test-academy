import clsx from 'clsx'
import * as React from 'react'

type Props = {
  className?: string
}

export function GuideDisplayBox({
  children,
  className,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={clsx([
        'v1024:p-20 v768:p-15 v768:gap-15 gap-9 rounded-[12px] bg-gray-50 p-10',
        className,
      ])}
    >
      {children}
    </div>
  )
}
