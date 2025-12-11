import type React from "react"
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "body" | "small" | "caption" | "label"

export interface TypographyProps {
  variant?: TypographyVariant
  children: React.ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  color?: string
  className?: string
}
