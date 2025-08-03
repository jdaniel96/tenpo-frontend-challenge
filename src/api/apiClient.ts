// src/api/apiClient.ts
import axios from 'axios'

import type { LoginValues } from '@/schemas'

import { API_PATHS, ROUTES } from '@/consts'

import { getToken, clearAll } from './tokenStorage'

export const apiClient = axios.create({
  timeout: 10000, // 10 seconds
})

// Request interceptor to attach token
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor for 401
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearAll()
      window.location.href = ROUTES.LOGIN
    }
    return Promise.reject(error)
  }
)

// Fake login simulation
apiClient.interceptors.request.use(async (config) => {
  if (config.url === API_PATHS.LOGIN && config.method === 'post') {
    const { email, password } = config.data as LoginValues

    await new Promise((res) => setTimeout(res, 1000))

    if (!email || !password) {
      throw new Error('Email and password are required!')
    }
    if (!email.includes('@')) {
      throw new Error('Please enter a valid email address!')
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters!')
    }

    config.adapter = async () => ({
      config,
      data: {
        token: `fake-jwt-token-${Date.now()}`,
        user: {
          email,
          id: crypto.randomUUID(),
          name: email.split('@')[0],
        },
      },
      headers: {},
      status: 200,
      statusText: 'OK',
    })

    return config
  }

  return config
})
