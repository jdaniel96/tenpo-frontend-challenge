import { Search, Filter } from 'lucide-react'

import type { MappedRandomUser } from '@/types'

import {
  Input,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Button,
} from '@/components/shadcn'

interface Props {
  country: string | null
  gender: string | null
  onCountry: (val: string | null) => void
  onGender: (val: string | null) => void
  onSearch: (val: string) => void
  search: string
  users: MappedRandomUser[]
}

export const Filters = ({
  country,
  gender,
  onCountry,
  onGender,
  onSearch,
  search,
  users,
}: Props) => {
  const countries = Array.from(
    new Set(users.map((user) => user.location.country))
  ).sort()
  const genders = ['male', 'female']

  return (
    <div className="flex flex-wrap gap-4">
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input
          className="pl-10"
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search users..."
          value={search}
        />
      </div>

      <Select
        onValueChange={(val) => onGender(val === 'all' ? null : val)}
        value={gender ?? 'all'}
      >
        <SelectTrigger>
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Genders</SelectItem>
          {genders.map((g) => (
            <SelectItem key={g} value={g}>
              {g}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(val) => onCountry(val === 'all' ? null : val)}
        value={country ?? 'all'}
      >
        <SelectTrigger>
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Countries</SelectItem>
          {countries.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        onClick={() => {
          onSearch('')
          onGender(null)
          onCountry(null)
        }}
        variant="outline"
      >
        <Filter className="mr-2 h-4 w-4" />
        Clear Filters
      </Button>
    </div>
  )
}
