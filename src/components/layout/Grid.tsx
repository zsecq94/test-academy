import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export function Grid({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        'grid grid-cols-[repeat(var(--cols),minmax(0,1fr))] gap-(--gutter)',
        className
      )}
    >
      {children}
    </div>
  )
}
