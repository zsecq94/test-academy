'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

import { Route } from '@/global'
import { richKey } from '@/i18n/rich'
import { HeaderLocaleMenu } from './HeaderLocaleMenu'
import { Container, Grid, SvgIcon } from '@/components'

type Props = {
  routes: Route[]
  closing: boolean
  onClose: () => void
}

export function HeaderMenuOverlay({ routes, closing, onClose }: Props) {
  const t = useTranslations('common')

  return (
    <nav
      className={clsx(
        'fixed inset-0 z-50 flex w-full flex-col overflow-hidden bg-white/90 backdrop-blur-lg',
        closing ? 'overlay-fade-out' : 'overlay-fade-in'
      )}
    >
      <div className="border-gray border-b bg-white">
        <Container className="flex h-(--header-height) justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" onClick={onClose}>
              <Image
                src={'/images/brand/logo_color.png'}
                alt="logo"
                width={1000}
                height={1000}
                loading="eager"
                className="h-(--header-logo-height) w-(--header-logo-width)"
              />
            </Link>
          </div>

          <div className="v768:gap-10 v1440:gap-17 flex items-center justify-end gap-5">
            <HeaderLocaleMenu visible={true} isTransparent={false} />

            <button onClick={onClose} aria-label="Close menu">
              <SvgIcon
                name="close"
                className="v1024:h-15 v1024:w-15 h-12 w-12 text-black"
              />
            </button>
          </div>
        </Container>
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain">
        <div className="v1024:py-25 flex min-h-full items-center py-20">
          <Container>
            <Grid className="min-h-full">
              <div className="v768:col-span-3 v1024:col-span-6 col-span-4 flex h-full flex-col items-start justify-center gap-5">
                {routes.map((route) => (
                  <Link href={route.path} key={route.path} onClick={onClose}>
                    <span
                      className={clsx([
                        'text-2xl leading-[100%] font-semibold',
                        'v768:text-3xl v768:leading-[110%]',
                        'v1024:text-4xl v1024:leading-[120%]',
                        'v1280:text-5xl v1280:leading-[130%]',
                        'v1680:text-6xl v1680:leading-[140%]',
                      ])}
                    >
                      {route.name}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="v768:col-span-3 v768:gap-13 v1024:col-span-6 col-span-4 flex h-full flex-col items-end justify-center gap-9 text-end">
                <p className="v768:flex v1680:text-2xl hidden text-lg">
                  {richKey(t, 'menuOverlayText.address')}
                </p>
                <p className="v1280:text-2xl text-xl font-light">
                  {t('menuOverlayText.email')}
                </p>
                <p className="v1280:text-2xl text-xs font-light">
                  {richKey(t, 'menuOverlayText.phone')}
                </p>
                <p className="v1280:text-4xl v1280:leading-10 text-xl font-bold">
                  {t('menuOverlayText.title')}
                </p>
              </div>
            </Grid>
          </Container>
        </div>
      </div>
    </nav>
  )
}
