import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../route/types'
import { Character } from '../../service/superHero/types'
import Card from '../Card'
import { Section } from './styles'

type CharactersProps = {
  characters: Character[]
}

const Characters = ({ characters }: CharactersProps) => {
  const navigate = useNavigate()

  const handleClick = (character: Character) => {
    navigate(AppRoutes.Details, { replace: true, state: { character } })
  }

  const list = characters.map(character => (
    <Card
      key={character.id}
      title={character.name}
      description={character.biography['full-name']}
      url={character.image.url}
      handeClick={() => handleClick(character)}
    />
  ))

  return <Section>{list}</Section>
}

export default memo(Characters)
