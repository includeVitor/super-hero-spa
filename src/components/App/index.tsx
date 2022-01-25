import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { searchByName } from '../../service/superHero'
import { Character } from '../../service/superHero/types'
import Characters from '../Characters'
import { Main } from './styles'

const App = () => {
  const [search, setSearch] = useState('')
  const [characters, setCharacters] = useState([] as Character[])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearch = async (e: MouseEvent<HTMLElement>) => {
    const data = await searchByName(search)
    setCharacters(data)
  }

  return (
    <Main>
      <input name="search" onChange={handleChange} value={search} />
      <button onClick={handleSearch}>Pesquisar</button>

      <Characters characters={characters} />
    </Main>
  )
}

export default App
