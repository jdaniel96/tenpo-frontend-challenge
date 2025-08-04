import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shadcn'

import { LoginForm } from './LoginForm'

interface LoginProps {
  isLoading: boolean
  onLogin: (email: string, password: string) => void
}

export const Login = (props: LoginProps) => {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Welcome to Tenpo</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <LoginForm {...props} />

        <div className="text-muted-foreground mt-6 text-center text-sm">
          <p>Demo credentials:</p>
          <p>Email: any valid email</p>
          <p>Password: minimum 6 characters</p>
        </div>
      </CardContent>
    </Card>
  )
}
