import type React from "react"
import Image from "next/image"
import type { PriceTagProps } from "./PriceTag.types"
import "./PriceTag.style.css"

export const PriceTag: React.FC<PriceTagProps> = ({
  amount,
  currency = "SAR",
  size = "medium",
  showCurrency = true,
  className = "",
}) => {
  const iconSize = size === "small" ? 12 : size === "large" ? 16 : 14

  return (
    <div className={`price-tag price-tag--${size} ${className}`}>
      {showCurrency && (
        <Image
          src="/icons/riyal.svg"
          alt={currency}
          width={iconSize}
          height={iconSize}
          className="price-tag__currency"
        />
      )}
      <span>{amount}</span>
    </div>
  )
}
