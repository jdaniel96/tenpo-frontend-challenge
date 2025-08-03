import { lazy } from 'react'

import { ROUTES } from '@/consts'

import { publicLoader } from './publicLoader'

const LoginPage = lazy(() => import('@/pages/LoginPage'))

export const publicRoutes = [
  {
    element: <LoginPage />,
    loader: publicLoader,
    path: ROUTES.LOGIN,
  },
]
