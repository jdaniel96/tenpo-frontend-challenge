import { AlertTriangle } from 'lucide-react'

export const EmptyState = () => {
  return (
    <div className="text-muted-foreground flex min-h-[400px] flex-col items-center justify-center text-center">
      <AlertTriangle className="mb-4 h-10 w-10" />
      <h2 className="text-lg font-semibold">No users found</h2>
      <p className="text-sm">Try adjusting your search or filters</p>
    </div>
  )
}
