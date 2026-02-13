import { ButtonProps, IconName } from '@/components'

export type ItemType =
  | {
      itemType: 'key'
      icon: IconName
      title: string
      list: { key: string; value: string }[]
    }
  | {
      itemType: 'list'
      icon: IconName
      title: string
      list: string[]
    }

type Banner = {
  src: string
  alt: string
  title: string
  list: string[]
  buttonText: string
}

export type SectionType = {
  bgColor: ButtonProps['color']
  title: string
  description: string | null
  banner: Banner
  items: ItemType[]
}
