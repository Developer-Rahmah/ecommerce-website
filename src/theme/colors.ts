export const colors = {
  primary: {
    black: "#212121",
    white: "#FFFFFF",
  },
  neutral: {
    gray100: "#F2F2F2",
    gray200: "#FAFAFA",
    gray300: "#DEDEDE",
    gray400: "#A0A0A0",
  },
  accent: {
    green: "#96ECA3",
    coral: "#ECA396",
    shopAll: "#ECA396",
  },
  text: {
    primary: "#212121",
    secondary: "#A0A0A0",
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#FAFAFA",
    tertiary: "#F2F2F2",
  },
  border: {
    light: "#DEDEDE",
    medium: "#A0A0A0",
  },
} as const

export type ColorTheme = typeof colors
