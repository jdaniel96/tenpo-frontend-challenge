import type { LoginResponse } from '@/types'

import { apiClient } from '@/api'
import { API_PATHS } from '@/consts'

export const loginService = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>(API_PATHS.LOGIN, {
    email,
    password,
  })

  return response.data
}
