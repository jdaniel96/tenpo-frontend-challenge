import { Calendar, MapPin, Phone } from 'lucide-react'

import type { MappedRandomUser } from '@/types'

import { Avatar } from '@/components'
import { Badge } from '@/components/shadcn'

export const UserListItem = ({ user }: { user: MappedRandomUser }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <Avatar
          alt={user.name.full}
          className="h-10 w-10"
          src={user.picture.thumbnail}
        />
        <div>
          <h3 className="text-sm font-semibold">{user.name.full}</h3>
          <p className="text-muted-foreground text-xs">{user.email}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm sm:gap-6">
        <div className="text-muted-foreground flex items-center gap-2">
          <Phone className="h-4 w-4" />
          {user.phone}
        </div>
        <div className="text-muted-foreground flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {user.location.country}
        </div>
        <div className="text-muted-foreground flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {new Date(user.dob.date).toLocaleDateString()}
        </div>
        <Badge variant="outline">{user.nat}</Badge>
      </div>
    </div>
  )
}
