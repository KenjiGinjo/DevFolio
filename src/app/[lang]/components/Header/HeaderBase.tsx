import Link from "next/link";
import { Language } from "../../../../i18n/settings";
import { TFunction } from "i18next";
import { Avatar } from "@/components/Avatar";
import { fonts } from "@/lib/fonts";
import { Menu } from "@/components/Menu/client";
type FooterBaseProps = {
  t: TFunction<any, string>;
  lang: Language;
};
export const HeaderBase = ({ t, lang }: FooterBaseProps) => {
  const paths = [
    { href: "/ds", label: "PROJECT SHOWCASE" },
    { href: "/ds", label: "LEARNING DIARY" },
  ];
  return (
    // TO When it scroll down the navbar will be hidden, and when it scroll up the navbar will be shown
    <div className="flex w-full items-center justify-between border-b-[1px] border-gray-300 bg-white p-3">
      <Link
        href={`/${lang}`}
        aria-label={`Kenji Ginjo's Portfolio`}
        className="flex items-center"
      >
        <Avatar
          size="sm"
          src={`/images/avatar.jpg`}
          alt="A photo of Kenji"
          aria-label="A photo of Kenji"
        />
        <span className={`ml-4 ${fonts.brand.className} text-2xl`}>
          Kenji Ginjo's Portfolio
        </span>
      </Link>
      <Menu paths={paths} />
    </div>
  );
};
