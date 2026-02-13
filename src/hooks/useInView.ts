'use client'

import { useEffect, useRef, useState } from 'react'

type UseInViewOptions = IntersectionObserverInit & { once?: boolean }

export function useInView<T extends HTMLElement>(
  options: UseInViewOptions = { threshold: 0.2, once: true }
) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (options.once) io.disconnect()
      } else if (!options.once) {
        setInView(false)
      }
    }, options)

    io.observe(el)
    return () => io.disconnect()
  }, [options.root, options.rootMargin, options.threshold, options.once])

  return { ref, inView }
}
