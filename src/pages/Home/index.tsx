import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import Input from '../../components/Input'
import { LoadingCharacters } from '../../components/Skeletons'
import { useDebounce } from '../../lib/hooks/useDebounce'
import { sanatizePower, sumPowers } from '../../lib/utils'
import { AppRoutes } from '../../route/types'
import { searchByName } from '../../service/superHero'
import { Character, PowerStatsEnum } from '../../service/superHero/types'
import { FightArticle, FightContainer, Section } from './styles'

const Home = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    searchTerm: '',
    powerStats: PowerStatsEnum.choose
  })
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([] as Character[])
  const [selectedCaracters, setSelectedCharacters] = useState([] as Character[])
  const debouncedTerm = useDebounce(inputs.searchTerm, 500)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const input = e.target
      setInputs(prev => ({ ...prev, [input.name]: input.value }))
    },
    []
  )

  const loadData = useCallback(async () => {
    setLoading(true)
    setInputs(prev => ({ ...prev, powerStats: PowerStatsEnum.choose }))
    const data = await searchByName(debouncedTerm)
    setCharacters(data)
    setLoading(false)
  }, [debouncedTerm])

  const handleView = useCallback(
    (character: Character) => {
      navigate(AppRoutes.Details, { replace: true, state: { character } })
    },
    [navigate]
  )

  const handleCombat = useCallback((character: Character) => {
    character.$selected = !character.$selected
    setSelectedCharacters(prev => {
      if (character.$selected) {
        return [...prev, character]
      } else {
        return prev.filter(p => {
          return p.id !== character.id
        })
      }
    })
  }, [])

  const cardList = characters.map(character => (
    <Card
      key={character.id}
      title={character.name}
      description={character.biography['full-name']}
      url={character.image.url}
      handleView={() => handleView(character)}
      handleCombat={() => handleCombat(character)}
      $selected={character.$selected}
    />
  ))

  const fight = selectedCaracters.map(character => (
    <FightArticle key={character.id}>
      <ul>
        <li>Total: {sumPowers(character.powerstats)}</li>
        <li>Intelligence: {character.powerstats.intelligence}</li>
        <li>Strength: {character.powerstats.strength}</li>
        <li>Speed: {character.powerstats.speed}</li>
        <li>Durability: {character.powerstats.durability}</li>
        <li>Power: {character.powerstats.power}</li>
        <li>Combat: {character.powerstats.combat}</li>
      </ul>
      <Card
        title={character.name}
        description={character.biography['full-name']}
        url={character.image.url}
        handleView={() => handleView(character)}
        handleCombat={() => handleCombat(character)}
        $selected={character.$selected}
      />
    </FightArticle>
  ))

  useEffect(() => {
    if (debouncedTerm) {
      loadData()
    } else {
      setCharacters([])
    }

    setSelectedCharacters([])
  }, [debouncedTerm, loadData])

  useEffect(() => {
    if (inputs.powerStats !== PowerStatsEnum.choose) {
      setCharacters(prev =>
        [...prev].sort((a, b) => {
          return (
            sanatizePower(b.powerstats[inputs.powerStats]) -
            sanatizePower(a.powerstats[inputs.powerStats])
          )
        })
      )
    }
  }, [inputs.powerStats])

  useEffect(() => {
    if (selectedCaracters.length === 2) {
      setCharacters([])
      window.scrollTo(0, 0)
    }
  }, [selectedCaracters])

  return (
    <>
      <Input
        name="searchTerm"
        placeholder="Search a caracter..."
        onChange={handleChange}
        value={inputs.searchTerm}
      />

      {characters.length > 0 && (
        <select
          name="powerStats"
          value={inputs.powerStats}
          onChange={handleChange}
        >
          <option value={PowerStatsEnum.choose}>Filter by power</option>
          <option value={PowerStatsEnum.intelligence}>
            {PowerStatsEnum.intelligence}
          </option>
          <option value={PowerStatsEnum.strength}>
            {PowerStatsEnum.strength}
          </option>
          <option value={PowerStatsEnum.speed}>{PowerStatsEnum.speed}</option>
          <option value={PowerStatsEnum.durability}>
            {PowerStatsEnum.durability}
          </option>
          <option value={PowerStatsEnum.power}>{PowerStatsEnum.power}</option>
          <option value={PowerStatsEnum.combat}>{PowerStatsEnum.combat}</option>
        </select>
      )}

      {selectedCaracters.length === 2 && (
        <FightContainer>{fight}</FightContainer>
      )}

      {loading ? <LoadingCharacters /> : <Section>{cardList}</Section>}
    </>
  )
}

export default Home
