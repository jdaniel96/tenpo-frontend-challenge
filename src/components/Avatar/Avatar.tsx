import { Avatar as SCN_Avatar, AvatarFallback, AvatarImage } from '../shadcn'

interface AvatarProps {
  alt: string
  className?: string
  fallback?: string
  src: string
}

export const Avatar = ({
  alt,
  className,
  fallback = 'A',
  src,
}: AvatarProps) => {
  return (
    <SCN_Avatar className={className}>
      <AvatarImage alt={alt} src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </SCN_Avatar>
  )
}
