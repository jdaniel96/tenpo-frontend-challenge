import type { RandomUserResponse } from '@/types'

import { apiClient } from '@/api'
import { API_PATHS } from '@/consts'

export const getUsersService = async (
  results = 20
): Promise<RandomUserResponse> => {
  // &seed=tenpo => for testing purposes add this to the URL to get the same data every time
  const URL = `${API_PATHS.USERS}/?results=${results}`
  const response = await apiClient.get<RandomUserResponse>(URL)

  return response.data
}
