import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import { LoadingCharacters } from '../../components/Skeletons'
import { useDebounce } from '../../lib/hooks/useDebounce'
import { sanatizePower } from '../../lib/utils'
import { AppRoutes } from '../../route/types'
import { searchByName } from '../../service/superHero'
import { Character, PowerStatsEnum } from '../../service/superHero/types'
import { Section } from './styles'

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

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const input = e.target
    setInputs(prev => ({ ...prev, [input.name]: input.value }))
  }

  const loadData = useCallback(async () => {
    setLoading(true)
    setInputs(prev => ({ ...prev, powerStats: PowerStatsEnum.choose }))
    const data = await searchByName(debouncedTerm)
    setCharacters(data)
    setLoading(false)
  }, [debouncedTerm])

  useEffect(() => {
    if (debouncedTerm) {
      loadData()
    } else {
      setCharacters([])
    }
  }, [debouncedTerm])

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

  const handleView = useCallback((character: Character) => {
    navigate(AppRoutes.Details, { replace: true, state: { character } })
  }, [])

  const handleSelect = useCallback((character: Character) => {
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
      handleSelect={() => handleSelect(character)}
      $selected={character.$selected}
    />
  ))

  const fight = selectedCaracters.map(character => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ul>
        <li>Intelligence: {character.powerstats.intelligence}</li>
        <li>Strength: {character.powerstats.strength}</li>
        <li>Speed: {character.powerstats.speed}</li>
        <li>Durability: {character.powerstats.durability}</li>
        <li>Power: {character.powerstats.power}</li>
        <li>Combat: {character.powerstats.combat}</li>
      </ul>
      <Card
        key={character.id}
        title={character.name}
        description={character.biography['full-name']}
        url={character.image.url}
        handleView={() => handleView(character)}
        handleSelect={() => handleSelect(character)}
        $selected={character.$selected}
      />
    </div>
  ))

  console.log(selectedCaracters)

  return (
    <>
      <input
        name="searchTerm"
        onChange={handleChange}
        value={inputs.searchTerm}
      />

      {characters.length > 0 && (
        <select
          name="powerStats"
          value={inputs.powerStats}
          onChange={handleChange}
        >
          <option value={PowerStatsEnum.choose}>Selecione um valor</option>
          <option value={PowerStatsEnum.intelligence}>Inteligencia</option>
          <option value={PowerStatsEnum.strength}>Força</option>
          <option value={PowerStatsEnum.speed}>Velocidade</option>
          <option value={PowerStatsEnum.durability}>Durabilidade</option>
          <option value={PowerStatsEnum.power}>Poder</option>
          <option value={PowerStatsEnum.combat}>Combate</option>
        </select>
      )}

      {selectedCaracters.length === 2 && (
        <div
          style={{
            display: 'flex',
            width: '90%',
            justifyContent: 'center',
            gap: '5rem'
          }}
        >
          {fight}
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {loading ? <LoadingCharacters /> : <Section>{cardList}</Section>}
    </>
  )
}

export default Home
