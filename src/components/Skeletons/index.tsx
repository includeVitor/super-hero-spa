import Skeleton from 'react-loading-skeleton'
import { LoadingCharactersArticle } from './styles'

const LoadingCharacters = () => {
  return (
    <LoadingCharactersArticle>
      <Skeleton height="22rem" width="15rem" />
      <Skeleton height="22rem" width="15rem" />
      <Skeleton height="22rem" width="15rem" />
      <Skeleton height="22rem" width="15rem" />
      <Skeleton height="22rem" width="15rem" />
      <Skeleton height="22rem" width="15rem" />
      <Skeleton height="22rem" width="15rem" />
      <Skeleton height="22rem" width="15rem" />
    </LoadingCharactersArticle>
  )
}

export { LoadingCharacters }
