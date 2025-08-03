import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

import { AuthLayout, MainLayout } from '@/components'

import { privateRoutes } from './private'
import { protectedLoader } from './protectedLoader'
import { publicRoutes } from './public'

const ErrorPage = lazy(() => import('@/pages/ErrorPage'))

export const router = createBrowserRouter([
  {
    children: publicRoutes,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
  },
  {
    children: privateRoutes,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: protectedLoader,
  },
  {
    element: <ErrorPage />, // fallback for undefined routes
    path: '*',
  },
])
