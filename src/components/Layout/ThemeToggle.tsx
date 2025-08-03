import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/shadcn'

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      aria-label="Theme toggle"
      onClick={toggleTheme}
      size="icon"
      variant="ghost"
    >
      {theme === 'light' ? (
        <Moon className="h-8 w-8" />
      ) : (
        <Sun className="h-8 w-8" />
      )}
    </Button>
  )
}
