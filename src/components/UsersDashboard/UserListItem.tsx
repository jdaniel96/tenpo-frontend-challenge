import { Phone, MapPin, Calendar } from 'lucide-react'

import type { MappedRandomUser } from '@/types'

import { Avatar } from '@/components'
import { Badge } from '@/components/shadcn'

export const UserListItem = ({ user }: { user: MappedRandomUser }) => {
  return (
    <div className="flex flex-col gap-2 rounded-md border p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <Avatar alt={user.name.full} src={user.picture.thumbnail} />
        <div>
          <h3 className="text-sm font-semibold">{user.name.full}</h3>
          <p className="text-muted-foreground text-xs">{user.email}</p>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-1 text-sm sm:mt-0 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          {user.phone}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {user.location.country}
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {new Date(user.dob.date).toLocaleDateString()}
        </div>
        <Badge>{user.nat}</Badge>
      </div>
    </div>
  )
}
