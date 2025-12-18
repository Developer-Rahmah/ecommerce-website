import type React from "react";
import { CSSProperties } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customBtnType?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  overrideStyle?: CSSProperties;
  size?: ButtonSize;
  disabled?: boolean;
}

enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  "2XL" = "2xl",
}
export { ButtonVariant, ButtonSize };
