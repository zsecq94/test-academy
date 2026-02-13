'use client'

import clsx from 'clsx'
import 'swiper/css'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Items = string[]

const colorList = [
  'bg-orangered',
  'bg-electricviolet',
  'bg-black',
  'bg-neonpurple',
  'bg-brightblue',
  'bg-black',
  'bg-mintgreen',
  'bg-coralred',
]

export function RPSwiper({ items }: { items: Items }) {
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      breakpoints={{
        768: {
          spaceBetween: 24,
        },
        1024: {
          spaceBetween: 40,
        },
      }}
      spaceBetween={16}
      autoplay={{
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }}
      loop={true}
      observer={true}
      observeParents={true}
      noSwiping={true}
      allowTouchMove={false}
      speed={7000}
      className="real-possibilities-marquee w-full"
    >
      {duplicatedItems.map((item, idx) => (
        <SwiperSlide
          key={`${item}-${idx}`}
          className="flex w-auto! items-center"
        >
          <p
            className={clsx([
              colorList[idx % colorList.length],
              'rounded-full text-5xl font-bold text-white',
              'px-11 py-5 text-xl',
              'v768:text-3xl v768:px-15 v766:py-6',
              'v1024:text-5xl v1024:px-19 v1024:py-8',
            ])}
          >
            {item}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
