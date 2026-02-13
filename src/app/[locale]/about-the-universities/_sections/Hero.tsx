import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { richKey } from '@/i18n/rich'
import { Container, SvgIcon, ZoomContent } from '@/components'

export function Hero() {
  const t = useTranslations('about.hero')

  return (
    <section>
      <Container className="v1024:py-25 py-18">
        <ZoomContent
          imageSrc="/images/pages/about/hero.png"
          imageAlt="hero"
          className={clsx([
            'flex h-full flex-col items-center justify-center gap-9 p-18 text-center text-white',
            'v1024:px-18 v1024:py-20',
            'v1440:px-21 v1440:py-23',
          ])}
        >
          <SvgIcon
            name="book"
            className="text-primary v1280:h-26 v1280:w-26 v1024:h-24 v1024:w-24 h-21 w-21"
          />
          <h2 className="v1024:text-5xl v1280:text-6xl text-3xl font-bold">
            {richKey(t, 'title')}
          </h2>
          <p className="v1024:text-lg v1280:text-xl text-sm">
            {richKey(t, 'description')}
          </p>
        </ZoomContent>
      </Container>
    </section>
  )
}
