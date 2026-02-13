import { Container, IconName } from '@/components'
import { useTranslations } from 'next-intl'
import { OneStopSupportCard } from './OneStopSupportCard'
import { richKey } from '@/i18n/rich'

export type Item = {
  icon: IconName
  bg: string
  title: string
  description: string
  list: string[]
}

export function OneStopSupport() {
  const t = useTranslations('introducation.section2')
  const items = t.raw('items') as Item[]

  return (
    <section className="bg-gray-50">
      <Container className="v1024:py-25 v1024:gap-18 flex flex-col gap-15 py-22">
        <div className="flex flex-col gap-9 text-center">
          <p className="v1024:text-4xl text-3xl font-bold">{t('title')}</p>
          <p className="v1024:text-base text-sm">{t('description')}</p>
        </div>

        <div className="v1280:grid-cols-3 grid grid-cols-1 gap-17">
          {items.map((item, idx) => (
            <OneStopSupportCard key={item.title} t={t} idx={idx} item={item} />
          ))}
        </div>

        <span className="v1280:flex-row v1280:text-lg flex flex-col items-center justify-center gap-4 pt-4 text-center text-base font-semibold">
          {richKey(t, 'footerText')}
        </span>
      </Container>
    </section>
  )
}
