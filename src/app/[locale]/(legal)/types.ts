type MarkerType = 'bullet' | 'number' | 'alpha' | 'dash' | 'text'
type LineType = 'inside' | 'outside'

export type Item = {
  marker: MarkerType
  line: LineType
  values: string[]
}

export type BlockType = {
  title: string
  titleFill?: boolean
  marker: MarkerType
  nested: undefined | Item
}

export type SectionType = {
  id: string
  title: string
  blocks: BlockType[]
}
