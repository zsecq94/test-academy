import clsx from 'clsx'

type Props = {
  size?: 'xl_to_sm' | 'xl_to_base' | 'sm'
  className?: string
}

const sizes = {
  xl_to_sm: 'v768:text-xl text-sm',
  xl_to_base: 'v768:text-xl text-base',
  sm: '',
}

export function GuideText({
  size = 'xl_to_sm',
  children,
  className,
}: React.PropsWithChildren<Props>) {
  return (
    <p className={clsx(sizes[size], 'v768:text-center text-start', className)}>
      {children}
    </p>
  )
}
