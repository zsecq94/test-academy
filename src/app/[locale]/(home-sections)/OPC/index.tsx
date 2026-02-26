import { useTranslations } from 'next-intl'
import { Container } from '@/components'
import { richKey } from '@/i18n/rich'
import { OPCSwiper } from './OPCSwiper'

export type University = {
  imageSrc: string
  imageAlt: string
  logoSrc: string
  logoAlt: string
  name: string
  items: {
    key: string
    value: string
  }[]
  imageText: string
  nextUniversity: string
}

export function OurPartnerColleges() {
  const t = useTranslations('home.ourPartnerColleges')
  const universities = t.raw('universities') as University[]

  return (
    <section className="v1024:py-25 v1024:gap-21 flex flex-col gap-18 py-22">
      <Container className="v1024:gap-21 flex flex-col gap-18">
        <p className="v768:text-xl text-base font-bold">{t('pageName')}</p>

        <div className="flex flex-col items-center justify-center gap-12 text-center">
          <p className="v1680:text-8xl v1280:text-7xl v768:text-5xl text-3xl font-bold">
            {t('title')}
          </p>
          <p className="v768:text-lg v1280:text-xl text-sm text-gray-900">
            {richKey(t, 'description')}
          </p>
        </div>
      </Container>

      <OPCSwiper universities={universities} />
    </section>
  )
}
