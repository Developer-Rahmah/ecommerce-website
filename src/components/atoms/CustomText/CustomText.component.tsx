import * as React from "react";

import classNames from "classnames";
import { Typography, TypographyVariants } from "../../../styles/typography";
import { CustomTextPropsTypes } from "./CustomText.types";

const CustomText: React.FC<CustomTextPropsTypes> = ({
  variant = TypographyVariants.TextlgRegular,
  color = "text-tertiary",
  as = "span",
  overrideStyle,
  text,
  ...props
}) => {
  // Determine which HTML element to render
  const Component = as;

  return (
    <Component
      className={classNames(Typography[variant], color, "flex", overrideStyle)}
      {...props}
    >
      {text}
    </Component>
  );
};

export default CustomText;
