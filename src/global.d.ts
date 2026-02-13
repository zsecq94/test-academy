import { useTranslations } from 'next-intl'
import type messages from './messages/en.json'

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages
  }
}

export type Route = {
  name: string
  path: string
}

export type TFunction = ReturnType<typeof useTranslations>
