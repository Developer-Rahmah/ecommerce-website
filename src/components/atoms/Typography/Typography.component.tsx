import type React from "react"
import type { TypographyProps } from "./Typography.types"
import "./Typography.style.css"

export const Typography: React.FC<TypographyProps> = ({ variant = "body", children, as, color, className = "" }) => {
  const Component = as || (variant.startsWith("h") ? (variant as any) : "p")

  const classes = ["typography", `typography--${variant}`, className].filter(Boolean).join(" ")

  return (
    <Component className={classes} style={color ? { color } : undefined}>
      {children}
    </Component>
  )
}
