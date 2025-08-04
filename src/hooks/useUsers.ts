import { useCallback, useEffect, useState } from 'react'

import { toast } from 'sonner'

import type { MappedRandomUser } from '@/types'

import { getUsersService } from '@/services'

interface UseUsersResult {
  isError: boolean
  isLoading: boolean
  refetch: () => Promise<void>
  users: MappedRandomUser[]
}

export const useUsers = (count = 2000): UseUsersResult => {
  const [users, setUsers] = useState<MappedRandomUser[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true)
      setIsError(false)

      const data = await getUsersService(count)
      const mappedUsers = data.results.map((user) => ({
        ...user,
        address: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
        name: {
          ...user.name,
          full: `${user.name.title} ${user.name.first} ${user.name.last}`,
        },
      }))

      setUsers(mappedUsers)
    } catch (err) {
      setIsError(true)
      console.error(`Error fetching users: ${err}`)
      toast.error('Error fetching users! Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [count])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return {
    isError,
    isLoading,
    refetch: fetchUsers,
    users,
  }
}
