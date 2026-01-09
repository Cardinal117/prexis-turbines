import Image from 'next/image'

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
      src={src}
      alt={alt}
      {...props}
    />
  )
}