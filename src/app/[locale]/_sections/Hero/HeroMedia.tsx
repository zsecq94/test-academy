import * as React from 'react'
import Image from 'next/image'
import { HeroSwiper } from '.'

type HeroMediaProps = {
  slide: HeroSwiper
  videoRef: (el: HTMLVideoElement | null) => void
}

export const HeroMedia = React.memo(
  function HeroMedia({ slide, videoRef }: HeroMediaProps) {
    if (slide.type === 'video') {
      return (
        <video
          ref={videoRef}
          className="h-full w-full scale-[1.03] object-cover"
          src={slide.src}
          muted
          autoPlay
          preload="none"
        />
      )
    }

    return (
      <Image
        src={slide.src}
        alt={slide.title}
        fill
        sizes="100vw"
        className="object-cover"
      />
    )
  },
  (prevProps, nextProps) => {
    // 부모에서 videoRef 함수가 매번 새로 생성되어 넘어오더라도,
    // 실제 'slide' 데이터가 같다면 리렌더링을 하지 않도록 강제.
    return prevProps.slide === nextProps.slide
  }
)
