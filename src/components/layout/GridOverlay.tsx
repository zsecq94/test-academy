'use client'

import React from 'react'

export function GridOverlay() {
  const [cols, setCols] = React.useState(12)

  React.useEffect(() => {
    const el = document.documentElement

    const read = () => {
      const v = getComputedStyle(el).getPropertyValue('--cols').trim()
      const n = Number(v)
      if (!Number.isNaN(n) && n > 0) setCols(n)
    }

    read()
    window.addEventListener('resize', read)
    return () => window.removeEventListener('resize', read)
  }, [])

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="pointer-events-none fixed inset-0 z-9999">
      <div className="mx-auto h-full max-w-(--container) px-(--margin)">
        <div className="grid h-full grid-cols-[repeat(var(--cols),minmax(0,1fr))] gap-(--gutter)">
          {Array.from({ length: cols }).map((_, i) => (
            <div
              key={i}
              className="h-full border border-red-500/10 bg-red-500/5"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
