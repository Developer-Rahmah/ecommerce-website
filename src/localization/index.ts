import { en } from "./en"
import { ar } from "./ar"

export const translations = {
  en,
  ar,
} as const

export type Language = keyof typeof translations
export type TranslationFunction = (key: string) => string

export { en, ar }
