import { Container, ZoomContent } from '@/components'
import { richKey } from '@/i18n/rich'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('procedures')

  return (
    <Container>
      <ZoomContent
        imageSrc={'/images/pages/procedures/hero.png'}
        imageAlt="procedures-hero"
        overlayClassName="bg-black/55"
        containerClassName=" v1280:h-[560px] h-[320px]"
        className={clsx([
          'flex h-full flex-col items-center justify-center gap-9 p-18 text-center text-white',
          'v1024:px-20 v1024:py-18',
          'v1440:px-23 v1440:py-21',
        ])}
      >
        <h2 className="v1024:text-5xl v1280:text-6xl text-3xl font-bold">
          {richKey(t, 'hero.title')}
        </h2>
        <p className="v1024:text-lg v1280:text-xl text-sm">
          {richKey(t, 'hero.description')}
        </p>
      </ZoomContent>
    </Container>
  )
}
