import { lazy } from 'react'

import { ROUTES } from '@/consts'

const HomePage = lazy(() => import('@/pages/HomePage'))

export const privateRoutes = [
  {
    element: <HomePage />,
    path: ROUTES.HOME,
  },
]
