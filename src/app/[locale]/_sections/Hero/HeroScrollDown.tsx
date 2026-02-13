import clsx from 'clsx'
import * as React from 'react'

export function HeroScrollDown() {
  const [hidden, setHidden] = React.useState(false)

  const onScroll = () => {
    if (window.scrollY > 0) setHidden(true)
    else setHidden(false)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={clsx([
        'absolute bottom-0 z-10 w-full',
        'transition-opacity duration-500',
        hidden ? 'opacity-0' : 'opacity-100',
      ])}
    >
      <div className="flex flex-col gap-4">
        <p className="text-white">Scroll Down</p>

        <div className="h-23">
          <div className="bar-grow-down border-l-2 border-white" />
        </div>
      </div>
    </div>
  )
}
