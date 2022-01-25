import React, { MouseEvent, useEffect, useState } from 'react'
import { searchByName } from '../../service/superHero'
import { Character } from '../../service/superHero/types'
import Characters from '../Characters'
import { LoadingCharacters } from '../Skeletons'
import { Main } from './styles'

const App = () => {
  const [inputs, setInputs] = useState({ search: '', powerStats: 'choose' })
  const [characters, setCharacters] = useState([] as Character[])
  const [loading, setLoading] = useState(false)

  const handleChange = (e: any) => {
    const input = e.target
    setInputs(prev => ({ ...prev, [input.name]: input.value }))
  }

  const handleSearch = async (e: MouseEvent<HTMLElement>) => {
    setLoading(true)
    setInputs(prev => ({ ...prev, powerStats: 'choose' }))
    const data = await searchByName(inputs.search)
    setCharacters(data)
    setLoading(false)
  }

  const sanatizePower = (power: string): number => {
    const powerNumber = +power
    return isNaN(powerNumber) ? 0 : powerNumber
  }

  useEffect(() => {
    if (inputs.powerStats !== 'choose')
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
    <Main>
      <input name="search" onChange={handleChange} value={inputs.search} />

      {characters.length > 0 && (
        <select
          name="powerStats"
          value={inputs.powerStats}
          onChange={handleChange}
        >
          <option value="choose">Selecione um valor</option>
          <option value="intelligence">Inteligencia</option>
          <option value="strength">Força</option>
          <option value="speed">Velocidade</option>
          <option value="durability">Durabilidade</option>
          <option value="power">Poder</option>
          <option value="combat">Combate</option>
        </select>
      )}
      <button onClick={handleSearch}>Pesquisar</button>

      {loading ? <LoadingCharacters /> : <Characters characters={characters} />}
    </Main>
  )
}

export default App
