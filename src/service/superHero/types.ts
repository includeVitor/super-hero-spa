enum PowerStatsEnum {
  intelligence = 'intelligence',
  strength = 'strength',
  speed = 'speed',
  durability = 'durability',
  power = 'power',
  combat = 'combat',
  choose = 'choose'
}

interface PowerStats {
  [key: string]: string
}

interface Biography {
  'full-name': string
  'alter-egos': string
  aliases: string[]
  'place-of-birth': string
  'first-appearance': string
  publisher: string
  alignment: string
}

interface Appearance {
  gender: string
  race: string
  height: string[]
  weight: string[]
  'eye-color': string
  'hair-color': string
}

interface Work {
  occupation: string
  base: string
}

interface Connections {
  'group-affiliation': string
  relatives: string
}

interface Image {
  url: string
}

interface Character {
  id: string
  name: string
  powerstats: PowerStats
  biography: Biography
  appearance: Appearance
  work: Work
  connections: Connections
  image: Image
  $selected?: boolean
}

interface SuccessResponse<T> {
  response: string
  'results-for': string
  results: T[]
}

interface ErrorResponse {
  response: string
  error: string
}

export { PowerStatsEnum }
export type { SuccessResponse, ErrorResponse, Character, PowerStats }
