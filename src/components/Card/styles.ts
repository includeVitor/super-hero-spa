import styled, { css } from 'styled-components'

type ArticleProps = {
  $selected?: boolean
}

const Article = styled.article<ArticleProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  max-width: 15rem;
  max-height: 25rem;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 1rem;
  border: solid 0.125rem grey;
  ${props =>
    props.$selected &&
    css`
      opacity: 0.7;
    `}}
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
  border-radius: 1rem;
`

export { Article, Title, Description, Image }
