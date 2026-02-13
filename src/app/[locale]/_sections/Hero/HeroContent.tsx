'use client'

import clsx from 'clsx'
import { TFunction } from '@/global'
import { richKey } from '@/i18n/rich'
import { Button, Container, SvgIcon } from '@/components'

export function HeroContent({ idx, t }: { idx: number; t: TFunction }) {
  return (
    <Container
      className={clsx([
        'relative flex h-full -translate-y-22 flex-col items-center justify-center gap-15',
        'v1280:gap-18 v1280:translate-y-0',
        'v1680:gap-21',
      ])}
    >
      <div
        className={clsx([
          'flex flex-col gap-9 text-center',
          'v1280:gap-13',
          'v1680:gap-15',
        ])}
      >
        <p
          className={clsx([
            'text-3xl font-bold text-white',
            'v1024:text-5xl v1024:leading-21',
            'v1280:text-7xl v1280:leading-25',
            'v1680:text-9xl v1680:leading-[110px]',
          ])}
        >
          {richKey(t, `items.${idx}.title`)}
        </p>
        <p
          className={clsx([
            'text-xs font-medium text-white',
            'v1024:text-sm',
            'v1280:text-base',
            'v1680:text-lg',
          ])}
        >
          {richKey(t, `items.${idx}.description`)}
        </p>
      </div>

      <Button
        color="accent"
        className={clsx([
          'gap-2 px-8 py-2',
          'v1024:px-13 v1024:py-5 v1024:gap-4 v1024:text-sm',
          'v1280:px-15 v1280:py-9 v1280:gap-5',
          'v1680:px-19 v1680:py-14 v1680:gap-7',
        ])}
      >
        <p
          className={clsx([
            'text-sm font-bold text-white',
            'v1024:text-lg',
            'v1280:text-xl',
            'v1680:text-2xl',
          ])}
        >
          {t('buttonText')}
        </p>
        <SvgIcon
          name="right"
          className={clsx([
            'h-7 w-7',
            'v1024:h-12 v1024:w-12',
            'v1280:h-15 v1280:w-15',
            'v1680:h-18 v1680:w-18',
          ])}
        />
      </Button>
    </Container>
  )
}
