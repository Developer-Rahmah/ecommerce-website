import type React from "react"
import Image from "next/image"
import type { ProductImageProps } from "./ProductImage.types"
import "./ProductImage.style.css"

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  objectFit = "cover",
}) => {
  return (
    <div className={`product-image ${fill ? "product-image--fill" : ""} ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        style={{ objectFit }}
        priority={priority}
      />
    </div>
  )
}
