import Image from 'next/image'
import { withBasePath } from '@/lib/paths'

interface BaseImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  [key: string]: any
}

export function BaseImage({ src, alt, ...props }: BaseImageProps) {
  return (
    <Image
      src={withBasePath(src)}
      alt={alt}
      {...props}
    />
  )
}