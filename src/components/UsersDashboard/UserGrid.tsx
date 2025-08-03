'use client'

import type { MappedRandomUser } from '@/types'

import { EmptyState } from './EmptyState'
import { UserCard } from './UserCard'
import { UserListItem } from './UserListItem'

interface Props {
  users: MappedRandomUser[]
  viewMode: 'grid' | 'list'
}

export const UserGrid = ({ users, viewMode }: Props) => {
  if (users.length === 0) return <EmptyState />

  return (
    <div className="w-full space-y-6">
      {viewMode === 'grid' ? (
        <div className="grid w-full place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => (
            <UserCard key={user.login.uuid} user={user} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {users.map((user) => (
            <UserListItem key={user.login.uuid} user={user} />
          ))}
        </div>
      )}
    </div>
  )
}
