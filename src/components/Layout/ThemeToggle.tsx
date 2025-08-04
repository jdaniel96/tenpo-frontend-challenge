import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      aria-label="Theme toggle"
      className="cursor-pointer p-2"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}
