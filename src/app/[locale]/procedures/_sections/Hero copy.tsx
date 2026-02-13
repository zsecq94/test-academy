import { Container, SvgIcon } from '@/components'
import { richKey } from '@/i18n/rich'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Hero() {
  const t = useTranslations('procedures')

  return (
    <Container>
      <div className="group v1280:h-[560px] relative h-[320px] w-full overflow-hidden text-center">
        <Image
          src={'/images/pages/procedures/hero.png'}
          alt={'hero'}
          fill
          unoptimized
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-120"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div
          className={clsx([
            'absolute inset-0 flex flex-col items-center justify-center gap-9 p-18 text-white',
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
        </div>
      </div>
    </Container>
  )
}
