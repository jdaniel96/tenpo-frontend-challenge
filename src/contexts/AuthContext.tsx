import { createContext, useState, type ReactNode } from 'react'

import type { User } from '@/types/auth'

import { getToken, getUser, setToken, setUser, clearAll } from '@/api'
import { loginService } from '@/services'

export interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  token: string | null
  user: User | null
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [tokenData, setTokenData] = useState(getToken())
  const [userData, setUserData] = useState(getUser())
  const [isLoading, setIsLoading] = useState(false)

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await loginService(email, password)
      setToken(response.token)
      setUser(response.user)
      setTokenData(response.token)
      setUserData(response.user)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    clearAll()
    setTokenData(null)
    setUserData(null)
  }

  return (
    <AuthContext
      value={{
        isAuthenticated: Boolean(tokenData),
        isLoading,
        login,
        logout,
        token: tokenData,
        user: userData,
      }}
    >
      {children}
    </AuthContext>
  )
}
