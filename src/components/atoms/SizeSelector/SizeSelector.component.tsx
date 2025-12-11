"use client"

import type React from "react"
import type { SizeSelectorProps } from "./SizeSelector.types"
import "./SizeSelector.style.css"

export const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onSizeChange, disabled = false }) => {
  return (
    <div className="size-selector">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSizeChange(size)}
          disabled={disabled}
          className={`size-selector__button ${selectedSize === size ? "size-selector__button--selected" : ""}`}
        >
          {size}
        </button>
      ))}
    </div>
  )
}
