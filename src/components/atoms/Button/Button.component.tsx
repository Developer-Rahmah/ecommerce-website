import type React from "react";
import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
