'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper/types'

import * as React from 'react'
import { University } from '.'
import clsx from 'clsx'
import Image from 'next/image'
import { Container, Grid } from '@/components'

export function OPCSwiper({ universities }: { universities: University[] }) {
  const swiperRef = React.useRef<SwiperType | null>(null)

  const onClickPrev = React.useCallback(() => {
    if (!swiperRef.current) return
    swiperRef.current.slidePrev()
  }, [])

  const onClickNext = React.useCallback(() => {
    if (!swiperRef.current) return
    swiperRef.current.slideNext()
  }, [])

  return (
    <Swiper
      className="flex h-full w-full justify-center"
      modules={[Navigation]}
      onSwiper={(s) => (swiperRef.current = s)}
      speed={1000}
    >
      {universities.map((university, idx) => (
        <SwiperSlide key={university.name}>
          <Container className="v1024:gap-21 flex flex-col gap-18">
            <Grid className="items-center">
              <div className="from-primary to-accent v768:p-19 v1440:p-21 v1680:p-23 relative col-span-6 bg-linear-to-b p-14">
                <div className="relative w-full">
                  <Image
                    src={university.imageSrc}
                    alt={university.imageAlt}
                    width={1000}
                    height={1000}
                    className="aspect-3/2 w-full object-cover"
                  />

                  <div className="bg-accent absolute top-0 right-0 z-10 flex aspect-square w-1/5 translate-x-1/5 -translate-y-1/4 items-center justify-center rounded-full p-6 text-white">
                    <Image
                      src={university.logoSrc}
                      alt={university.logoAlt}
                      width={1000}
                      height={1000}
                      className="object-contain"
                    />
                  </div>

                  <div className="bg-brightblue v1280:block absolute bottom-10 left-0 hidden -translate-x-1/3 rounded-full px-18 py-8">
                    <p className="v1680:text-4xl text-2xl font-bold text-white">
                      {university.imageText}
                    </p>
                  </div>
                </div>
              </div>
              <div className="v1440:gap-17 v1280:gap-15 col-span-6 flex flex-col justify-center gap-10">
                <p className="v1680:text-6xl v1024:text-4xl text-3xl font-bold">
                  {university.name}
                </p>

                <div className="v1440:gap-12 flex flex-col gap-7">
                  {university.items.map((item) => (
                    <div
                      key={item.key}
                      className="v1024:flex-row v1024:items-center v1024:gap-9 flex flex-col items-start gap-7"
                    >
                      <p
                        className={clsx([
                          'border-fg shrink-0 rounded-full border text-center text-xl font-bold whitespace-nowrap',
                          'px-11 py-5 text-base',
                          'v1024:min-w-27 v1024:text-lg',
                          'v1440:min-w-29 v1440:px-15 v1440:text-xl v1440:py-7',
                        ])}
                      >
                        {item.key}
                      </p>
                      <p className="v1280:text-xl text-lg">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Grid>

            <div
              className={clsx([
                'flex',
                idx === 0 ? 'justify-end' : 'justify-start',
              ])}
            >
              <button
                className={clsx([
                  'flex flex-col gap-5',
                  idx === 0 ? 'items-end' : 'items-start',
                ])}
                onClick={idx === 0 ? onClickNext : onClickPrev}
              >
                <Image
                  src={
                    idx === 0
                      ? '/images/pages/home/next.svg'
                      : '/images/pages/home/prev.svg'
                  }
                  alt="arrow-right"
                  width={100}
                  height={100}
                  className="v1024:h-[23px] v1024:w-27 h-[15px] w-25 object-contain"
                />
                <p className="v1024:text-lg text-sm font-semibold text-gray-500">
                  {university.nextUniversity}
                </p>
              </button>
            </div>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
