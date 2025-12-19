import { TextVariant } from "./CustomText.types";

// Typography styles using Tailwind classes
export const Typography = {
  [TextVariant.HEADING1]: "font-satoshi text-2xl font-medium leading-6", // 24px, medium weight
  [TextVariant.HEADING2]: "font-satoshi text-base font-medium leading-5", // 16px, medium weight
  [TextVariant.TITLE]: "font-satoshi text-sm font-medium leading-[1.125rem]", // 14px, medium weight
  [TextVariant.BODY]: "font-satoshi text-sm font-normal leading-[1.125rem]", // 14px, normal weight
  [TextVariant.CAPTION_TITLE1]: "font-satoshi text-xs font-medium leading-4", // 12px, medium weight
  [TextVariant.CAPTION_BODY1]: "font-satoshi text-xs font-normal leading-4", // 12px, normal weight
  [TextVariant.CAPTION_TITLE2]:
    "font-satoshi text-[0.625rem] font-medium leading-[0.875rem]", // 10px, medium weight
  [TextVariant.CAPTION_BODY2]:
    "font-satoshi text-[0.625rem] font-normal leading-[0.875rem]", // 10px, normal weight
};

export const TextColors = {
  primary: "text-primary",
  secondary: "text-secondary",
  white: "text-white",
  black: "text-black",
  error: "text-error",
} as const;

export type TextColor = keyof typeof TextColors;
