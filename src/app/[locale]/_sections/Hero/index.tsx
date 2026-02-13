'use client'

import 'swiper/css'
import 'swiper/css/effect-fade'

import * as React from 'react'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper/types'

import { HeroNav } from './HeroNav'
import { HeroMedia } from './HeroMedia'
import { HeroContent } from './HeroContent'
import { HeroProgressBar } from './HeroProgressBar'

export type HeroSwiper = {
  src: string
  title: string
  description: string
  type: 'video' | 'image'
}

const SPEED_MS = 500
const DURATION_MS = 8000

export function Hero() {
  const t = useTranslations('home.hero')

  const swiperRef = React.useRef<SwiperType | null>(null)
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([])
  const prevRef = React.useRef<number>(0)

  const items = React.useMemo(() => t.raw('items') as HeroSwiper[], [t])
  const navItems = React.useMemo(() => t.raw('navItems') as string[], [t])

  const [active, setActive] = React.useState(0)

  const restartVideo = React.useCallback((i: number) => {
    const v = videoRefs.current[i]
    if (!v) return

    try {
      v.currentTime = 0
    } catch {}

    requestAnimationFrame(() => {
      v.play().catch(() => {})
    })
  }, [])

  const stopVideo = React.useCallback((i: number) => {
    const v = videoRefs.current[i]
    if (!v) return
    v.pause()
  }, [])

  const handleActive = React.useCallback(
    (index: number) => {
      const prev = prevRef.current
      if (items[prev]?.type === 'video') stopVideo(prev)

      prevRef.current = index
      setActive(index)

      if (items[index]?.type === 'video') restartVideo(index)
    },
    [items, restartVideo, stopVideo]
  )

  const onSwiper = React.useCallback(
    (s: SwiperType) => {
      swiperRef.current = s
      handleActive(s.realIndex)
    },
    [handleActive]
  )

  const onSlideChange = React.useCallback(
    (s: SwiperType) => {
      handleActive(s.realIndex)
    },
    [handleActive]
  )

  const goTo = React.useCallback(
    (i: number) => {
      swiperRef.current?.slideTo(i, SPEED_MS)
    },
    [SPEED_MS]
  )

  const bindVideoRef = React.useCallback(
    (idx: number) => (el: HTMLVideoElement | null) => {
      videoRefs.current[idx] = el
    },
    []
  )

  const autoplay = React.useMemo(
    () => ({
      delay: DURATION_MS,
      disableOnInteraction: false,
      stopOnLastSlide: true,
    }),
    [DURATION_MS]
  )

  return (
    <Swiper
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
      autoplay={autoplay}
      speed={SPEED_MS}
      loop={false}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      allowTouchMove={false}
      modules={[EffectFade, Autoplay]}
      className="relative h-screen"
    >
      {items.map((slide, idx) => (
        <SwiperSlide key={slide.src}>
          <div className="absolute inset-0 z-0">
            <HeroMedia slide={slide} videoRef={bindVideoRef(idx)} />
          </div>
          <div className="absolute inset-0 bg-black/20" />
          <HeroContent idx={idx} t={t} />
        </SwiperSlide>
      ))}

      <HeroNav navItems={navItems} active={active} onGoTo={goTo} t={t} />

      <HeroProgressBar key={active} />
    </Swiper>
  )
}
