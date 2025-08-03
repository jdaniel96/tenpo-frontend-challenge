import type { LoginResponse } from '@/types'

export const loginService = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (!email || !password) {
    throw new Error('Email and password are required1')
  }

  if (!email.includes('@')) {
    throw new Error('Please enter a valid email address!')
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters!')
  }

  return {
    token: `fake-jwt-token-${Date.now()}`,
    user: {
      email,
      id: '1',
      name: email.split('@')[0],
    },
  }
}
