import type React from "react";
import { CustomTextProps, TextVariant } from "./CustomText.types";
import { Typography } from "./CustomText.styles";
import { cn } from "@/src/utils/helpers";

const CustomText: React.FC<CustomTextProps> = ({
  variant = TextVariant.BODY,
  as = "span",
  overrideStyle,
  children,
  text,
  className = "",
  ...props
}) => {
  // Determine which HTML element to render
  const Component = as;

  // Get typography class
  const typographyClass = Typography[variant];

  // Combine all classes
  const combinedClass = cn(
    typographyClass,
    className,
    typeof overrideStyle === "string" ? overrideStyle : ""
  );

  return (
    <Component
      className={combinedClass}
      // style={typeof overrideStyle === "object" ? overrideStyle : undefined}
      {...props}
    >
      {text || children}
    </Component>
  );
};

export default CustomText;
