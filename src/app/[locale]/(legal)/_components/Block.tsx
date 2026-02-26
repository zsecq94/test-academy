import clsx from 'clsx'
import { BlockType } from '../types'
import { TFunction } from '@/global'
import { richKey } from '@/i18n/rich'

type BlockProps = {
  t: TFunction
  block: BlockType
  sectionIdx: number
  blockIdx: number
}

const markerStyles = {
  bullet: 'bg-tertiary-fill-hover mt-5 h-1.5 w-1.5 shrink-0 rounded-full',
  dash: 'bg-tertiary-fill-hover mt-5 h-[3px] w-3 shrink-0',
  text: '',
} as const

const isAlpha = (m: BlockType['marker']) => m === 'alpha'
const isNumber = (m: BlockType['marker']) => m === 'number'

const toAlpha = (n: number) => {
  let x = n
  let s = ''
  while (x > 0) {
    x -= 1
    s = String.fromCharCode(97 + (x % 26)) + s
    x = Math.floor(x / 26)
  }
  return s
}

const markerText = (marker: BlockType['marker'], idx: number) => {
  const n = idx + 1
  if (isNumber(marker)) return `${n}.`
  if (isAlpha(marker)) return `${toAlpha(n)}.`
  return ''
}

function Marker({ marker, idx }: { marker: BlockType['marker']; idx: number }) {
  if (marker === 'text') return null

  if (marker === 'bullet') return <span className={markerStyles.bullet} />
  if (marker === 'dash') return <span className={markerStyles.dash} />

  return (
    <span className="font-pretendard-gov w-[1ch] shrink-0 pr-2 text-center">
      {markerText(marker, idx)}
    </span>
  )
}

export function Block({ t, block, sectionIdx, blockIdx }: BlockProps) {
  const isInside = block.nested?.line === 'inside'

  return (
    <div className="v1024:px-15 flex flex-col gap-4 px-10 text-[#464c53]">
      <div
        className={clsx([
          'flex items-start gap-3',
          block.titleFill && '-mx-8 rounded-[6px] bg-[#F6F6F6] px-7 py-4',
        ])}
      >
        <Marker marker={block.marker} idx={blockIdx} />
        <p>{richKey(t, `sections.${sectionIdx}.blocks.${blockIdx}.title`)}</p>
      </div>

      {/* nested list */}
      {block.nested && (
        <div
          className={clsx([
            'mb-6 flex flex-col gap-4',
            isInside && 'v1024:pl-8 ml-1 border-l border-[#CDD1D5] pl-4',
          ])}
        >
          {block.nested.values.map((_, itemIdx) => (
            <div key={itemIdx} className="flex items-start gap-3">
              <Marker marker={block.nested!.marker} idx={itemIdx} />
              <p>
                {richKey(
                  t,
                  `sections.${sectionIdx}.blocks.${blockIdx}.nested.values.${itemIdx}`
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
