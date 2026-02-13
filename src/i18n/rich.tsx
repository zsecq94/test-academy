import { TFunction } from '@/global'
import { RichTranslationValues } from 'next-intl'

const rich: RichTranslationValues = {
  semibold: (chunks) => <span className="font-semibold">{chunks}</span>,
  bold: (chunks) => <span className="font-bold">{chunks}</span>,
  medium: (chunks) => <span className="font-medium">{chunks}</span>,
  br: () => <br />,
  highlight: (chunks) => (
    <span className="rounded-full bg-black px-8 py-3 text-white">{chunks}</span>
  ),
  introbold: (chunks) => <span className="text-3xl font-bold">{chunks}</span>,
}

export function richKey(t: TFunction, key: string) {
  return (t as any).rich(key, rich) as React.ReactNode
}
