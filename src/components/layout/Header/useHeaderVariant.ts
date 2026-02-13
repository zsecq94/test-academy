'use client'

import { useMemo } from 'react'

export type HeaderVariant = 'transparent' | 'white'

type Params = {
  isTop: boolean
  pathname: string
}

export function useHeaderVariant({ isTop, pathname }: Params) {
  return useMemo<HeaderVariant>(() => {
    const isSubPage = pathname !== '/'
    if (isSubPage) return 'white'
    return isTop ? 'transparent' : 'white'
  }, [isTop, pathname])
}
