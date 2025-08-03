import type { RandomUser } from '@/types'

import {
  Input,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/shadcn'

interface Props {
  country: string | null
  gender: string | null
  onCountry: (val: string | null) => void
  onGender: (val: string | null) => void
  onSearch: (val: string) => void
  search: string
  users: RandomUser[]
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
    <div className="flex flex-wrap gap-2">
      <Input
        className="max-w-xs"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search users..."
        value={search}
      />

      <Select
        onValueChange={(val) => onGender(val === 'all' ? null : val)}
        value={gender ?? 'all'}
      >
        <SelectTrigger className="w-[140px]">
          {gender ?? 'All Genders'}
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
        <SelectTrigger className="w-[180px]">
          {country ?? 'All Countries'}
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
    </div>
  )
}
