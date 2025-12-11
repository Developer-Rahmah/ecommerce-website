import { colors } from "./colors"
import { spacing, padding } from "./spacing"
import { typography } from "./typography"

export const theme = {
  colors,
  spacing,
  padding,
  typography,
} as const

export type Theme = typeof theme
