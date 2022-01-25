import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../route/types'
import { Character } from '../../service/superHero/types'
import Card from '../Card'
import { Section } from './styles'

type CharactersDetailsProps = {
  character: Character
}

const CharactersDetails = ({ character }: CharactersDetailsProps) => {
  const navigate = useNavigate()

  const handleClick = () => navigate(AppRoutes.HomePage)

  return (
    <>
      <button onClick={handleClick}>go back</button>
      <Section>
        <Card
          key={character.id}
          title={character.name}
          description={character.biography['full-name']}
          url={character.image.url}
        />

        <div style={{ width: '500px', height: '500px' }}>
          <div>Id: {character.id}</div>
          <div>Name: {character.name}</div>

          <h3>PowerStats</h3>
          <ul>
            <li>Intelligence: {character.powerstats.intelligence}</li>
            <li>Strength: {character.powerstats.strength}</li>
            <li>Speed: {character.powerstats.speed}</li>
            <li>Durability: {character.powerstats.durability}</li>
            <li>Power: {character.powerstats.power}</li>
            <li>Combat: {character.powerstats.combat}</li>
          </ul>

          <h3>Biography</h3>
          <ul>
            <li>Nome Completo: {character.biography['full-name']}</li>
            <li>Alter Egos: {character.biography['alter-egos']}</li>
            <li>Place of Birth: {character.biography['place-of-birth']}</li>
            <li>First Appearance: {character.biography['first-appearance']}</li>
            <li>Publisher: {character.biography.publisher}</li>
            <li>Alignment: {character.biography.alignment}</li>
          </ul>

          <h3>Appearance</h3>
          <ul>
            <li>Gender: {character.appearance.gender}</li>
            <li>Race: {character.appearance.race}</li>
            <li>Height: {character.appearance.height}</li>
            <li>Weight: {character.appearance.weight}</li>
            <li>Eye Color: {character.appearance['eye-color']}</li>
            <li>Hair Color: {character.appearance['hair-color']}</li>
          </ul>

          <h3>Work</h3>
          <ul>
            <li>Occupation: {character.work.occupation}</li>
            <li>Base: {character.work.base}</li>
          </ul>

          <h3>Connections</h3>
          <ul>
            <li>
              GroupAffiliation: {character.connections['group-affiliation']}
            </li>
            <li>Relatives: {character.connections.relatives}</li>
          </ul>
        </div>
      </Section>
    </>
  )
}

export default CharactersDetails
