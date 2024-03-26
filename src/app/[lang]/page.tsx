import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Image from "next/image";
import { useTranslation } from "../i18n";
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
  console.log(skills);
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

      <p className="py-6">
        找个能单打独斗，从头到尾搞定项目的人不容易。我擅长大多的 React
        生态，能帮你使用相对前沿的技术完成需求，我们的合作能够为您带来一系列的好处，确保您的应用不仅现代、快速，而且非常易于使用和维护。
      </p>
      <p>为什么选择我？</p>
      <p>
        量身定做：你的项目像指纹一样独一无二，我懂得深入挖掘你的需求，提供刚刚好的解决方案。
      </p>
      <p>
        直接沟通：你直接跟我说，不用通过第三方，这样你的想法和反馈能直接转化成实际动作。
      </p>
      <p>
        快速看到成果：我独立操盘，意味着项目能更快完成，让你的产品早日见光。
      </p>
      <p>
        省钱又省心：没有团队协调的麻烦，项目更经济高效，让你的预算发挥最大价值。
      </p>
      <p>品质有保障：我对自己的工作充满自信，承诺交出既高质量的成品。</p>
      <p>我能为您提供的服务包括：</p>
      <p>
        定制化的React应用开发 React应用的Bug修复和性能优化 React应用的重构和迁移
        React应用的维护和支持
      </p>
      <p>
        开始我们的合作吧
        如果你在找一个靠谱的人，能独立完成项目，提供全面服务，那你找对人了。咱们一起把你的想法变成现实，推动你的项目快速向前。
      </p>
      {skills.map((skill) => {
        return (
          <div>
            <p>
              {skill.name} {skill.level}
            </p>
          </div>
        );
      })}
    </div>
  );
}
