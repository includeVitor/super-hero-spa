import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  border: solid 2px gray;
  height: 3rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  background: none;
  border-style: none;
  text-align: center;
  font-size: 2rem;
  color: gray;
`

export { Container, InputStyled }
