import { memo, useCallback, useState } from 'react'
import EmptyImage from '../EmptyImage'
import { Article, ButtonAlign, Description, Image, Title } from './styles'

type CardProps = {
  title: string
  description?: string
  url: string
  $selected?: boolean
  handleView?: () => void
  handleCombat?: () => void
}

const Card = ({
  title,
  description,
  url,
  $selected,
  handleView,
  handleCombat
}: CardProps) => {
  const [imgLoaded, setImgLoaded] = useState(true)

  const handleImgLoadError = useCallback(() => {
    setImgLoaded(false)
  }, [])

  return (
    <Article $selected={$selected}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {imgLoaded ? (
        <Image src={url} onError={handleImgLoadError} />
      ) : (
        <EmptyImage />
      )}

      <ButtonAlign>
        {handleView && <button onClick={handleView}>View</button>}
        {handleCombat && <button onClick={handleCombat}>Combat</button>}
      </ButtonAlign>
    </Article>
  )
}

export default memo(Card)
