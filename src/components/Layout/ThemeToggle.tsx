import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/shadcn'
import { useTheme } from '@/hooks'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      aria-label="Theme toggle"
      onClick={toggleTheme}
      size="icon"
      variant="ghost"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  )
}
