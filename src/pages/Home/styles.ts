import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 90%;
`

const FightArticle = styled.article`
  display: flex;
  flex-direction: column;
`

const FightContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`

export { Section, FightArticle, FightContainer }
