import type { RandomUserResponse } from '@/types'

import { apiClient } from '@/api'
import { API_PATHS } from '@/consts'

export const getUsersService = async (
  results = 20
): Promise<RandomUserResponse> => {
  const URL = `${API_PATHS.USERS}/?results=${results}`
  console.log(URL)
  const response = await apiClient.get<RandomUserResponse>(URL)

  return response.data
}
