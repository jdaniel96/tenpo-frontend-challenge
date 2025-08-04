import { Navigate } from 'react-router'

import { Login } from '@/components'
import { ROUTES } from '@/consts'
import { useAuth } from '@/hooks'

const LoginPage = () => {
  const { isAuthenticated, isLoggingIn, login } = useAuth()

  if (isAuthenticated) return <Navigate replace to={ROUTES.HOME} />

  return (
    <div className="flex min-h-full max-w-xs min-w-full items-center justify-center">
      <title>Tenpo | Login</title>
      <meta content="Login to your account" name="description" />
      <Login isLoading={isLoggingIn} onLogin={login} />
    </div>
  )
}

export default LoginPage
