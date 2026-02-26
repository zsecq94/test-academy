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
const DURATION_MS = 7500

export function Hero() {
  const t = useTranslations('home.hero')

  const swiperRef = React.useRef<SwiperType | null>(null)
  const videoRef = React.useRef<(HTMLVideoElement | null)[]>([])

  // "마지막으로 확정 반영된 realIndex"를 저장.
  // slideChange(전환 중)에서 업데이트하면 드래그 연속 입력 시 튀는 값을 먹을 수 있으므로,
  // 전환이 확정되는 이벤트(onRealIndexChange / transitionEnd)에서만 갱신한다.
  const lastCommittedIndexRef = React.useRef<number>(-1)

  const items = React.useMemo(() => t.raw('items') as HeroSwiper[], [t])
  const navItems = React.useMemo(() => t.raw('navItems') as string[], [t])

  const [active, setActive] = React.useState(0)
  const [progress, setProgress] = React.useState(0)

  const restartVideo = React.useCallback((i: number) => {
    const v = videoRef.current[i]
    if (!v) return

    try {
      v.currentTime = 0
    } catch {}

    requestAnimationFrame(() => {
      v.play().catch(() => {})
    })
  }, [])

  const stopVideo = React.useCallback((i: number) => {
    const v = videoRef.current[i]
    if (!v) return
    v.pause()
  }, [])

  const commitActive = React.useCallback(
    (index: number) => {
      // 전환 중 중복 호출/같은 인덱스 재반영 방지
      if (lastCommittedIndexRef.current === index) return

      const prev = lastCommittedIndexRef.current
      // 최초(-1)에는 stopVideo를 호출하지 않도록 가드
      if (prev >= 0 && items[prev]?.type === 'video') stopVideo(prev)

      lastCommittedIndexRef.current = index
      setActive(index)
      setProgress(0)

      if (items[index]?.type === 'video') restartVideo(index)
    },
    [items, restartVideo, stopVideo]
  )

  const onSwiper = React.useCallback(
    (s: SwiperType) => {
      swiperRef.current = s
      commitActive(s.realIndex)
    },
    [commitActive]
  )

  const onRealIndexChange = React.useCallback(
    (s: SwiperType) => {
      commitActive(s.realIndex)
    },
    [commitActive]
  )

  const goTo = React.useCallback((i: number) => {
    const s = swiperRef.current
    if (!s) return
    s.slideToLoop(i, SPEED_MS)
  }, [])

  const bindVideoRef = React.useCallback(
    (idx: number) => (el: HTMLVideoElement | null) => {
      videoRef.current[idx] = el
    },
    []
  )

  const autoplay = React.useMemo(
    () => ({
      delay: DURATION_MS,
      disableOnInteraction: false,
      stopOnLastSlide: true,
    }),
    []
  )

  return (
    <Swiper
      onSwiper={onSwiper}
      onRealIndexChange={onRealIndexChange}
      onAutoplayTimeLeft={(_, __, ratio) => {
        const filled = 1 - ratio
        setProgress(filled < 0 ? 0 : filled > 1 ? 1 : filled)
      }}
      autoplay={autoplay}
      speed={SPEED_MS}
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      allowTouchMove={true}
      modules={[EffectFade, Autoplay]}
      className="v1024:h-screen relative h-auto"
    >
      {items.map((slide, idx) => (
        <SwiperSlide key={slide.src}>
          <div className="absolute inset-0">
            <HeroMedia slide={slide} videoRef={bindVideoRef(idx)} />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="h-full w-full pt-(--header-height)">
            <HeroContent idx={idx} t={t} />
          </div>
        </SwiperSlide>
      ))}

      <HeroProgressBar progress={progress} />
      <HeroNav navItems={navItems} active={active} onGoTo={goTo} t={t} />
    </Swiper>
  )
}
