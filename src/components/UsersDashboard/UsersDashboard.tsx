import { useMemo, useState } from 'react'

import type { MappedRandomUser } from '@/types'

import { Button } from '@/components/shadcn'

import { EmptyState } from './EmptyState'
import { Filters } from './Filters'
import { UserGrid } from './UserGrid'
import { ViewModeToggle } from './ViewModeToggle'

interface Props {
  users: MappedRandomUser[]
}

export const UsersDashboard = ({ users }: Props) => {
  const [search, setSearch] = useState('')
  const [gender, setGender] = useState<string | null>(null)
  const [country, setCountry] = useState<string | null>(null)
  const [view, setView] = useState<'grid' | 'list'>('grid')

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchSearch =
        user.name.full.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      const matchGender = !gender || user.gender === gender
      const matchCountry = !country || user.location.country === country
      return matchSearch && matchGender && matchCountry
    })
  }, [search, gender, country, users])

  return (
    <div className="container space-y-6 py-8">
      <div className="flex flex-wrap items-center gap-4">
        <ViewModeToggle setView={setView} view={view} />
        <Filters
          country={country}
          gender={gender}
          onCountry={setCountry}
          onGender={setGender}
          onSearch={setSearch}
          search={search}
          users={users}
        />
        <Button
          onClick={() => {
            setSearch('')
            setGender(null)
            setCountry(null)
          }}
          variant="outline"
        >
          Clear Filters
        </Button>
      </div>

      <h2 className="text-lg font-semibold">Users ({filteredUsers.length})</h2>

      {filteredUsers.length === 0 ? (
        <EmptyState />
      ) : (
        <UserGrid users={filteredUsers} view={view} />
      )}
    </div>
  )
}
