import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

import { alertVariants } from './alertVariants'

const Alert = ({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) => {
  return (
    <div
      className={cn(alertVariants({ variant }), className)}
      data-slot="alert"
      role="alert"
      {...props}
    />
  )
}

const AlertTitle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
        className
      )}
      data-slot="alert-title"
      {...props}
    />
  )
}

const AlertDescription = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className
      )}
      data-slot="alert-description"
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
