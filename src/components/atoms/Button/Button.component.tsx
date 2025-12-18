import type React from "react";
import { type ButtonProps } from "./Button.types";
import { variantStyles } from "./Button.style";
import { useMemo } from "react";
import { cn } from "@/src/utils/helpers";

export const Button: React.FC<ButtonProps> = ({
  children,
  customBtnType,
  className = "",
  onClick,
  overrideStyle,
  size,
  disabled,
  ...props
}) => {
  const buttonClasses = useMemo(
    () =>
      cn(
        variantStyles({
          variant: customBtnType,
          size,
          disabled,
        })
      ),
    [customBtnType, disabled, size]
  );
  return (
    <button
      onClick={onClick}
      className={customBtnType ? buttonClasses : className}
      style={overrideStyle}
      {...props}
    >
      {children}
    </button>
  );
};
