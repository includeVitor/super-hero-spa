import { useLocation } from 'react-router-dom'
import Details from '../../components/CharactersDetails'

const CharactersDetails = () => {
  const { state } = useLocation()

  return <Details character={(state as any).character} />
}

export default CharactersDetails
