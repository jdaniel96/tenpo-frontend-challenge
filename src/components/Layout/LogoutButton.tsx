import { Navigate } from 'react-router'

import { LogOut } from 'lucide-react'

import { Button } from '@/components/shadcn'
import { ROUTES } from '@/consts'
import { useAuth } from '@/hooks'

export const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth()

  if (!isAuthenticated) return <Navigate replace to={ROUTES.LOGIN} />

  return (
    <Button
      className="text-destructive hover:text-destructive justify-start"
      onClick={logout}
      size="sm"
      variant="ghost"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </Button>
  )
}
