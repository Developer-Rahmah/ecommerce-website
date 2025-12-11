import type React from "react"
import Image from "next/image"
import { Typography } from "../../atoms/Typography"
import { PriceTag } from "../../atoms/PriceTag"
import type { ProductCardProps } from "./ProductCard.types"
import "./ProductCard.style.css"

export const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, currency = "SAR", badge }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="product-card__image" />
        {badge && <div className="product-card__badge">{badge}</div>}
      </div>
      <Typography variant="body" className="product-card__title">
        {title}
      </Typography>
      <PriceTag amount={price} currency={currency} className="product-card__price" />
    </div>
  )
}
