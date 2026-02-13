'use client'

import clsx from 'clsx'
import { Container } from '../Container'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Route } from '@/global'
import { SvgIcon } from '../../ui/SvgIcon'
import { useMenuOverlay } from './useMenuOverlay'
import { useHideOnScroll } from './useHideOnScroll'
import { useHeaderVariant } from './useHeaderVariant'
import { HeaderMenuOverlay } from './HeaderMenuOverlay'
import { HeaderLocaleMenu } from './HeaderLocaleMenu'

const HEADER_VARIANT = {
  transparent: {
    logo: '/images/brand/logo_white.png',
    textColor: 'text-white',
    backgroundColor: 'bg-black/5',
  },
  white: {
    logo: '/images/brand/logo_color.png',
    textColor: 'text-black',
    backgroundColor: 'bg-white',
  },
}

export function Header() {
  const t = useTranslations('common')
  const routes = t.raw('routes') as Route[]

  const pathname = usePathname()
  const { open, closing, openMenu, closeMenu } = useMenuOverlay()
  const { visible, isTop } = useHideOnScroll({ forceVisible: open || closing })
  const variant = useHeaderVariant({ isTop, pathname })

  const headerVariant = HEADER_VARIANT[variant]
  const isTransparent = variant === 'transparent'

  return (
    <>
      <header
        className={clsx([
          'fixed top-0 right-0 left-0 z-50',
          'transition duration-300 ease-out will-change-transform',
          (!isTop || !isTransparent) && 'border-gray border-b',
          headerVariant.backgroundColor,
          visible ? 'translate-y-0' : '-translate-y-full',
        ])}
      >
        <Container className="header v1024:grid flex justify-between">
          <div className="col-a flex items-center gap-2">
            <Link href="/">
              <Image
                src={headerVariant.logo}
                alt="logo"
                width={1000}
                height={1000}
                loading="eager"
                className="header-logo-size"
              />
            </Link>
          </div>

          <ul
            className={clsx([
              'col-b hidden h-full items-center justify-center gap-10 font-semibold',
              'v1024:flex v1024:text-xs v1280:gap-15 v1280:text-base v1680:gap-20',
            ])}
          >
            {routes.map((route) => {
              const isActive =
                pathname === route.path ||
                (route.path !== '/' && pathname.startsWith(route.path))

              return (
                <li
                  key={route.path}
                  className={clsx([
                    'nav-item h-full',
                    isActive ? 'is-active' : '',
                    headerVariant.textColor,
                  ])}
                >
                  <Link
                    href={route.path}
                    className="nav-link flex h-full items-center text-center"
                  >
                    {route.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="col-c v768:gap-10 v1024:gap-17 flex items-center justify-end gap-5">
            <HeaderLocaleMenu visible={visible} isTransparent={isTransparent} />

            <button onClick={openMenu} aria-label="Open menu">
              <SvgIcon
                name="menu"
                className={clsx([
                  'h-12 w-12',
                  'v1024:h-15 v1024:w-15',
                  headerVariant.textColor,
                ])}
              />
            </button>
          </div>
        </Container>
      </header>

      {(open || closing) && (
        <HeaderMenuOverlay
          routes={routes}
          closing={closing}
          onClose={closeMenu}
        />
      )}
    </>
  )
}
