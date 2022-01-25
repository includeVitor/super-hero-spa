import styled from 'styled-components'

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 15rem;
  max-height: 22rem;
`

const Title = styled.span`
  text-align: center;
  font-weight: bold;
`

const Description = styled.span`
  text-align: center;
`

const Image = styled.img`
  width: 15rem;
  height: 20rem;
`

export { Article, Title, Description, Image }
