import { RefreshCw, AlertTriangle } from 'lucide-react'

import { UsersDashboard } from '@/components'
import { Button } from '@/components/shadcn'
import { useUsers } from '@/hooks'

const HomePage = () => {
  const { error, isLoading, refetch, users } = useUsers()

  if (isLoading) return <div className="py-20 text-center">Loading...</div>
  if (error)
    return <div className="py-20 text-center">Error: {error.message}</div>

  return (
    <div className="container space-y-6 py-8">
      <title>Tenpo | Home</title>
      <meta content="Home page" name="description" />

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage and explore user data from around the world
          </p>
        </div>

        <Button onClick={refetch} size="sm">
          <RefreshCw />
          Refresh Data
        </Button>
      </div>

      {users.length > 0 ? (
        <UsersDashboard users={users} />
      ) : (
        <div className="text-muted-foreground flex flex-col items-center justify-center py-20 text-center">
          <AlertTriangle className="text-muted-foreground mb-4 h-10 w-10" />
          <h2 className="text-lg font-semibold">No users found</h2>
          <p className="text-sm">Try refreshing the data.</p>
        </div>
      )}
    </div>
  )
}

export default HomePage
