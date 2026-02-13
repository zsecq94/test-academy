'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

import { Tab } from '../_components'
import { richKey } from '@/i18n/rich'
import { Container } from '@/components'
import { TabListType, TabType } from '../types'
import clsx from 'clsx'

export function ContactTabs() {
  const t = useTranslations('contact')
  const tabs = t.raw('tabs') as TabType[]

  const [activeIndex, setActiveIndex] = React.useState<number>(0)
  const tabList = tabs.map((tab) => ({
    title: tab.title,
    subTitle: tab.subTitle,
  })) as TabListType[]

  const activeTab = tabs[activeIndex]

  return (
    <Container className="flex flex-col gap-(--margin)">
      <Tab
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        tabList={tabList}
      />
      <div
        className={clsx([
          'relative bg-gray-100',
          'mt-10 px-10 pt-21 pb-10',
          'v1024:px-17 v1024:pt-19 v1024:pb-15 v1024:mt-0',
          'v1280:px-20 v1280:pt-21 v1280:pb-17',
          'v1680:px-27 v1680:pt-24 v1680:pb-20',
        ])}
      >
        <div className="v1024:-top-10 v1280:-top-12 v1680:-top-14 absolute -top-9 left-0 flex w-full items-center justify-center">
          <p
            className={clsx([
              'bg-primary rounded-full font-semibold text-white',
              'px-10 py-4 text-xl',
              'v1024:px-12 v1024:py-5 v1024:text-1xl',
              'v1280:px-14 v1280:py-6 v1280:text-2xl',
              'v1680:px-16 v1680:py-7 v1680:text-3xl',
            ])}
          >
            {activeTab.title}
          </p>
        </div>
        <ul className="v1024:gap-7 flex flex-col gap-9 text-lg">
          {activeTab.items.map((item, itemIndex) => {
            const isArray = Array.isArray(item.value)
            return (
              <li
                key={itemIndex}
                className="v1024:flex-row v1024:gap-9 flex flex-col items-start gap-3"
              >
                <p className="v1024:text-base v1440:text-lg v1440:w-48 v1024:w-43 shrink-0 rounded-full border px-8 py-2 text-center text-sm font-semibold">
                  {item.key}
                </p>
                {item.render === 'text' ? (
                  <p className="v1024:text-lg translate-y-2 text-sm">
                    {item.value}
                  </p>
                ) : (
                  <ul className="flex translate-y-2 list-disc flex-col gap-3 pl-10">
                    {isArray &&
                      item.value.map((_, index) => (
                        <li key={index} className="v1024:text-lg text-sm">
                          {richKey(
                            t,
                            `tabs.${activeIndex}.items.${itemIndex}.value.${index}`
                          )}
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}
