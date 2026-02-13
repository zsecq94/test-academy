'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const ANIMATION_MS = 250

export function useMenuOverlay() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const timerRef = useRef<number | null>(null)

  const openMenu = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    setClosing(false)
    setOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    setClosing(true)
    timerRef.current = window.setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, ANIMATION_MS)
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [])

  return { open, closing, openMenu, closeMenu }
}
