import * as z from 'zod'

export const loginSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Minimum 6 characters' }),
})

export type LoginValues = z.infer<typeof loginSchema>
