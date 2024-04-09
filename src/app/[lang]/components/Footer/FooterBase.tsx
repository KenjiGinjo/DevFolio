import { Language } from "../../../../i18n/settings";
import { TFunction } from "i18next";
type FooterBaseProps = {
  t: TFunction<any, string>;
  lang: Language;
};
export const FooterBase = ({ t, lang }: FooterBaseProps) => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Project</a>
        <a className="link link-hover">Blog</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>icon Github Jianshu Medium</a>
        </div>
      </nav>
      <aside>
        <p>{t("copyright")}</p>
      </aside>
    </footer>
  );
};
