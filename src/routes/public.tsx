import { lazy } from 'react'

import { ROUTES } from '@/consts'

const LoginPage = lazy(() => import('@/pages/LoginPage'))

export const publicRoutes = [
  {
    element: <LoginPage />,
    path: ROUTES.LOGIN,
  },
]
