'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { useInView } from '@/hooks'
import { richKey } from '@/i18n/rich'
import { SectionType } from '../types'
import { Button, Container, Grid, SvgIcon, ZoomContent } from '@/components'

type Props = {
  idx: number
  section: SectionType
}

export function Section({ idx, section }: Props) {
  const t = useTranslations('program')

  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.3,
    once: true,
  })

  return (
    <Container
      ref={ref}
      className="v1024:py-25 relative flex flex-col gap-14 py-18"
    >
      <div className="v1024:gap-7 flex flex-col items-center justify-center gap-3 text-center">
        <p
          className={clsx([
            `bg-${section.bgColor}`,
            'flex items-center justify-center rounded-full font-bold text-white',
            'h-23 w-23 text-5xl',
            'v1024:h-25 v1024:w-25 v1024:text-6xl',
            'v1440:h-27 v1440:w-27 v1440:text-8xl',
          ])}
        >
          {idx + 1}
        </p>
        <p className="v1024:text-6xl text-3xl font-bold">{section.title}</p>
        <p className="v1024:text-xl text-lg font-light">
          {section.description}
        </p>
      </div>

      <ZoomContent
        imageSrc={section.banner.src}
        imageAlt={section.banner.alt}
        containerClassName="v1024:h-[640px] h-[500px] text-center"
        className={clsx([
          'flex h-full flex-col items-center justify-center gap-13 px-18 pt-18 pb-18',
          'v1024:px-20 v1024:pt-18 v1024:pb-22',
          'v1440:px-23 v1440:pt-21 v1440:pb-26',
        ])}
      >
        <h3 className="v1024:text-3xl text-xl font-bold text-white">
          {section.banner.title}
        </h3>

        <ul className="flex flex-col gap-5">
          {section.banner.list.map((_, index) => (
            <li
              key={index}
              className="v1024:text-xl text-center text-sm text-white"
            >
              {richKey(t, `sections.${idx}.banner.list.${index}`)}
            </li>
          ))}
        </ul>

        <Button
          color={section.bgColor}
          className={clsx([
            'gap-2 px-8 py-2',
            'v1024:px-13 v1024:py-5 v1024:gap-4 v1024:text-sm',
            'v1440:px-15 v1440:py-9 v1440:gap-5',
          ])}
        >
          <span className="v1024:text-base text-xs font-semibold">
            {section.banner.buttonText}
          </span>
          <SvgIcon
            name="right"
            className={clsx(['h-7 w-7', 'v1024:h-15 v1024:w-15'])}
          />
        </Button>
      </ZoomContent>

      <Grid className="v1024:px-15 v1280:px-18 v1680:px-25 v1024:-translate-y-28 v1024:-mb-28">
        {section.items.map((item, itemIdx) => {
          const delayClass =
            itemIdx === 0 ? 'section-item-in' : `section-item-in-delay-150`

          return (
            <div
              key={section.title + item.title}
              className={clsx([
                'col-span-6 flex h-full flex-col gap-9 rounded-[18px] bg-gray-100 p-10',
                'v1024:p-15 v1024:gap-12',
                'v1440:p-20 v1440:gap-15',
                'section-item',
                inView && delayClass,
              ])}
            >
              <div
                className={clsx([
                  'flex items-center gap-5 border-b border-b-gray-950 pb-9',
                  'v1024:pb-15',
                  'v1440:pb-18',
                ])}
              >
                <SvgIcon
                  name={item.icon}
                  className="v1024:h-11 v1024:w-11 h-9 w-9"
                />
                <p className="text-xl font-semibold">{item.title}</p>
              </div>

              {item.itemType === 'key' ? (
                <div className="flex flex-col gap-7">
                  {item.list.map((kv) => (
                    <div
                      key={kv.key}
                      className="v1280:flex-row v1280:items-center flex flex-col items-start gap-9"
                    >
                      <p
                        className={clsx([
                          'flex shrink-0 items-center justify-center rounded-full border px-9 py-4 text-center text-sm font-semibold',
                          'v1280:w-28',
                          'v1440:w-30 v1440:text-lg',
                        ])}
                      >
                        {kv.key}
                      </p>
                      <p className="text-lg">{kv.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="flex list-disc flex-col gap-7 pl-[20px] text-lg">
                  {item.list.map((_, listIdx) => (
                    <li key={listIdx}>
                      {richKey(
                        t,
                        `sections.${idx}.items.${itemIdx}.list.${listIdx}`
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </Grid>
    </Container>
  )
}
