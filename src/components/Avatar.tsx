import { Avatar as SCN_Avatar, AvatarFallback, AvatarImage } from './shadcn'

interface AvatarProps {
  alt: string
  fallback?: string
  src: string
}

export const Avatar = ({ alt, fallback = 'A', src }: AvatarProps) => {
  return (
    <SCN_Avatar>
      <AvatarImage alt={alt} src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </SCN_Avatar>
  )
}
