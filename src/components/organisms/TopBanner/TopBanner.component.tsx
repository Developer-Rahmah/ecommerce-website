import type React from "react"
import Image from "next/image"
import type { TopBannerProps } from "./TopBanner.types"
import "./TopBanner.style.css"

export const TopBanner: React.FC<TopBannerProps> = ({ className = "" }) => {
  return (
    <div className={`top-banner ${className}`}>
      <div className="top-banner__container">
        <div className="top-banner__content">
          <div className="top-banner__item">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 16H11C15 16 17 14 17 10V8C17 4 15 2 11 2H7C3 2 1 4 1 8V10C1 14 3 16 7 16Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 6.5L7.72 10.28L6 8.56"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="top-banner__text">Free Returns</span>
          </div>
          <div className="top-banner__item">
            <Image src="/icons/delivery-truck.svg" alt="Fast Delivery" width={20} height={14} />
            <span className="top-banner__text">Fast & Free Delivery</span>
          </div>
          <div className="top-banner__item top-banner__item--hidden-mobile">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.25 7.5L6.75 12M6.75 7.5L11.25 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path
                d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
            <span className="top-banner__text">Finest Fabrics</span>
          </div>
        </div>
      </div>
    </div>
  )
}
