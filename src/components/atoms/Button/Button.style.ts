import { ButtonSize, ButtonVariant } from "./Button.types";
import { cva } from "class-variance-authority";

// Base styles that apply to all buttons
export const baseButtonStyles =
  "inline-flex items-center justify-center rounded focus:outline-none  font-satoshi transition-colors";

// Default dimensions
export const defaultDimensions = "w-[377px] h-[49px]";

// Default font size
export const defaultFontSize = "text-[20px]";

// Variant-specific styles
export const variantStyles = cva(baseButtonStyles, {
  variants: {
    variant: {
      primary: "bg-[#212121] text-[#FFFFFF] hover:bg-[#333333]  ",
      secondary:
        "bg-white text-[#212121] border-1 border-[#212121] hover:bg-gray-50 ",
    },
    size: {
      [ButtonSize.SM]: "h-8 px-3 py-2 text-sm rounded-sm",
      [ButtonSize.MD]: "h-10 px-4 py-2.5 text-sm rounded-lg",
      [ButtonSize.LG]: "h-12 px-5 py-3 text-sm rounded-lg",
      [ButtonSize.XL]: "h-14 px-6 py-4 text-base rounded-xl",
      [ButtonSize["2XL"]]: "h-16 px-7 py-4 text-base rounded-xl",
    },
    disabled: {
      true: "",
    },
    iconOnly: {
      true: "flex items-center justify-center p-0",
    },
  },
  defaultVariants: {
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.MD,
    disabled: false,
    iconOnly: false,
  },
});
