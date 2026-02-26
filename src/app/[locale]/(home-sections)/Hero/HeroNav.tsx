import clsx from 'clsx'
import { TFunction } from '@/global'
import { richKey } from '@/i18n/rich'
import { Container } from '@/components'
import { HeroScrollDown } from './HeroScrollDown'

export function HeroNav({
  className,
  navItems,
  active,
  onGoTo,
  t,
}: {
  className?: string
  navItems: string[]
  active: number
  onGoTo: (idx: number) => void
  t: TFunction
}) {
  return (
    <Container className="v1024:absolute v1024:inset-0">
      <div className="relative h-full">
        <nav
          className={clsx([
            'absolute bottom-15 left-1/2 z-20 -translate-x-1/2 text-white',
            'v1024:top-1/2 v1024:right-0 v1024:left-auto v1024:translate-x-0 v1024:bottom-auto',
          ])}
        >
          <ul className="v1024:flex-col flex gap-7">
            {navItems.map((_, idx) => {
              const isActive = idx === active
              return (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => onGoTo(idx)}
                    className="flex items-center gap-5 text-left transition-opacity"
                  >
                    <span
                      className={clsx(
                        'text-bg flex h-15 w-15 items-center justify-center rounded-full font-semibold tabular-nums',
                        isActive ? 'bg-primary' : 'bg-white/15'
                      )}
                    >
                      {idx + 1}
                    </span>

                    <span
                      className={clsx(
                        'v1024:block hidden text-xs font-medium',
                        isActive ? 'text-primary' : 'text-bg'
                      )}
                    >
                      {richKey(t, `navItems.${idx}`)}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="v1024:block hidden">
          <HeroScrollDown />
        </div>
      </div>
    </Container>
  )
}
