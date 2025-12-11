export enum TypographyVariants {
  /* Display sizes */
  Display2xlRegular = "display2xlRegular",
  Display2xlMedium = "display2xlMedium",
  Display2xlSemibold = "display2xlSemibold",
  Display2xlBold = "display2xlBold",

  DisplayxlRegular = "displayxlRegular",
  DisplayxlMedium = "displayxlMedium",
  DisplayxlSemibold = "displayxlSemibold",
  DisplayxlBold = "displayxlBold",

  DisplaylgRegular = "displaylgRegular",
  DisplaylgMedium = "displaylgMedium",
  DisplaylgSemibold = "displaylgSemibold",
  DisplaylgBold = "displaylgBold",

  /* Text sizes */
  TextxlRegular = "textxlRegular",
  TextxlMedium = "textxlMedium",
  TextxlSemibold = "textxlSemibold",
  TextxlBold = "textxlBold",

  TextlgRegular = "textlgRegular",
  TextlgMedium = "textlgMedium",
  TextlgSemibold = "textlgSemibold",
  TextlgBold = "textlgBold",

  TextmdRegular = "textmdRegular",
  TextmdMedium = "textmdMedium",
  TextmdSemibold = "textmdSemibold",
  TextmdBold = "textmdBold",

  TextsmRegular = "textsmRegular",
  TextsmMedium = "textsmMedium",
  TextsmSemibold = "textsmSemibold",
  TextsmBold = "textsmBold",

  TextxsRegular = "textxsRegular",
  TextxsMedium = "textxsMedium",
  TextxsSemibold = "textxsSemibold",
  TextxsBold = "textxsBold",
}

export const Typography: { [key in TypographyVariants]: string } = {
  /* Display 2xl */
  [TypographyVariants.Display2xlRegular]: "font-sans font-normal text-6xl leading-tight",
  [TypographyVariants.Display2xlMedium]: "font-sans font-medium text-6xl leading-tight",
  [TypographyVariants.Display2xlSemibold]: "font-sans font-semibold text-6xl leading-tight",
  [TypographyVariants.Display2xlBold]: "font-sans font-bold text-6xl leading-tight",

  /* Display xl */
  [TypographyVariants.DisplayxlRegular]: "font-sans font-normal text-5xl leading-tight",
  [TypographyVariants.DisplayxlMedium]: "font-sans font-medium text-5xl leading-tight",
  [TypographyVariants.DisplayxlSemibold]: "font-sans font-semibold text-5xl leading-tight",
  [TypographyVariants.DisplayxlBold]: "font-sans font-bold text-5xl leading-tight",

  /* Display lg */
  [TypographyVariants.DisplaylgRegular]: "font-sans font-normal text-4xl leading-tight",
  [TypographyVariants.DisplaylgMedium]: "font-sans font-medium text-4xl leading-tight",
  [TypographyVariants.DisplaylgSemibold]: "font-sans font-semibold text-4xl leading-tight",
  [TypographyVariants.DisplaylgBold]: "font-sans font-bold text-4xl leading-tight",

  /* Text xl */
  [TypographyVariants.TextxlRegular]: "font-sans font-normal text-xl leading-relaxed",
  [TypographyVariants.TextxlMedium]: "font-sans font-medium text-xl leading-relaxed",
  [TypographyVariants.TextxlSemibold]: "font-sans font-semibold text-xl leading-relaxed",
  [TypographyVariants.TextxlBold]: "font-sans font-bold text-xl leading-relaxed",

  /* Text lg */
  [TypographyVariants.TextlgRegular]: "font-sans font-normal text-lg leading-relaxed",
  [TypographyVariants.TextlgMedium]: "font-sans font-medium text-lg leading-relaxed",
  [TypographyVariants.TextlgSemibold]: "font-sans font-semibold text-lg leading-relaxed",
  [TypographyVariants.TextlgBold]: "font-sans font-bold text-lg leading-relaxed",

  /* Text md */
  [TypographyVariants.TextmdRegular]: "font-sans font-normal text-base leading-normal",
  [TypographyVariants.TextmdMedium]: "font-sans font-medium text-base leading-normal",
  [TypographyVariants.TextmdSemibold]: "font-sans font-semibold text-base leading-normal",
  [TypographyVariants.TextmdBold]: "font-sans font-bold text-base leading-normal",

  /* Text sm */
  [TypographyVariants.TextsmRegular]: "font-sans font-normal text-sm leading-normal",
  [TypographyVariants.TextsmMedium]: "font-sans font-medium text-sm leading-normal",
  [TypographyVariants.TextsmSemibold]: "font-sans font-semibold text-sm leading-normal",
  [TypographyVariants.TextsmBold]: "font-sans font-bold text-sm leading-normal",

  /* Text xs */
  [TypographyVariants.TextxsRegular]: "font-sans font-normal text-xs leading-normal",
  [TypographyVariants.TextxsMedium]: "font-sans font-medium text-xs leading-normal",
  [TypographyVariants.TextxsSemibold]: "font-sans font-semibold text-xs leading-normal",
  [TypographyVariants.TextxsBold]: "font-sans font-bold text-xs leading-normal",
} as const
