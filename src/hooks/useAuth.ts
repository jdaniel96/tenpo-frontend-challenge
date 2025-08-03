'use client'

import { useContext } from 'react'

import type { AuthContextType } from '@/contexts'

import { AuthContext } from '@/contexts'

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
