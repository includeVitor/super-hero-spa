import { useCallback, useState } from 'react'
import EmptyImage from '../EmptyImage'
import { Article, Description, Image, Title } from './styles'

type CardProps = {
  title: string
  description?: string
  url: string
  handeClick?: () => void
}

const Card = ({ title, description, url, handeClick }: CardProps) => {
  const [imgLoaded, setImgLoaded] = useState(true)

  const handleImgLoadError = useCallback(() => {
    setImgLoaded(false)
  }, [])

  return (
    <Article onClick={handeClick}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {imgLoaded ? (
        <Image src={url} onError={handleImgLoadError} />
      ) : (
        <EmptyImage />
      )}
    </Article>
  )
}

export default Card
