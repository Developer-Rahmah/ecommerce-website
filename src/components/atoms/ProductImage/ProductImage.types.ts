export interface ProductImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  objectFit?: "contain" | "cover" | "fill" | "none"
}
