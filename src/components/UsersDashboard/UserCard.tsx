import { Calendar, Mail, MapPin, Phone } from 'lucide-react'

import type { MappedRandomUser } from '@/types'

import { Avatar } from '@/components'
import { Badge, Card, CardContent } from '@/components/shadcn'

export const UserCard = ({ user }: { user: MappedRandomUser }) => {
  return (
    <Card className="h-full w-full max-w-xs transition-all hover:shadow-lg">
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Avatar
              alt={user.name.full}
              className="h-20 w-20"
              src={user.picture.large}
            />
            <Badge
              className="absolute -right-1 -bottom-1 text-xs"
              variant="secondary"
            >
              {user.dob.age}
            </Badge>
          </div>

          <div className="text-center">
            <h3 className="text-foreground font-semibold">{user.name.full}</h3>
            <p className="text-muted-foreground text-sm capitalize">
              {user.gender}
            </p>
          </div>

          <div className="w-full space-y-2 text-sm">
            <div className="text-muted-foreground flex items-center space-x-2">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{user.email}</span>
            </div>
            <div className="text-muted-foreground flex items-center space-x-2">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>{user.phone}</span>
            </div>
            <div className="text-muted-foreground flex items-center space-x-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{user.address}</span>
            </div>
            <div className="text-muted-foreground flex items-center space-x-2">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <span>Born {new Date(user.dob.date).toLocaleDateString()}</span>
            </div>
          </div>

          <Badge className="text-xs" variant="outline">
            {user.nat}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
