import { Article, Description, Image, Title } from './styles'

type CardProps = {
  title: string
  description: string
  url: string
}

const Card = ({ title, description, url }: CardProps) => {
  return (
    <Article>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image src={url} />
    </Article>
  )
}

export default Card
