import { RefreshCw, AlertTriangle } from 'lucide-react'

import { Loader, RenderIf, UsersDashboard } from '@/components'
import { Button } from '@/components/shadcn'
import { API_PATHS } from '@/consts'
import { useUsers } from '@/hooks'

const ErrorMessage = (
  <div className="text-muted-foreground flex flex-col items-center justify-center py-20 text-center">
    <AlertTriangle className="text-destructive mb-4 h-10 w-10" />
    <h2 className="text-lg font-semibold">Error fetching users</h2>
    <p className="text-sm">Try refreshing the data or contact support.</p>
  </div>
)

const EmptyStateMessage = (
  <div className="text-muted-foreground flex flex-col items-center justify-center py-20 text-center">
    <AlertTriangle className="text-muted-foreground mb-4 h-10 w-10" />
    <h2 className="text-lg font-semibold">No users found</h2>
    <p className="text-sm">Try refreshing the data.</p>
  </div>
)
const HomePage = () => {
  const { isError, isLoading, refetch, users } = useUsers()

  return (
    <div className="container space-y-6 py-4 sm:py-8">
      <title>Tenpo | Home</title>
      <meta content="Home page" name="description" />

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage and explore user data from around the world
          </p>
        </div>

        <Button disabled={isLoading} onClick={refetch}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh Data
        </Button>
      </div>

      <RenderIf shouldRender={isLoading}>
        <Loader
          message={`Fetching users from ${API_PATHS.USERS}`}
          title="Loading users..."
        />
      </RenderIf>
      <RenderIf shouldRender={isError}>{ErrorMessage}</RenderIf>
      <RenderIf shouldRender={!isLoading && !isError && users.length === 0}>
        {EmptyStateMessage}
      </RenderIf>

      <RenderIf shouldRender={!isLoading && !isError && users.length > 0}>
        <UsersDashboard users={users} />
      </RenderIf>
    </div>
  )
}

export default HomePage
