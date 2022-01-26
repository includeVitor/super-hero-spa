import { InputHTMLAttributes, memo } from 'react'
import { Container, InputStyled } from './styles'

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ ...rest }: InputProps) => {
  return (
    <Container>
      <InputStyled autoComplete="off" spellCheck="false" {...rest} />
    </Container>
  )
}

export default memo(Input)
