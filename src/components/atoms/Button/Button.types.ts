import type React from "react"
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
}
