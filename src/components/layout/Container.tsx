import clsx from 'clsx'
import { forwardRef, PropsWithChildren } from 'react'

export const Container = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{
    className?: string
  }>
>(function Container({ children, className }, ref) {
  return (
    <div
      ref={ref}
      className={clsx(
        'mx-auto w-full max-w-(--container) px-(--margin)',
        className
      )}
    >
      {children}
    </div>
  )
})
