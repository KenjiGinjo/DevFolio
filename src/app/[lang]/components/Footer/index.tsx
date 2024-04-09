import { Language } from "@/i18n/settings";
import { useTranslation } from "../../../../i18n";
import { FooterBase } from "./FooterBase";
type FooterProps = {
  lang: Language;
};
export const Footer = async ({ lang }: FooterProps) => {
  const { t } = await useTranslation(lang, "footer");
  return <FooterBase t={t} lang={lang} />;
};
