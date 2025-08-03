import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import { ThemeProvider } from 'next-themes'

import { Loader } from '@/components'
import { Toaster } from '@/components/shadcn'
import { AuthProvider } from '@/contexts'
import { router } from '@/routes'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found!')

createRoot(rootElement).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RouterProvider router={router} />
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </Suspense>
  </StrictMode>
)
