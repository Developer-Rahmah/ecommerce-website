import type React from "react"
import Image from "next/image"
import type { StarRatingProps } from "./StarRating.types"
import "./StarRating.style.css"

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  totalStars = 5,
  size = "small",
  showNumber = false,
  className = "",
}) => {
  const iconSize = size === "small" ? 14 : size === "medium" ? 16 : 20

  return (
    <div className={`star-rating star-rating--${size} ${className}`}>
      <div className="star-rating__stars">
        {Array.from({ length: totalStars }).map((_, index) => {
          const isFilled = index < Math.floor(rating)
          return (
            <Image
              key={index}
              src={isFilled ? "/icons/star-filled.svg" : "/icons/star-outline.svg"}
              alt="star"
              width={iconSize}
              height={iconSize}
              className={`star-rating__star ${isFilled ? "star-rating__star--filled" : "star-rating__star--empty"}`}
            />
          )
        })}
      </div>
      {showNumber && <span className="star-rating__number">{rating}</span>}
    </div>
  )
}
