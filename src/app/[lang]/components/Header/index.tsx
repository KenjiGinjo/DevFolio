import { Language } from "@/i18n/settings";
import { useTranslation } from "../../../../i18n";
import { HeaderBase } from "./HeaderBase";
type FooterProps = {
  lang: Language;
};
export const Header = async ({ lang }: FooterProps) => {
  const { t } = await useTranslation(lang, "header");
  return <HeaderBase t={t} lang={lang} />;
};
