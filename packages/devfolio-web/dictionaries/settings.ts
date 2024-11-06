import { EnumLanguage } from '@devfolio/enum'

export const fallbackLng = EnumLanguage.US
export const languages = [fallbackLng, EnumLanguage.CN] as const

export type Language = (typeof languages)[number]
