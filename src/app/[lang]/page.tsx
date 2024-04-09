import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Image from "next/image";
import { useTranslation } from "../../i18n";
import type { Metadata, ResolvingMetadata } from "next";
import { appleTouchStartupImages } from "@/assets/apple-touch-startup-images";
import type { Viewport } from "next";
import { ds } from "@/model";

// TODU: Add type for params
export const viewport: Viewport = {
  themeColor: "black",
};
export async function generateMetadata({
  params,
}: KG.APP.BASE.ServerSideProps): Promise<Metadata> {
  const { lang } = params;
  const { t } = await useTranslation(lang, "meta-data");
  return {
    title: t("title"),
    description: t("description"),
    generator: "Next.js 14.0 with TypeScript",
    applicationName: t("applicationName"),
    referrer: "origin-when-cross-origin",
    keywords: t("keywords", { returnObjects: true }) as any,
    authors: t("authors", { returnObjects: true }) as any,
    creator: t("creator"),
    publisher: t("publisher"),
    appleWebApp: {
      capable: true,
      title: t("applicationName"),
      // TODO 最好能识别设备类型，然后根据设备类型选择不同的图片
      startupImage: appleTouchStartupImages,
      statusBarStyle: "black-translucent",
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    manifest: `${process.env.NEXT_PUBLIC_BASE_URL}/manifest.json`,
  };
}

export default async function Page({
  params: { lang },
}: KG.APP.BASE.ServerSideProps) {
  const { t } = await useTranslation(lang);
  const skills = await ds.skill.getSkill();
  return (
    <div className="p-3 text-left">
      <div className="relative">
        <div className="absolute z-0">
          <Image
            src={`/images/home-bg.gif`}
            width={300}
            height={200}
            alt="A photo of Kenji"
            aria-label="A photo of Kenji"
          />
        </div>
        <div className="z-1 relative">
          <h1 className="text-2xl font-bold">
            我就是您梦寐以求的"代码机器" 😅
          </h1>
          <h1 className="text-2xl font-bold">
            像没有明天一样疯狂编码，并且质量很好，而且价格便宜！
          </h1>

          <h1 className="text-2xl font-bold">
            帮您把项目从想法到上线，只需一步！
          </h1>
        </div>
      </div>


    </div>
  );
}
