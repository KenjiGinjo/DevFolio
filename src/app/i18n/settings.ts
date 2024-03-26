export const fallbackLng = "en";
export const languages = [fallbackLng, "zh-CN"] as const;
export type Language = (typeof languages)[number];
export const cookieName = "i18next";
export const defaultNS = "translation";

export function getOptions(lang = fallbackLng, ns = defaultNS) {
  return {
    debug: true,
    supportedLngs: languages,
    fallbackLng,
    lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
