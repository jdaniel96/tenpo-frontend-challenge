import type { User } from '../types/auth'

const TOKEN_KEY = 'tenpo_auth_token'
const USER_KEY = 'tenpo_user_data'

export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY)
}

export const setUser = (user: User): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getUser = (): User | null => {
  const userData = localStorage.getItem(USER_KEY)
  if (!userData) return null

  try {
    return JSON.parse(userData)
  } catch {
    return null
  }
}

export const clearAll = (): void => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}
