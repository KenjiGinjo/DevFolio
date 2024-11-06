import prisma from "@/lib/prisma";

export const skill = {
  getSkill: async () => {
    return prisma.skill.findMany({
      select: { id: true, name: true, level: true, SkillTranslation: true },
    });
  },
};
