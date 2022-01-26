import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import { AppRoutes } from '../../route/types'
import {
  ButtonContainer,
  DetailsArticle,
  DetailsContent,
  Section
} from './styles'

const Details = () => {
  const { state } = useLocation()
  const character = (state as any).character

  const navigate = useNavigate()

  const handleClick = useCallback(
    () => navigate(AppRoutes.HomePage),
    [navigate]
  )
  return (
    <>
      <ButtonContainer>
        <button onClick={handleClick}>back to home</button>
      </ButtonContainer>
      <Section>
        <Card
          key={character.id}
          id={character.id}
          title={character.name}
          description={character.biography['full-name']}
          url={character.image.url}
        />

        <DetailsArticle>
          <DetailsContent>
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
              <li>
                First Appearance: {character.biography['first-appearance']}
              </li>
              <li>Publisher: {character.biography.publisher}</li>
              <li>Alignment: {character.biography.alignment}</li>
            </ul>

            <h3>Work</h3>
            <ul>
              <li>Occupation: {character.work.occupation}</li>
              <li>Base: {character.work.base}</li>
            </ul>
          </DetailsContent>
          <DetailsContent>
            <h3>Appearance</h3>
            <ul>
              <li>Gender: {character.appearance.gender}</li>
              <li>Race: {character.appearance.race}</li>
              <li>Height: {character.appearance.height}</li>
              <li>Weight: {character.appearance.weight}</li>
              <li>Eye Color: {character.appearance['eye-color']}</li>
              <li>Hair Color: {character.appearance['hair-color']}</li>
            </ul>
            <h3>Connections</h3>
            <ul>
              <li>
                GroupAffiliation: {character.connections['group-affiliation']}
              </li>
              <li>Relatives: {character.connections.relatives}</li>
            </ul>
          </DetailsContent>
        </DetailsArticle>
      </Section>
    </>
  )
}

export default Details
