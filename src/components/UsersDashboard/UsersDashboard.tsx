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
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchSearch =
        user.name.full.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase())
      const matchGender = !selectedGender || user.gender === selectedGender
      const matchCountry =
        !selectedCountry || user.location.country === selectedCountry

      return matchSearch && matchGender && matchCountry
    })
  }, [users, searchValue, selectedGender, selectedCountry])

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
        <ViewModeToggle onChange={setViewMode} viewMode={viewMode} />
      </div>

      <Filters
        onSearch={setSearchValue}
        onUpdateCountry={setSelectedCountry}
        onUpdateGender={setSelectedGender}
        searchValue={searchValue}
        selectedCountry={selectedCountry}
        selectedGender={selectedGender}
        users={users}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
      )}
      <UserGrid
        users={paginatedUsers.length > 0 ? paginatedUsers : filteredUsers}
        viewMode={viewMode}
      />
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
