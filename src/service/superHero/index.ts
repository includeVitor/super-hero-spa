import api from '..'
import { Character, SuccessResponse } from './types'

const searchByName = async (term: string) => {
  const characters = await api.get<SuccessResponse<Character>>(
    `/search/${term}`
  )

  return characters.data.results
}

export { searchByName }
