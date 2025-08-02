import { LogOut } from 'lucide-react'

import { Button } from '@/components/shadcn'

export const LogoutButton = () => {
  const onLogout = () => {
    console.log('Logout')
  }

  return (
    <Button
      className="text-destructive hover:text-destructive justify-start"
      onClick={onLogout}
      size="sm"
      variant="ghost"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </Button>
  )
}
