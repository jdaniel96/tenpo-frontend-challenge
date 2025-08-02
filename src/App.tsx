'use client'

import { useTheme } from '@/hooks/useTheme'

import { Button } from './components/shadcn'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <h1 className="text-3xl font-bold underline">
      <Button onClick={toggleTheme}>
        {theme === 'light' ? 'Light' : 'Dark'}
      </Button>
    </h1>
  )
}
