import { Container, Grid, SvgIcon, ZoomContent } from '@/components'
import { Link } from '@/i18n/navigation'
import { richKey } from '@/i18n/rich'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type GuideLink = {
  bg: string
  icon: string
  title: string
  description: string
  url: string
}

export default function GuidePage() {
  const t = useTranslations('guide')
  const links = t.raw('links') as GuideLink[]

  return (
    <Container className="v1024:py-25 py-18">
      <Grid>
        {links.map((link, idx) => (
          <ZoomContent
            key={idx}
            imageSrc={link.bg}
            imageAlt={'guide' + idx}
            sizes="50vw"
            containerClassName="col-span-6 h-auto"
            overlayClassName="group-hover:bg-accent-dark/80 bg-black/45 transition-colors duration-300"
            className={clsx([
              'flex h-full flex-col items-center justify-center gap-9 p-14 text-center text-white',
              'v1024:p-18 v1024:gap-11',
              'v1440:p-21 v1440:gap-13',
            ])}
          >
            <Image
              src={link.icon}
              alt={`guide-icon-${idx + 1}`}
              width={120}
              height={120}
              className="guide-icon v1440:h-26 v1440:w-26 v1024:h-24 v1024:w-24 h-21 w-21"
            />

            <p className="v1440:text-3xl v1024:text-2xl text-lg font-bold">
              {richKey(t, `links.${idx}.title`)}
            </p>
            <p className="v1440:text-lg v1024:text-base text-sm">
              {richKey(t, `links.${idx}.description`)}
            </p>

            <div className="flex w-full items-center justify-end">
              <Link href={link.url} className="flex items-center gap-5">
                <span>Learn More</span>

                <div className="rounded-full border-2 p-5">
                  <SvgIcon name="arrowRight" className="h-15 w-15" />
                </div>
              </Link>
            </div>
          </ZoomContent>
        ))}
      </Grid>
    </Container>
  )
}
