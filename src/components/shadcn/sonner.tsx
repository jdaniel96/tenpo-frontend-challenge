'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

type CSSVars = React.CSSProperties & Record<`--${string}`, string>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  const style: CSSVars = {
    '--normal-bg': 'var(--popover)',
    '--normal-border': 'var(--border)',
    '--normal-text': 'var(--popover-foreground)',
  }

  return (
    <Sonner
      className="toaster group"
      style={style}
      theme={theme as ToasterProps['theme']}
      {...props}
    />
  )
}

export { Toaster }
