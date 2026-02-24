'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Route } from '@/global'
import { richKey } from '@/i18n/rich'
import { Link } from '@/i18n/navigation'
import { Button, Container, Grid, SvgIcon } from '@/components'

export function Footer() {
  const t = useTranslations('common')
  const routes = t.raw('routes') as Route[]
  const links = t.raw('footerSection2.links') as Route[]

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-tertiary-fill border-t">
      <Container className="v1024:py-21 py-14">
        <div className="v1024:flex-row flex flex-col justify-between">
          <div className="v1024:items-start v1024:gap-15 flex flex-col gap-13">
            <div className="v1024:hidden flex justify-end">
              <Button
                shape="rect"
                intent="outline"
                color="gray"
                onClick={toTop}
                className="h-14 gap-2 px-7"
              >
                <SvgIcon name="up" />
                <span className="text-xs font-semibold">
                  {t('footerSection1.mobileTopButton')}
                </span>
              </Button>
            </div>

            <div className="v1024:gap-9 flex flex-col gap-5">
              <p>{richKey(t, 'footerSection1.title')}</p>
              <Image
                src={'/images/brand/logo_gray.png'}
                alt="footer-logo"
                width={250}
                height={51}
                loading="eager"
                unoptimized
              />
            </div>

            <div className="v1024:flex hidden">
              <Button
                shape="rect"
                intent="outline"
                color="gray"
                onClick={toTop}
                className="h-17 gap-2 px-7"
              >
                <SvgIcon name="up" />
                <span className="text-xs font-semibold">
                  {t('footerSection1.topButton')}
                </span>
              </Button>
            </div>
          </div>
          <div className="v1024:flex-row v1024:justify-between v1680:gap-30 v1440:gap-25 v1024:gap-15 flex flex-col gap-13">
            <div className="flex flex-col gap-9">
              <p className="text-xs font-semibold">
                {t('footerSection2.siteMapText')}
              </p>
              <ul className="flex flex-col gap-1">
                {routes.map((route) => (
                  <li key={route.path} className="text-xs">
                    <Link href={route.path}>{route.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-9">
              <div className="v1024:gap-2 flex flex-col gap-9">
                <div className="v1024:flex-row v1024:gap-9 flex flex-col gap-5">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="text-xs font-semibold"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="v1024:flex-row v1024:items-center v1024:gap-5 flex flex-col">
                  <p className="text-xs font-semibold">
                    {t('footerSection2.social.title')}
                  </p>
                  <Link
                    className="text-xl font-light"
                    href={`mailto:${t('footerSection2.social.email')}`}
                  >
                    {t('footerSection2.social.email')}
                  </Link>
                </div>
              </div>

              <p className="text-tertiary-fill text-xs">
                {t('footerSection2.copyright')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
