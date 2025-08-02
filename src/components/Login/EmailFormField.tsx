import type { UseFormReturn } from 'react-hook-form'

import type { LoginValues } from '@/schemas'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/shadcn'

interface EmailFormFieldProps {
  form: UseFormReturn<LoginValues>
  isDisabled: boolean
}

export const EmailFormField = ({ form, isDisabled }: EmailFormFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              {...field}
              autoComplete="email"
              disabled={isDisabled}
              placeholder="Enter your email"
              type="email"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
