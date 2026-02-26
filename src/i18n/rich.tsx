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
  legal: (chunks) => <span className="font-medium text-black">{chunks}</span>,
  legalbold: (chunks) => <span className="font-bold text-black">{chunks}</span>,
  legala: (chunks) => (
    <a className="underline" href="https://ctrc.go.kr" target="_blank">
      {chunks}
    </a>
  ),
  policyblock: (chunks) => (
    <span className="v1440:inline block font-medium text-black">{chunks}</span>
  ),
  termsblock: (chunks) => (
    <span className="v768:inline block font-medium text-black">{chunks}</span>
  ),
}

export function richKey(t: TFunction, key: string) {
  return (t as any).rich(key, rich) as React.ReactNode
}
