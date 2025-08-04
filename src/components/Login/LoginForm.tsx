import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { Button, Form } from '@/components/shadcn'
import { loginSchema, type LoginValues } from '@/schemas'

import { EmailFormField } from './EmailFormField'
import { PasswordFormField } from './PasswordFormField'

interface LoginFormProps {
  isLoading: boolean
  onLogin: (email: string, password: string) => void
}

export const LoginForm = ({ isLoading, onLogin }: LoginFormProps) => {
  const form = useForm<LoginValues>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginSchema),
  })

  const _isLoading = isLoading || form.formState.isSubmitting

  const onSubmit = (data: LoginValues) => onLogin(data.email, data.password)

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <EmailFormField form={form} isDisabled={_isLoading} />

        <PasswordFormField form={form} isDisabled={_isLoading} />

        <Button className="w-full" disabled={_isLoading} type="submit">
          {_isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </Button>
      </form>
    </Form>
  )
}
