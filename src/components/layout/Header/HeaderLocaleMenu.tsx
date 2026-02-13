'use client'

import clsx from 'clsx'
import React from 'react'
import { locales, Locales } from '@/i18n/routing'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

import { SvgIcon } from '../../ui/SvgIcon'

type Props = {
  visible: boolean
  isTransparent: boolean
}

export function HeaderLocaleMenu({ visible, isTransparent }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('common')

  const currentLocale = useLocale() as Locales
  const localeLabels = t.raw('locales') as Record<Locales, string>
  const currentLocaleLabel = localeLabels[currentLocale]

  const rootRef = React.useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = React.useState(false)

  const close = React.useCallback(() => setIsOpen(false), [])
  const toggle = React.useCallback(() => setIsOpen((prev) => !prev), [])

  const handleLocaleChange = React.useCallback(
    (locale: Locales) => {
      if (locale === currentLocale) {
        close()
        return
      }
      router.replace(pathname, { locale })
      close()
    },
    [router, pathname, currentLocale, close]
  )

  React.useEffect(() => {
    if (!isOpen) return

    const onPointerDown = (e: PointerEvent) => {
      const root = rootRef.current
      if (!root) return
      if (!e.composedPath().includes(root)) close()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, close])

  const localeList = React.useMemo(
    () =>
      locales.map((locale) => ({
        value: locale,
        label: localeLabels[locale],
        isActive: locale === currentLocale,
      })),
    [localeLabels, currentLocale]
  )

  const isMenuVisible = isOpen && visible

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={clsx([
          'flex items-center gap-2 rounded-full border px-6 py-2',
          'v1024:px-9 v1024:py-3 v1024:gap-4',
          isTransparent ? 'border-white text-white' : 'border-gray text-black',
        ])}
        onClick={toggle}
      >
        <SvgIcon name="global" className="v1024:h-10 v1024:w-10 h-12 w-7" />
        <p className="v1024:text-sm text-xs font-medium">
          {currentLocaleLabel}
        </p>
      </button>

      <div
        className={clsx([
          'absolute right-0 z-10 flex w-full flex-col gap-1 overflow-hidden rounded-[10px]',
          'border-gray border bg-white p-2 shadow-lg transition-all duration-300',
          'v1024:top-18 v768:top-17 top-16',
          isMenuVisible
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0',
        ])}
      >
        {localeList.map(({ value, label, isActive }) => (
          <button
            key={value}
            type="button"
            onClick={() => handleLocaleChange(value)}
            className={clsx([
              'group w-full rounded-[8px] px-4 py-2 text-left text-sm font-medium transition-colors duration-200',
              'hover:bg-primary',
              isActive && 'bg-primary',
            ])}
          >
            <p
              className={clsx([
                'v1024:text-sm text-center text-xs font-medium transition-colors',
                isActive ? 'text-white' : 'text-gray-500',
                'group-hover:text-white',
              ])}
            >
              {label}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
