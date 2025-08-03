import { useState, useMemo } from 'react'

import type { MappedRandomUser } from '@/types'

import { Filters } from './Filters'
import { Pagination } from './Pagination'
import { UserGrid } from './UserGrid'
import { ViewModeToggle } from './ViewModeToggle'

interface Props {
  users: MappedRandomUser[]
}

const ITEMS_PER_PAGE = 12

export const UsersDashboard = ({ users }: Props) => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [gender, setGender] = useState<string | null>(null)
  const [country, setCountry] = useState<string | null>(null)

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchSearch =
        user.name.full.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      const matchGender = !gender || user.gender === gender
      const matchCountry = !country || user.location.country === country

      return matchSearch && matchGender && matchCountry
    })
  }, [users, search, gender, country])

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    const end = start + ITEMS_PER_PAGE

    return filteredUsers.slice(start, end)
  }, [filteredUsers, currentPage])

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h2 className="text-2xl font-bold">
          Users ({filteredUsers.length.toLocaleString()})
        </h2>
        <ViewModeToggle onChange={setView} viewMode={view} />
      </div>

      <Filters
        country={country}
        gender={gender}
        onCountry={setCountry}
        onGender={setGender}
        onSearch={setSearch}
        search={search}
        users={filteredUsers}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
      )}

      <UserGrid users={paginatedUsers} viewMode={view} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
