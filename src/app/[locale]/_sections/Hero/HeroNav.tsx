import clsx from 'clsx'
import { TFunction } from '@/global'
import { richKey } from '@/i18n/rich'
import { Container } from '@/components'
import { HeroScrollDown } from './HeroScrollDown'

export function HeroNav({
  navItems,
  active,
  onGoTo,
  t,
}: {
  navItems: string[]
  active: number
  onGoTo: (idx: number) => void
  t: TFunction
}) {
  return (
    <Container className="absolute inset-0">
      <div className="relative h-full">
        <nav
          className={clsx([
            'absolute bottom-25 left-1/2 z-20 -translate-x-1/2 text-white',
            'v1280:top-1/2 v1280:right-0 v1280:left-auto v1280:translate-x-0 v1280:bottom-auto',
          ])}
        >
          <ul className="flex flex-col gap-7">
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
                        'text-xs font-medium',
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

        <div className="v1280:block hidden">
          <HeroScrollDown />
        </div>
      </div>
    </Container>
  )
}
