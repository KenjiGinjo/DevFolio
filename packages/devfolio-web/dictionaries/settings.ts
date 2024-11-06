import { IconFlagChina, IconFlagUsa } from '@/icons'
import { EnumLanguage } from '@tt/enum'

export const fallbackLng = EnumLanguage.US
export const languages = [fallbackLng, EnumLanguage.CN] as const
export const languageList = [{
  alias: 'En',
  label: 'English',
  value: fallbackLng,
  icon: IconFlagUsa,
  path: `${process.env.NEXT_PUBLIC_URL}`,
}, {
  alias: '简中',
  label: '简体中文',
  value: EnumLanguage.CN,
  icon: IconFlagChina,
  path: `${process.env.NEXT_PUBLIC_URL}/zh-CN`,
}]

export type Language = (typeof languages)[number]
export const cookieName = 'i18next'
export const defaultNS = 'translation'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    debug: false,
    supportedLngs: languages,
    fallbackLng: {
      en: [fallbackLng],
      default: [fallbackLng],
    },
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    load: 'currentOnly',
  } as const
}
