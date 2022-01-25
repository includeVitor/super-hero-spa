import { memo } from 'react'
import { Character } from '../../service/superHero/types'
import { Section } from './styles'

type CharactersProps = {
  characters: Character[]
}

const Characters = ({ characters }: CharactersProps) => {
  const list = characters.map(character => (
    <div key={character.id}>
      nome: {character.name}, nomeCompleto: {character.biography['full-name']},
      imagem: {character.image.url}
    </div>
  ))

  return <Section>{list}</Section>
}

export default memo(Characters)
