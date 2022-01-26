import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  max-width: 90%;
  align-items: flex-start;
  justify-content: center;
`

const DetailsArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const DetailsContent = styled.div`
  word-wrap: break-word;
  max-width: 20rem;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export { Section, DetailsArticle, DetailsContent, ButtonContainer }
