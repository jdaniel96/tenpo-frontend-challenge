import { useEffect, type JSX } from 'react'
import {
  useRouteError,
  useLocation,
  isRouteErrorResponse,
  Link,
} from 'react-router'

import { AlertTriangle, Ban, ShieldAlert, ServerCrash } from 'lucide-react'

import { PrivateLayout, PublicLayout } from '@/components'
import { ROUTES } from '@/consts'
import { useAuth } from '@/hooks'

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

const ErrorContent = ({
  children,
  icon,
  message,
  title,
}: {
  icon: JSX.Element
  title: string
  message: string
  children?: React.ReactNode
}) => (
  <div className="text-foreground flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-4 text-center">
    {icon}
    <h1 className="text-2xl font-bold">{title}</h1>
    <p className="text-muted-foreground">{message}</p>
    {children}
  </div>
)

const ErrorPage = () => {
  const error = useRouteError()
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error('[Router Error]', error)
    } else {
      // TODO: send to monitoring service
    }
  }, [error])

  let content: JSX.Element

  const navigationButton = (
    <Link
      className="bg-primary hover:bg-primary/90 mt-4 inline-block rounded px-4 py-2 text-white"
      replace
      to={isAuthenticated ? ROUTES.HOME : ROUTES.LOGIN}
    >
      {isAuthenticated ? 'Back to Home' : 'Go To Login'}
    </Link>
  )

  if (isRouteErrorResponse(error)) {
    const status = error.status
    const fallback: StatusMap = {
      icon: <AlertTriangle className="text-muted h-10 w-10" />,
      message: 'Something went wrong.',
      title: 'Error',
    }

    const { icon, message, title } = STATUS_MESSAGES[status] ?? fallback

    content = (
      <ErrorContent icon={icon} message={message} title={title}>
        {navigationButton}
      </ErrorContent>
    )
  } else if (!error) {
    content = (
      <ErrorContent
        icon={<AlertTriangle className="text-muted-foreground h-10 w-10" />}
        message={`The page "${location.pathname}" was not found.`}
        title="404 - Not Found"
      >
        {navigationButton}
      </ErrorContent>
    )
  } else {
    const message =
      error instanceof Error ? error.message : 'An unexpected error occurred.'

    content = (
      <ErrorContent
        icon={<ServerCrash className="text-destructive h-10 w-10" />}
        message={message}
        title="Unexpected Error"
      >
        {navigationButton}
      </ErrorContent>
    )
  }

  const Layout = isAuthenticated ? PrivateLayout : PublicLayout

  return <Layout>{content}</Layout>
}

export default ErrorPage
