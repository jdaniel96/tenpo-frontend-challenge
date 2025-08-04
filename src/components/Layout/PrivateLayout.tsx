'use client'

import { type ReactNode, useState } from 'react'
import { Outlet } from 'react-router'

import { Menu, X } from 'lucide-react'

import { DesktopNavigation } from './DesktopNavigation'
import { Logo } from './Logo'
import { MobileNavigation } from './MobileNavigation'

interface PrivateLayoutProps {
  children?: ReactNode
}

export const PrivateLayout = ({ children }: PrivateLayoutProps) => {
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
          <button
            aria-label="Toggle menu"
            className="text-foreground md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isMobileMenuOpen && <MobileNavigation />}
      </header>

      <main className="container mx-auto flex min-h-[calc(100vh-4rem)] justify-center px-6 py-4">
        {children || <Outlet />}
      </main>
    </div>
  )
}
