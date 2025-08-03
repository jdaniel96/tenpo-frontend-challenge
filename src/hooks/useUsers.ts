import { useCallback, useEffect, useState } from 'react'

import type { MappedRandomUser } from '@/types'

import { getUsersService } from '@/services'

interface UseUsersResult {
  error: Error | null
  isLoading: boolean
  refetch: () => Promise<void>
  users: MappedRandomUser[]
}

export const useUsers = (count = 2000): UseUsersResult => {
  const [users, setUsers] = useState<MappedRandomUser[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      const data = await getUsersService(count)
      const formatted = data.results.map((user) => ({
        ...user,
        address: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
        name: {
          ...user.name,
          full: `${user.name.title} ${user.name.first} ${user.name.last}`,
        },
      }))

      setUsers(formatted)
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }, [count])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return {
    error,
    isLoading,
    refetch: fetchUsers,
    users,
  }
}
