"use client";

import type React from "react";
import type { SliderProps } from "./Slider.types";
import styles from "./Slider.module.css";
import CustomText, { TextVariant } from "../CustomText";
import { cn } from "@/src/utils/helpers";

export const Slider: React.FC<SliderProps> = ({
  title,
  value,
  onChange,
  labels,
  className = "",
}) => {
  const stepCount = labels.length;
  const stepPercentage = 100 / (stepCount - 1);
  const activeIndex = Math.round(value / stepPercentage);

  const handleChange = (newValue: number) => {
    const snappedIndex = Math.round(newValue / stepPercentage);
    const snappedValue = snappedIndex * stepPercentage;
    onChange(snappedValue);
  };

  return (
    <div className={cn("w-full", className)}>
      {title && (
        <CustomText
          variant={TextVariant.HEADING2}
          className="text-primary mb-token-base"
        >
          {title}
        </CustomText>
      )}

      <div
        className={cn(styles["slider-container"], "mt-token-xl mb-token-xl")}
      >
        <div className={styles["slider-track-wrapper"]}>
          <div className={styles["slider-track-gray"]} />

          {labels.map((_, index) => {
            const position = index * stepPercentage;
            return (
              <div
                key={index}
                className={styles["slider-step-circle"]}
                style={{ left: `${position}%` }}
              />
            );
          })}

          <div
            className={styles["slider-thumb-pill"]}
            style={{ left: `${value}%` }}
          />

          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => handleChange(Number(e.target.value))}
            className={styles["slider-input"]}
            aria-label={title || "Slider"}
          />
        </div>

        <div className={styles["slider-labels"]}>
          {labels.map((label, index) => (
            <CustomText
              key={index}
              variant={TextVariant.BODY}
              className={cn(
                styles["slider-label"],
                index === activeIndex && styles.active
              )}
              as="span"
            >
              {label}
            </CustomText>
          ))}
        </div>
      </div>
      <div className={styles["content-divider"]} />
    </div>
  );
};
