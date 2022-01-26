import { memo, useCallback, useState } from 'react'
import EmptyImage from '../EmptyImage'
import { Article, Description, Image, Title } from './styles'

type CardProps = {
  title: string
  description?: string
  url: string
  $selected?: boolean
  handleView?: () => any
  handleCombat?: () => any
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

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '8px'
        }}
      >
        {handleView && <button onClick={handleView}>View</button>}
        {handleCombat && <button onClick={handleCombat}>Combat</button>}
      </div>
    </Article>
  )
}

export default memo(Card)
