import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { Button, Form } from '@/components/shadcn'
import { loginSchema, type LoginValues } from '@/schemas'

import { EmailFormField } from './EmailFormField'
import { PasswordFormField } from './PasswordFormField'

export const LoginForm = () => {
  const form = useForm<LoginValues>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginSchema),
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (data: LoginValues) => {
    console.log('onSubmitForm', data)
    // fake login
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <EmailFormField form={form} isDisabled={isLoading} />

        <PasswordFormField form={form} isDisabled={isLoading} />

        <Button className="w-full" disabled={isLoading} type="submit">
          {isLoading ? (
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
