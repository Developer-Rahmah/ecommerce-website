import { TextVariant } from "./CustomText.types"

// Typography styles using Tailwind classes - adjusted font weights to match Figma
export const Typography = {
  // Heading styles - reduced font weights from bold/semibold to medium/regular
  [TextVariant.HEADING1]: "font-satoshi text-2xl font-medium leading-6", // 24px, medium weight
  [TextVariant.HEADING2]: "font-satoshi text-base font-medium leading-5", // 16px, medium weight
  [TextVariant.TITLE]: "font-satoshi text-sm font-medium leading-[1.125rem]", // 14px, medium weight
  [TextVariant.BODY]: "font-satoshi text-sm font-normal leading-[1.125rem]", // 14px, normal weight
  [TextVariant.CAPTION_TITLE1]: "font-satoshi text-xs font-medium leading-4", // 12px, medium weight
  [TextVariant.CAPTION_BODY1]: "font-satoshi text-xs font-normal leading-4", // 12px, normal weight
  [TextVariant.CAPTION_TITLE2]: "font-satoshi text-[0.625rem] font-medium leading-[0.875rem]", // 10px, medium weight
  [TextVariant.CAPTION_BODY2]: "font-satoshi text-[0.625rem] font-normal leading-[0.875rem]", // 10px, normal weight
}

// Color options for text
export const TextColors = {
  primary: "text-[#212121]",
  secondary: "text-[#a0a0a0]",
  white: "text-white",
  black: "text-black",
  error: "text-[#eca396]",
} as const

export type TextColor = keyof typeof TextColors
