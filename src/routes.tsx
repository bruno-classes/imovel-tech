import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home/page'
import { Imoveis } from './pages/imoveis/page'
import { Details } from './pages/details/page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/imoveis',
    element: <Imoveis />,
  },

  {
    path: '/details/:id',
    element: <Details />,
  },
])
