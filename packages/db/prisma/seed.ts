import { PrismaClient } from "@prisma/client";
import {
  frontEnd,
  frontEndFrameworksAndLibraries,
  backEnd,
  devOpsAndCloud,
  other,
} from "./data/skills";

const prisma = new PrismaClient();
async function main() {
  for (const value of [
    frontEnd,
    frontEndFrameworksAndLibraries,
    backEnd,
    devOpsAndCloud,
    other,
  ]) {
    for (const key in value) {
      let SkillTranslation: any = [];
      value[key].expierience.forEach((e) => {
        SkillTranslation.push({
          lang: "en",
          content: e.tipEn,
          createdAt: new Date(e.date).toISOString(),
        });
        SkillTranslation.push({
          lang: "zh-CN",
          content: e.tip,
          createdAt: new Date(e.date).toISOString(),
        });
      });
      await prisma.skill.create({
        data: {
          name: key,
          score: value[key].baseLevel,
          SkillTranslation: {
            create: SkillTranslation,
          },
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
