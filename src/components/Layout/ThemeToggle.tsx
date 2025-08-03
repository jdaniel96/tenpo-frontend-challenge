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
        <Moon className="h-8 w-8" />
      ) : (
        <Sun className="h-8 w-8" />
      )}
    </Button>
  )
}
