import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const getInitialTheme = (): Theme => {
  const storedTheme = localStorage.getItem('theme') as Theme | null
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const initialTheme = storedTheme ?? (prefersDark ? 'dark' : 'light')

  return initialTheme
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme())

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return { theme, toggleTheme }
}
