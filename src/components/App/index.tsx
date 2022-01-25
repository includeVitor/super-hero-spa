import { BrowserRouter } from 'react-router-dom'
import AppRouter from '../../route'
import { Main } from './styles'

const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <AppRouter />
      </Main>
    </BrowserRouter>
  )
}

export default App
