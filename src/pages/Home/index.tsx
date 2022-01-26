import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import CardList from '../../components/CardList'
import Input from '../../components/Input'
import { LoadingCharacters } from '../../components/Skeletons'
import { useDebounce } from '../../lib/hooks/useDebounce'
import { sanatizePower } from '../../lib/utils'
import { searchByName } from '../../service/superHero'
import { Character, PowerStatsEnum } from '../../service/superHero/types'

const Home = () => {
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
        <CardList
          characters={selectedCaracters}
          setCharacters={setCharacters}
          setSelectedCharacters={setSelectedCharacters}
          $powerstats
        />
      )}

      {loading ? (
        <LoadingCharacters />
      ) : (
        <CardList
          characters={characters}
          setCharacters={setCharacters}
          setSelectedCharacters={setSelectedCharacters}
        />
      )}
    </>
  )
}

export default Home
