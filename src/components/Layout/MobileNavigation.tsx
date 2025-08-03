import { LogoutButton } from './LogoutButton'
import { ThemeToggle } from './ThemeToggle'

export const MobileNavigation = () => {
  return (
    <div className="bg-background supports-[backdrop-filter]:bg-background/60 h-[calc(100vh-4rem)] border-t backdrop-blur md:hidden">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col space-y-4">
          <span className="text-muted-foreground text-sm">Welcome, user</span>
          <div className="text-foreground flex items-center justify-between">
            <span className="text-sm">Theme</span>
            <ThemeToggle />
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}
