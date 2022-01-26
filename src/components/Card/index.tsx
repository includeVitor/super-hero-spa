import { memo, useCallback, useState } from 'react'
import EmptyImage from '../EmptyImage'
import { Article, ButtonAlign, Description, Image, Title } from './styles'

type CardProps = {
  id: string
  title: string
  description?: string
  url: string
  $selected?: boolean
  handleView?: any
  handleCombat?: any
}

const Card = ({
  id,
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
        {handleView && <button onClick={() => handleView(id)}>View</button>}
        {handleCombat && (
          <button onClick={() => handleCombat(id)}>Combat</button>
        )}
      </ButtonAlign>
    </Article>
  )
}

export default memo(Card)
