const dictionaries = {
  "en-US": () => import("./en-US.json").then((module) => module.default),
  "zh-CN": () => import("./zh-CN.json").then((module) => module.default),
};
type Locale = "en-US" | "zh-CN";

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
