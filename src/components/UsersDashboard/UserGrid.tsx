import { useRef } from 'react'

import { useVirtualizer } from '@tanstack/react-virtual'

import type { MappedRandomUser } from '@/types'

import { UserCard } from './UserCard'
import { UserListItem } from './UserListItem'

interface Props {
  users: MappedRandomUser[]
  view: 'grid' | 'list'
}

export const UserGrid = ({ users, view }: Props) => {
  const parentRef = useRef<HTMLDivElement | null>(null)

  const rowVirtualizer = useVirtualizer({
    count: users.length,
    estimateSize: () => 250,
    getScrollElement: () => parentRef.current,
    overscan: 10,
  })

  return (
    <div className="h-[70vh] overflow-auto rounded border" ref={parentRef}>
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const user = users[virtualRow.index]
          return (
            <div
              className="absolute top-0 left-0 w-full px-4 py-2"
              key={user.login.uuid}
              style={{ transform: `translateY(${virtualRow.start}px)` }}
            >
              {view === 'grid' ? (
                <UserCard user={user} />
              ) : (
                <UserListItem user={user} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
