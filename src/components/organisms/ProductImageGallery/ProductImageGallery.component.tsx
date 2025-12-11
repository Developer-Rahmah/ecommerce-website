"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import type { ProductImageGalleryProps } from "./ProductImageGallery.types"
import "./ProductImageGallery.style.css"

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, productName }) => {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="gallery">
      <div className="gallery__main-image">
        <Image src={mainImage || "/placeholder.svg"} alt={productName} fill className="object-cover" priority />
      </div>

      <div className="gallery__thumbnails">
        {images.map((imgSrc, index) => (
          <button
            key={index}
            onClick={() => setMainImage(imgSrc)}
            className={`gallery__thumbnail ${mainImage === imgSrc ? "gallery__thumbnail--active" : ""}`}
          >
            <Image
              src={imgSrc || "/placeholder.svg"}
              alt={`${productName} view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
