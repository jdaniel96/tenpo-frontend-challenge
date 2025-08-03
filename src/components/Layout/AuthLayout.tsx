import { Logo } from './Logo'
import { RouteTransition } from './RouteTransition'
import { ThemeToggle } from './ThemeToggle'

export const AuthLayout = () => {
  return (
    <div className="bg-background min-h-screen">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
        <RouteTransition />
      </main>
    </div>
  )
}
