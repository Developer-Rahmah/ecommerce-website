export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
  xxxl: "64px",
} as const

export const padding = {
  container: "16px",
  containerMd: "24px",
  containerLg: "32px",
  section: "32px",
  sectionMd: "48px",
  sectionLg: "64px",
} as const

export type Spacing = typeof spacing
export type Padding = typeof padding
