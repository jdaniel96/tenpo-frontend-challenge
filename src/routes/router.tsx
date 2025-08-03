import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

import { PublicLayout, PrivateLayout } from '@/components'

import { privateRoutes } from './private'
import { protectedLoader } from './protectedLoader'
import { publicRoutes } from './public'
import { publicLoader } from './publicLoader'

const ErrorPage = lazy(() => import('@/pages/ErrorPage'))

export const router = createBrowserRouter([
  {
    children: publicRoutes,
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    loader: publicLoader,
  },
  {
    children: privateRoutes,
    element: <PrivateLayout />,
    errorElement: <ErrorPage />,
    loader: protectedLoader,
  },
  {
    element: <ErrorPage />, // fallback for undefined routes
    path: '*',
  },
])
