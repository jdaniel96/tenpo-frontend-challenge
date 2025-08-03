import { useAuth } from '@/hooks'

import { LogoutButton } from './LogoutButton'
import { ThemeToggle } from './ThemeToggle'

export const DesktopNavigation = () => {
  const { user } = useAuth()

  return (
    <div className="text-foreground hidden items-center space-x-4 md:flex">
      <span className="text-muted-foreground text-sm">
        Welcome, {user?.name || 'user'}
      </span>
      <ThemeToggle />
      <LogoutButton />
    </div>
  )
}
