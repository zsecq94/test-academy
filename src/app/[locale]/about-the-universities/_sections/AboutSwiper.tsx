'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper/types'

import * as React from 'react'
import { IconName, SvgIcon } from '@/components'
import { richKey } from '@/i18n/rich'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import clsx from 'clsx'

type SwiperItem = {
  title: string
  url: string
  logo: string
  list: {
    icon: IconName
    key: string
    value: string
  }[]
}

export function AboutSwiper() {
  const t = useTranslations('about.swiper')
  const items = t.raw('items') as SwiperItem[]

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
    <section
      className={clsx([
        'v1024:py-25 v1280:flex-row mx-auto flex w-full max-w-(--container) flex-col gap-9 px-(--margin) py-18',
        'v1440:gap-15',
        'v1680:gap-18',
        'v1920:gap-21',
      ])}
    >
      <div className="v1680:shrink-0 v1280:gap-22 z-50 flex flex-col gap-9">
        <div className="flex flex-col gap-6">
          <Image
            src="/images/brand/logo_small.png"
            alt="logo-small"
            width={110}
            height={28}
          />
          <h2 className="text-4xl font-bold">{richKey(t, 'title')}</h2>
          <p className="v1024:text-base text-sm">{richKey(t, 'description')}</p>
        </div>

        <div className="v1280:justify-start flex justify-end gap-4">
          <button className="bg-gray-50 p-10" onClick={onClickPrev}>
            <SvgIcon name="left" className="v1280:h-23 v1280:w-23 h-18 w-18" />
          </button>
          <button className="bg-gray-50 p-10" onClick={onClickNext}>
            <SvgIcon name="right" className="v1280:h-23 v1280:w-23 h-18 w-18" />
          </button>
        </div>
      </div>

      <div className="min-w-0 [clip-path:inset(0_-100vw_0_0)]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          onSwiper={(s) => (swiperRef.current = s)}
          slidesPerView={1}
          breakpoints={{
            1024: { spaceBetween: 20, slidesPerView: 2 },
            1440: { spaceBetween: 40, slidesPerView: 2 },
            1680: { spaceBetween: 60, slidesPerView: 2 },
            1920: { spaceBetween: 80, slidesPerView: 2 },
          }}
          className="h-full overflow-visible!"
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={clsx([
                  'hover:bg-emeraldgreen bg-gray-dark flex h-full flex-col rounded-[18px] text-white transition-colors duration-300',
                  'gap-9 px-10 py-14',
                  'v1280:gap-12 v1280:p-18',
                  'v1680:gap-14 v1680:p-22',
                ])}
              >
                <div className="v1280:pb-12 v1680:pb-14 flex items-center gap-6 border-b-2 pb-9">
                  <div className="shrink-0 rounded-full bg-white p-4">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className="v1280:h-18 v1280:w-18 h-15 w-15"
                      unoptimized
                      loading="eager"
                    />
                  </div>

                  <p className="v1920:text-4xl v1680:text-3xl v1280:text-2xl text-xl font-bold">
                    {item.title}
                  </p>
                </div>

                <ul className="v1280:gap-14 flex flex-col gap-9">
                  {item.list.map((list, listIdx) => (
                    <li
                      key={listIdx}
                      className="v1280:gap-7 flex flex-col items-start gap-4"
                    >
                      <div className="v1280:px-11 v1280:py-7 flex items-center gap-5 rounded-full border px-9 py-4">
                        <SvgIcon
                          name={list.icon}
                          className="v1280:h-15 v1280:w-15 h-11 w-11"
                        />
                        <p className="v1280:text-xl text-base font-semibold">
                          {list.key}
                        </p>
                      </div>
                      <p className="v1280:text-xl text-sm">
                        {richKey(t, `items.${idx}.list.${listIdx}.value`)}
                      </p>
                    </li>
                  ))}
                </ul>

                <Link
                  target="_blank"
                  href={item.url}
                  className="v1280:text-xl flex items-center gap-5 text-base font-semibold"
                >
                  <SvgIcon
                    name="link"
                    className="v1280:h-15 v1280:w-15 h-11 w-11"
                  />
                  <span>{t(`items.${idx}.url`)}</span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
