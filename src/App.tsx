import { Button } from '@/components/shadcn'
import { useTheme } from '@/hooks'
import { LoginPage } from '@/pages'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <Button onClick={toggleTheme}>
        {theme === 'light' ? 'Light' : 'Dark'}
      </Button>
      <LoginPage />
    </div>
  )
}
