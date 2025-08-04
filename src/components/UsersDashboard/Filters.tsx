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
  onSearch: (val: string) => void
  onUpdateCountry: (val: string | null) => void
  onUpdateGender: (val: string | null) => void
  searchValue: string
  selectedCountry: string | null
  selectedGender: string | null
  users: MappedRandomUser[]
}

export const Filters = ({
  onSearch,
  onUpdateCountry,
  onUpdateGender,
  searchValue,
  selectedCountry,
  selectedGender,
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
          value={searchValue}
        />
      </div>

      <Select
        onValueChange={(val) => onUpdateGender(val === 'all' ? null : val)}
        value={selectedGender ?? 'all'}
      >
        <SelectTrigger>
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Genders</SelectItem>
          {genders.map((gender) => (
            <SelectItem className="capitalize" key={gender} value={gender}>
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(val) => onUpdateCountry(val === 'all' ? null : val)}
        value={selectedCountry ?? 'all'}
      >
        <SelectTrigger>
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Countries</SelectItem>
          {countries.map((country) => (
            <SelectItem key={country} value={country}>
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        onClick={() => {
          onSearch('')
          onUpdateGender(null)
          onUpdateCountry(null)
        }}
      >
        <Filter className="mr-2 h-4 w-4" />
        Clear Filters
      </Button>
    </div>
  )
}
