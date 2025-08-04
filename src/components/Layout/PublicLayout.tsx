import type { ReactNode } from 'react'
import { Outlet } from 'react-router'

import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

interface PublicLayoutProps {
  children?: ReactNode
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="bg-background min-h-screen">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 text-foreground sticky top-0 z-50 border-b backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto flex min-h-[calc(100vh-4rem)] justify-center p-4">
        {children || <Outlet />}
      </main>
    </div>
  )
}
