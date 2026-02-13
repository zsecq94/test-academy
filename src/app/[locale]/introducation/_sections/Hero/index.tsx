import { richKey } from '@/i18n/rich'
import { useTranslations } from 'next-intl'
import { Container, Grid, ZoomContent } from '@/components'

export function Hero() {
  const t = useTranslations('introducation.section1')

  return (
    <section>
      <Container className="v1024:py-25 v1024:gap-21 flex flex-col gap-15 py-18">
        <ZoomContent
          containerClassName="v1440:h-[550px] v1024:h-[420px] relative h-36 w-full overflow-hidden"
          imageSrc="/images/pages/introducation/hero.png"
          imageAlt="banner"
          isOverlay={false}
        />

        <h1 className="v1280:text-11xl from-primary to-accent bg-linear-to-r bg-clip-text text-center text-6xl leading-none font-bold text-transparent">
          {richKey(t, 'title')}
        </h1>

        <Grid>
          <div className="col-span-6">
            <p>{richKey(t, 'description1')}</p>
          </div>

          <div className="col-span-6 flex flex-col gap-7">
            <p>{richKey(t, 'description2')}</p>
            <p className="text-xl font-semibold">{t('description3')}</p>
          </div>
        </Grid>
      </Container>
    </section>
  )
}
