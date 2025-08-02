import { Login, MainLayout } from '@/components'

export const LoginPage = () => {
  return (
    <MainLayout>
      <title>Tenpo | Login</title>
      <meta content="Login to your account" name="description" />
      <Login />
    </MainLayout>
  )
}
