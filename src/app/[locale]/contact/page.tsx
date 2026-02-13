import { HeroHeader } from '@/components'
import { useTranslations } from 'next-intl'
import { ContactForm, ContactTabs } from './_sections'

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <main>
      <HeroHeader title={t('title')} />

      <section className="v1024:py-25 v1024:gap-23 flex flex-col gap-15 py-18">
        <ContactTabs />
        <ContactForm />
      </section>
    </main>
  )
}
