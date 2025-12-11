"use client"

import type React from "react"
import type { SliderProps } from "./Slider.types"
import styles from "./Slider.module.css"

export const Slider: React.FC<SliderProps> = ({ value, onChange, labels, className = "" }) => {
  const stepCount = labels.length
  const stepPercentage = 100 / (stepCount - 1)
  const activeIndex = Math.round(value / stepPercentage)

  const handleChange = (newValue: number) => {
    const snappedIndex = Math.round(newValue / stepPercentage)
    const snappedValue = snappedIndex * stepPercentage
    onChange(snappedValue)
  }

  return (
    <div className={`${styles["slider-container"]} ${className}`}>
      <div className={styles["slider-track-wrapper"]}>
        <div className={styles["slider-track-gray"]} />

        {labels.map((_, index) => {
          const position = index * stepPercentage
          return <div key={index} className={styles["slider-step-circle"]} style={{ left: `${position}%` }} />
        })}

        <div className={styles["slider-thumb-pill"]} style={{ left: `${value}%` }} />

        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className={styles["slider-input"]}
        />
      </div>

      <div className={styles["slider-labels"]}>
        {labels.map((label, index) => (
          <span key={index} className={`${styles["slider-label"]} ${index === activeIndex ? styles.active : ""}`}>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
