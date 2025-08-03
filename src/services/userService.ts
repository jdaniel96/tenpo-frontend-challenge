import type { RandomUserResponse } from '@/types'

import { apiClient } from '@/api'

export const getUsersService = async (
  results = 20
): Promise<RandomUserResponse> => {
  const response = await apiClient.get<RandomUserResponse>(
    `https://randomuser.me/api/?results=${results}&seed=tenpo`
  )

  return response.data
}
