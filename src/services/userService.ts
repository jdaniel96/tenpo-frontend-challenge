import type { RandomUserResponse } from '@/types'

import { apiClient } from '@/api'
import { API_PATHS } from '@/consts'

export const getUsersService = async (
  results = 20
): Promise<RandomUserResponse> => {
  const response = await apiClient.get<RandomUserResponse>(
    `${API_PATHS.USERS}/?results=${results}&seed=tenpo`
  )

  return response.data
}
