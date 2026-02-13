import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { richKey } from '@/i18n/rich'
import { Container, ZoomContent } from '@/components'

export function Hero() {
  const t = useTranslations('guide')

  return (
    <section>
      <Container className="v1024:py-23 v1024:gap-23 flex flex-col gap-15 py-18">
        <ZoomContent
          imageSrc="/images/pages/guide/thumb2.png"
          imageAlt="getting-started-hero"
          className={clsx([
            'flex h-full flex-col items-center justify-center gap-9 px-18 py-21 text-center text-white',
            'v1440:px-25 v1440:py-25 v1440:gap-13',
          ])}
        >
          <h2 className="v1024:text-5xl v1280:text-6xl text-3xl font-bold">
            {richKey(t, 'links.1.title')}
          </h2>
          <p className="v1024:text-lg v1280:text-xl text-sm">
            {richKey(t, 'links.1.description')}
          </p>
        </ZoomContent>

        <div className="flex flex-col gap-15">
          <div className="v768:text-center v768:text-xl v1024:text-2xl v1440:text-3xl flex flex-col gap-9 text-base leading-[140%]">
            <p>{richKey(t, 'gettingStarted.section1.text1')}</p>
            <p>{richKey(t, 'gettingStarted.section1.text2')}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
