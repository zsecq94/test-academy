'use client'

import React from 'react'

export function useBreakpoint() {
  const [bp, setBp] = React.useState<
    'base' | '1920' | '1680' | '1280' | '1024' | '768' | '480'
  >('base')

  React.useEffect(() => {
    const queries = [
      { key: '1920', mq: window.matchMedia('(min-width: 1920px)') },
      { key: '1680', mq: window.matchMedia('(min-width: 1680px)') },
      { key: '1280', mq: window.matchMedia('(min-width: 1280px)') },
      { key: '1024', mq: window.matchMedia('(min-width: 1024px)') },
      { key: '768', mq: window.matchMedia('(min-width: 768px)') },
      { key: '480', mq: window.matchMedia('(min-width: 480px)') },
    ] as const

    const compute = () => {
      if (queries[0].mq.matches) return '1920'
      if (queries[1].mq.matches) return '1680'
      if (queries[2].mq.matches) return '1280'
      if (queries[3].mq.matches) return '1024'
      if (queries[4].mq.matches) return '768'
      if (queries[5].mq.matches) return '480'
      return 'base'
    }

    const onChange = () => setBp(compute())

    // 초기 1회
    setBp(compute())

    queries.forEach(({ mq }) => mq.addEventListener('change', onChange))
    return () =>
      queries.forEach(({ mq }) => mq.removeEventListener('change', onChange))
  }, [])

  return bp
}
