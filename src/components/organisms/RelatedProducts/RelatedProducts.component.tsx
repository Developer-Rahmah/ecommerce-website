"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/src/contexts/LanguageContext"
import type { RelatedProductsProps } from "./RelatedProducts.types"
import type { RelatedProduct as APIRelatedProduct } from "@/src/services/api/productService"
import "./RelatedProducts.style.css"
import { iconsObject } from "@/src/assets/icons/iconsObject"

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const displayProducts =
    products?.map((p: APIRelatedProduct) => ({
      id: Number(p.id.split("-")[1]) || 1,
      image: p.image,
      title: p.name,
      price: p.price,
      badge: p.newArrival ? t("relatedProducts.newArrival") : undefined,
    })) || []

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProducts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProducts.length) % displayProducts.length)
  }

  if (!displayProducts.length) return null

  return (
    <section className="related-products">
      <h2 className="related-products__title">{t("relatedProducts.title")}</h2>

      {/* Desktop Grid */}
      <div className="related-products__grid">
        {displayProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] mb-3 overflow-hidden bg-[#C8B5A0]">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.badge && (
                <div className="absolute top-2 left-2 bg-white px-2.5 py-1 text-[10px] md:text-xs font-normal text-[#212121]">
                  {product.badge}
                </div>
              )}
            </div>
            <h3 className="text-sm font-normal text-[#212121] mb-1">{product.title}</h3>
            <div className="flex items-center gap-1">
              <Image src={iconsObject.riyal || "/placeholder.svg"} alt="SAR" width={12} height={12} />
              <span className="text-sm font-normal text-[#212121]">{product.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="related-products__carousel">
        <div className="related-products__carousel-wrapper">
          <div className="related-products__carousel-track">
            <div
              className="related-products__carousel-slides"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {displayProducts.map((product) => (
                <div key={product.id} className="related-products__carousel-slide">
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[3/4] mb-3 overflow-hidden bg-[#C8B5A0]">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                      {product.badge && (
                        <div className="absolute top-2 left-2 bg-white px-2.5 py-1 text-xs font-normal text-[#212121]">
                          {product.badge}
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm font-normal text-[#212121] mb-1">{product.title}</h3>
                    <div className="flex items-center gap-1">
                      <Image src={iconsObject.riyal || "/placeholder.svg"} alt="SAR" width={12} height={12} />
                      <span className="text-sm font-normal text-[#212121]">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="related-products__nav-button related-products__nav-button--prev"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12 4L6 10L12 16"
                stroke="#212121"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="related-products__nav-button related-products__nav-button--next"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4L14 10L8 16" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="related-products__indicators">
          {displayProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`related-products__indicator ${index === currentIndex ? "related-products__indicator--active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
