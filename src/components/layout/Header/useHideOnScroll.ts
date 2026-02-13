'use client'

import { useEffect, useEffectEvent, useRef, useState } from 'react'

type Options = {
  forceVisible?: boolean
}

const SCROLL_CONFIG = {
  /** 작은 스크롤 흔들림 무시 */
  threshold: 10,

  /** 헤더 높이만큼 내려갔을 때부터 hide/show 판단(선택) */
  minY: 100,

  /** 헤더 변경 위치 */
  variantSwitchY: 200,
}

export function useHideOnScroll({ forceVisible = false }: Options = {}) {
  const [visible, setVisible] = useState(true)
  const [isTop, setIsTop] = useState(true)

  const lastYRef = useRef(0)
  const tickingRef = useRef(false)

  const updateVisible = useEffectEvent((state: boolean) => {
    setVisible(state)
  })

  const updateIsTop = useEffectEvent((state: boolean) => {
    setIsTop(state)
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    lastYRef.current = window.scrollY
    updateIsTop(window.scrollY <= SCROLL_CONFIG.variantSwitchY)

    const onScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true

      window.requestAnimationFrame(() => {
        const y = window.scrollY
        const lastY = lastYRef.current
        const delta = y - lastY

        setIsTop(y <= SCROLL_CONFIG.variantSwitchY)

        // 특정 구간(minY) 전까지는 항상 보이게
        if (y < SCROLL_CONFIG.minY) {
          setVisible(true)
          lastYRef.current = y
          tickingRef.current = false
          return
        }

        if (Math.abs(delta) >= SCROLL_CONFIG.threshold) {
          if (delta > 0)
            setVisible(false) // down
          else setVisible(true) // up
          lastYRef.current = y
        } else {
          lastYRef.current = y
        }

        tickingRef.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (forceVisible) updateVisible(true)
  }, [forceVisible])

  return { visible, isTop }
}
