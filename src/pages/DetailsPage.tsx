import { useLocation } from 'react-router-dom'
import CharactersDetails from '../components/CharactersDetails'

const DetailsPage = () => {
  const { state } = useLocation()

  return <CharactersDetails character={(state as any).character} />
}

export default DetailsPage
