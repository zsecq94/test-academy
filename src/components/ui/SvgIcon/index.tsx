import clsx from 'clsx'
import * as Icons from './icons'

export type IconName = keyof typeof Icons

type SvgIconProps = {
  name: IconName
  className?: string
}

export function SvgIcon({ name, className }: SvgIconProps) {
  const Icon = Icons[name]
  return <Icon className={clsx(['h-11 w-11', className])} />
}
