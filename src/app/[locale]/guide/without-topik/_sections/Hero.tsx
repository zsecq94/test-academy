import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { richKey } from '@/i18n/rich'
import { Container, Grid, ZoomContent } from '@/components'

type WithoutTopik = {
  text1: string
  text2: string
  text3: string
  list: string[]
}

export function Hero() {
  const t = useTranslations('guide')
  const s1 = t.raw('withoutTopik.section1') as WithoutTopik

  return (
    <section>
      <Container className="v1024:py-23 v1024:gap-23 flex flex-col gap-15 py-18">
        <ZoomContent
          imageSrc="/images/pages/guide/thumb1.png"
          imageAlt="without-topik-hero"
          className={clsx([
            'flex h-full flex-col items-center justify-center gap-9 px-18 py-21 text-center text-white',
            'v1440:px-25 v1440:py-25 v1440:gap-13',
          ])}
        >
          <h2 className="v1024:text-5xl v1280:text-6xl text-3xl font-bold">
            {richKey(t, 'links.0.title')}
          </h2>
          <p className="v1024:text-lg v1280:text-xl text-sm">
            {richKey(t, 'links.0.description')}
          </p>
        </ZoomContent>

        <div className="flex flex-col gap-15">
          <div className="v768:text-center v768:text-xl v1024:text-2xl v1440:text-3xl flex flex-col gap-9 text-base leading-[140%]">
            <p>{richKey(t, 'withoutTopik.section1.text1')}</p>
            <p>{richKey(t, 'withoutTopik.section1.text2')}</p>
            <p>{richKey(t, 'withoutTopik.section1.text3')}</p>
          </div>

          <div className="flex flex-col gap-7 text-center">
            <p className="v768:text-2xl v1024:text-3xl text-xl leading-[140%] font-bold">
              {richKey(t, 'withoutTopik.section1.text4')}
            </p>
            <Grid className="mt-14">
              {s1.list.map((_, index) => (
                <div
                  key={index}
                  className="v1024:col-span-4 v1024:p-20 v1024:pt-21 v1024:mt-0 relative col-span-6 mt-7 flex items-center justify-center bg-gray-100 p-10 pt-14 text-center"
                >
                  <div className="v1024:-top-10 absolute -top-8 right-0 left-0 flex items-center justify-center">
                    <p className="bg-electricviolet v1024:h-20 v1024:w-20 v1024:text-xl flex h-16 w-16 items-center justify-center rounded-full text-base font-semibold text-white">
                      {index + 1}
                    </p>
                  </div>
                  <p className="v1024:text-xl text-sm font-semibold text-gray-500">
                    {richKey(t, `withoutTopik.section1.list.${index}`)}
                  </p>
                </div>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </section>
  )
}
