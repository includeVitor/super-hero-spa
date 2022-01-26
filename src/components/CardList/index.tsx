import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { sumPowers } from '../../lib/utils'
import { AppRoutes } from '../../route/types'
import { Character } from '../../service/superHero/types'
import Card from '../Card'
import { PowerStats, Section } from './styles'

type CardlistProps = {
  characters: Character[]
  $powerstats?: boolean
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>
  setSelectedCharacters: React.Dispatch<React.SetStateAction<Character[]>>
}

const CardList = ({
  characters,
  $powerstats = false,
  setCharacters,
  setSelectedCharacters
}: CardlistProps) => {
  const navigate = useNavigate()

  const handleCombat = useCallback((id: string) => {
    setCharacters(prev =>
      prev.map(p => (p.id === id ? { ...p, $selected: !p.$selected } : p))
    )
    setSelectedCharacters(prev => [...prev, characters.find(f => f.id === id)!])
  }, [])

  const handleView = useCallback((id: string) => {
    navigate(AppRoutes.Details, {
      replace: true,
      state: { character: characters.find(f => f.id === id)! }
    })
  }, [])

  const list = characters.map(character => (
    <PowerStats $powerstats={$powerstats} key={character.id}>
      {$powerstats && (
        <ul>
          <li>Total: {sumPowers(character.powerstats)}</li>
          <li>Intelligence: {character.powerstats.intelligence}</li>
          <li>Strength: {character.powerstats.strength}</li>
          <li>Speed: {character.powerstats.speed}</li>
          <li>Durability: {character.powerstats.durability}</li>
          <li>Power: {character.powerstats.power}</li>
          <li>Combat: {character.powerstats.combat}</li>
        </ul>
      )}
      <Card
        key={character.id}
        id={character.id}
        title={character.name}
        description={character.biography['full-name']}
        url={character.image.url}
        handleCombat={handleCombat}
        handleView={handleView}
        $selected={character.$selected}
      />
    </PowerStats>
  ))

  return <Section>{list}</Section>
}

export default memo(CardList)
