import { memo, useCallback, useState } from 'react'
import EmptyImage from '../EmptyImage'
import { Article, Description, Image, Title } from './styles'

type CardProps = {
  title: string
  description?: string
  url: string
  $selected?: boolean
  handleView?: () => any
  handleSelect?: () => any
}

const Card = ({
  title,
  description,
  url,
  $selected,
  handleView,
  handleSelect
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

      {handleView && <button onClick={handleView}>View</button>}
      {handleSelect && <button onClick={handleSelect}>Select</button>}
    </Article>
  )
}

export default memo(Card)
