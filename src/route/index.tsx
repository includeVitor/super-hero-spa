import { Route, Routes } from 'react-router-dom'
import CharactersDetails from '../pages/characters/CharactersDetails'
import HomePage from '../pages/HomePage'
import { AppRoutes } from './types'

const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HomePage} element={<HomePage />} />
      <Route path={AppRoutes.Details} element={<CharactersDetails />} />
      <Route path="*" element={<h1>Page not found</h1>}></Route>
    </Routes>
  )
}

export default AppRouter
