import { useEffect, useState } from 'react'
import Characters from '../components/Characters'
import { LoadingCharacters } from '../components/Skeletons'
import { searchByName } from '../service/superHero'
import { Character, PowerStatsEnum } from '../service/superHero/types'

const HomePage = () => {
  const [inputs, setInputs] = useState({
    search: '',
    powerStats: PowerStatsEnum.choose
  })
  const [characters, setCharacters] = useState([] as Character[])
  const [loading, setLoading] = useState(false)
  const handleChange = (e: any) => {
    const input = e.target
    setInputs(prev => ({ ...prev, [input.name]: input.value }))
  }
  const handleSearch = async () => {
    setLoading(true)
    setInputs(prev => ({ ...prev, powerStats: PowerStatsEnum.choose }))
    const data = await searchByName(inputs.search)
    setCharacters(data)
    setLoading(false)
  }
  const sanatizePower = (power: string): number => {
    const powerNumber = +power
    return isNaN(powerNumber) ? 0 : powerNumber
  }

  useEffect(() => {
    if (inputs.powerStats !== PowerStatsEnum.choose)
      setCharacters(prev =>
        [...prev].sort((a, b) => {
          return (
            sanatizePower(b.powerstats[inputs.powerStats]) -
            sanatizePower(a.powerstats[inputs.powerStats])
          )
        })
      )
  }, [inputs.powerStats])

  return (
    <>
      <input name="search" onChange={handleChange} value={inputs.search} />
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
      <button onClick={handleSearch}>Pesquisar</button>

      {loading ? <LoadingCharacters /> : <Characters characters={characters} />}
    </>
  )
}

export default HomePage
