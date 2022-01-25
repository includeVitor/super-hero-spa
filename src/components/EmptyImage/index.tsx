import { memo } from 'react'
import { Article } from './styles'

const EmptyImage = () => <Article>Image could not be loaded</Article>

export default memo(EmptyImage)
