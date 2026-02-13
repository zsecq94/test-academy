'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>()

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        },
        {
          rootMargin: '-40% 0px -55% 0px',
          threshold: 0,
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids])

  return activeId
}
