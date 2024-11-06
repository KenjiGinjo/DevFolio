import { EnumLanguage } from '@devfolio/enum'

export const fallbackLng = EnumLanguage.US
export const languages = [fallbackLng, EnumLanguage.CN] as const
export const languageList = [{
  alias: 'En',
  value: fallbackLng,
  path: `${process.env.NEXT_PUBLIC_URL}`,
}, {
  alias: '简',
  value: EnumLanguage.CN,
  path: `${process.env.NEXT_PUBLIC_URL}/zh-CN`,
}]

export type Language = (typeof languages)[number]

export const langCookieName = 'i18next'
