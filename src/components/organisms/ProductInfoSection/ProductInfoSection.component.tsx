"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import type { ProductInfoSectionProps } from "./ProductInfoSection.types"
import "./ProductInfoSection.style.css"
import { iconsObject } from "@/src/assets/icons/iconsObject"

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({
  productName,
  price,
  currency = "SAR",
  rating = 521,
}) => {
  const [selectedSize, setSelectedSize] = useState("S")
  const [selectedCity, setSelectedCity] = useState("Riyadh")
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

  return (
    <div className="product-info">
      <div className="product-info__header">
        <div className="product-info__title-wrapper">
          <h1 className="product-info__title">{productName}</h1>
        </div>
        <div className="product-info__rating">
          <Image src={iconsObject.starFilled || "/placeholder.svg"} alt="Rating" width={16} height={16} />
          <span className="product-info__rating-text">{rating}</span>
        </div>
      </div>

      <div className="product-info__sizes">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`product-info__size-button ${selectedSize === size ? "product-info__size-button--active" : ""}`}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="product-info__buttons">
        <button className="product-info__button product-info__button--secondary">Buy it Now</button>
        <button className="product-info__button product-info__button--primary">Add to Cart</button>
      </div>

      <div className="product-info__promo">
        <Image
          src={iconsObject.tagPromo || "/placeholder.svg"}
          alt="Promo"
          width={18}
          height={18}
          className="product-info__promo-icon"
        />
        <p className="product-info__promo-text">
          For a 10% off of your first order and for a limited time only use code:{" "}
          <span className="product-info__promo-code">NEW</span>
        </p>
      </div>

      <div className="product-info__delivery">
        <div className="product-info__delivery-line">
          <span>Delivery within 1-2 business days to</span>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="product-info__city-select"
          >
            <option value="Riyadh">Riyadh</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Dammam">Dammam</option>
            <option value="Other Cities">Other Cities</option>
          </select>
        </div>
        <p className="product-info__return-text">
          You can request a <span className="product-info__return-highlight">free return</span> in KSA within 7 days of
          delivery
        </p>
      </div>
    </div>
  )
}
