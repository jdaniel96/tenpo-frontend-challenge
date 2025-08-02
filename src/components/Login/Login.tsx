import { Avatar } from '@/components'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shadcn'

import { LoginForm } from './LoginForm'

export const Login = () => {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-1 text-center">
        <Avatar alt="@tempo" src="/tenpo.svg" />

        <CardTitle className="text-2xl font-bold">Welcome to Tenpo</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <LoginForm />

        <div className="text-muted-foreground mt-6 text-center text-sm">
          <p>Demo credentials:</p>
          <p>Email: any valid email</p>
          <p>Password: minimum 6 characters</p>
        </div>
      </CardContent>
    </Card>
  )
}
