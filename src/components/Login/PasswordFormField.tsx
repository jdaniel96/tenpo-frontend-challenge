import { useState } from 'react'
import type { UseFormReturn } from 'react-hook-form'

import { Eye, EyeOff } from 'lucide-react'

import type { LoginValues } from '@/schemas'

import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/shadcn'

interface PasswordFormFieldProps {
  form: UseFormReturn<LoginValues>
  isDisabled: boolean
}

export const PasswordFormField = ({
  form,
  isDisabled,
}: PasswordFormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                autoComplete="current-password"
                className="pr-10"
                disabled={isDisabled}
                placeholder="Enter your password"
                type={showPassword ? 'text' : 'password'}
              />
              <Button
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                disabled={isDisabled}
                onClick={() => setShowPassword(!showPassword)}
                size="sm"
                type="button"
                variant="ghost"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
