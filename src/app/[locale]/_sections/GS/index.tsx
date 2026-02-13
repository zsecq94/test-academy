import clsx from 'clsx'
import { GSCard } from './GSCard'
import { richKey } from '@/i18n/rich'
import { useTranslations } from 'next-intl'
import { Button, Container, IconName, SvgIcon } from '@/components'
import Image from 'next/image'

export type Item = {
  icon: IconName
  title: string
  link: string
}

export function GetStarted() {
  const t = useTranslations('home.getStarted')
  const items = t.raw('items') as Item[]

  return (
    <section className="relative">
      <Image
        src="/images/pages/home/section4.png"
        alt="section4"
        className="absolute inset-0 object-cover"
        fill
        priority
        loading="eager"
      />

      <div className="bg-electricviolet-dark/80 absolute inset-0" />

      <Container className="v1024:py-25 v1024:gap-21 relative flex flex-col gap-18 py-22 text-white">
        <p className="v768:text-xl text-base font-bold">{t('pageName')}</p>

        <div className="flex flex-col items-center justify-center gap-12 text-center">
          <p className="v1680:text-8xl v1024:text-7xl v768:text-5xl text-3xl font-bold">
            {richKey(t, 'title')}
          </p>
          <p className="v768:text-lg v1024:text-xl text-sm">
            {t('description')}
          </p>
        </div>

        <div className="v1024:gap-21 v1024:w-[800px] mx-auto flex w-full flex-col gap-18">
          <Button
            color="electricviolet"
            className={clsx([
              'gap-3 py-5',
              'v768:py-10 v768:gap-7',
              'v1440:py-19 v1280:gap-10',
            ])}
          >
            <SvgIcon name="edit" className="v768:h-21 v768:w-21 h-11 w-11" />
            <span className="v1440:text-4xl v768:text-3xl text-lg font-semibold">
              {t('buttonText')}
            </span>
            <SvgIcon name="right" className="v768:h-21 v768:w-21 h-11 w-11" />
          </Button>

          <div className="v768:grid-cols-2 v768:gap-19 grid grid-cols-1 gap-9">
            {items.map((item, idx) => (
              <GSCard
                key={item.title}
                item={item}
                title={richKey(t, `items.${idx}.title`)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
