import { memo } from 'react'
import { Character } from '../../service/superHero/types'
import Card from '../Card'
import { Section } from './styles'

type CharactersProps = {
  characters: Pick<Character, 'id' | 'name' | 'image' | 'biography'>[]
}

const Characters = ({ characters }: CharactersProps) => {
  const list = characters.map(character => (
    <Card
      key={character.id}
      title={character.name}
      description={character.biography['full-name']}
      url={character.image.url}
    />
  ))

  return <Section>{list}</Section>
}

export default memo(Characters)
