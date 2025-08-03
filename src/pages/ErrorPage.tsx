import { type JSX, useEffect } from 'react'
import {
  isRouteErrorResponse,
  useRouteError,
  useNavigate,
  Link,
} from 'react-router'

import { AlertTriangle, Ban, ShieldAlert, ServerCrash } from 'lucide-react'

interface StatusMap {
  icon: JSX.Element
  message: string
  title: string
}

const STATUS_MESSAGES: Record<number, StatusMap> = {
  401: {
    icon: <ShieldAlert className="h-10 w-10 text-yellow-500" />,
    message: 'You need to log in to access this page.',
    title: 'Unauthorized',
  },
  403: {
    icon: <Ban className="h-10 w-10 text-red-500" />,
    message: 'You do not have permission to access this resource.',
    title: 'Forbidden',
  },
  404: {
    icon: <AlertTriangle className="h-10 w-10 text-orange-500" />,
    message: 'The page you’re looking for does not exist.',
    title: 'Page Not Found',
  },
  500: {
    icon: <ServerCrash className="text-destructive h-10 w-10" />,
    message: 'An unexpected error occurred. Please try again later.',
    title: 'Server Error',
  },
}

const ErrorPage = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  useEffect(() => {
    // Log error for analytics or debugging
    if (import.meta.env.DEV) {
      console.error('[Router Error]', error)
    } else {
      // TODO: send to monitoring service (e.g., Sentry)
    }
  }, [error])

  // If the error comes from a loader/action/route
  if (isRouteErrorResponse(error)) {
    const status = error.status
    const fallback = {
      icon: <AlertTriangle className="text-muted h-10 w-10" />,
      message: 'Something went wrong.',
      title: 'Error',
    }

    const { icon, message, title } = STATUS_MESSAGES[status] ?? fallback

    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
        {icon}
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{message}</p>
        <Link
          className="bg-primary hover:bg-primary/90 mt-4 inline-block rounded px-4 py-2 text-white"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  // Generic or thrown error (component crash, lazy load fail, etc.)
  const fallbackMessage =
    error instanceof Error ? error.message : 'Unknown error occurred'

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <AlertTriangle className="text-muted-foreground h-10 w-10" />
      <h1 className="text-2xl font-bold">Unexpected Error</h1>
      <p className="text-muted-foreground">{fallbackMessage}</p>
      <button
        className="text-primary mt-4 rounded border px-4 py-2 text-sm hover:underline"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  )
}

export default ErrorPage
