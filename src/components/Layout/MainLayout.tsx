'use client'

import { useState } from 'react'

import { Menu, X } from 'lucide-react'

import { Button } from '@/components/shadcn'

import { DesktopNavigation } from './DesktopNavigation'
import { Logo } from './Logo'
import { MobileNavigation } from './MobileNavigation'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="bg-background min-h-screen">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <DesktopNavigation />

          {/* Mobile Menu Button */}
          <Button
            aria-label="Toggle menu"
            className="text-foreground md:hidden"
            onClick={toggleMobileMenu}
            size="icon"
            variant="ghost"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && <MobileNavigation />}
      </header>

      <main className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
        {children}
      </main>
    </div>
  )
}
