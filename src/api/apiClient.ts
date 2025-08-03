import axios from 'axios'

import { ROUTES } from '@/consts'

import { getToken, clearAll } from './tokenStorage'

export const apiClient = axios.create({
  timeout: 10000,
})

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
