import { Loader2 } from 'lucide-react'

interface LoaderProps {
  message?: string
  title?: string
}

export const Loader = ({ message = '', title = 'Loading...' }: LoaderProps) => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="text-center">
      <Loader2 className="text-primary mx-auto h-8 w-8 animate-spin" />
      <p className="mt-4 text-lg font-medium">{title}</p>
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  </div>
)
