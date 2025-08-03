import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

import type { MappedRandomUser } from '@/types'

import { Badge, Card } from '@/components/shadcn'

export const UserCard = ({ user }: { user: MappedRandomUser }) => {
  return (
    <Card className="flex flex-col gap-2 p-4 text-center">
      <div className="mx-auto flex flex-col items-center">
        <img
          alt={user.name.first}
          className="mb-2 h-16 w-16 rounded-full"
          src={user.picture.large}
        />
        <span className="bg-muted rounded-full px-2 text-xs font-medium">
          {user.dob.age}
        </span>
      </div>

      <div className="space-y-1">
        <h3 className="text-base font-semibold">{user.name.full}</h3>
        <p className="text-muted-foreground text-sm">{user.gender}</p>

        <div className="mt-2 space-y-1 text-left text-sm">
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            {user.email}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {user.phone}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {user.location.city}, {user.location.state}, {user.location.country}
          </p>
          <p className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Born {new Date(user.dob.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      <Badge className="mt-2">{user.nat}</Badge>
    </Card>
  )
}
