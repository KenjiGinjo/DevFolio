type Lang = "zh-CN" | "en-US";
export const experienceText = (lang: Lang) => {
  const map: Record<string, string[]> = {
    "zh-CN": ["专家", "精通", "熟悉", "入门", "初学者"],
    "en-US": ["Expert", "Proficient", "Intermediate", "Elementary", "Beginner"],
  };
  return map[lang];
};

export const skillModalProgressBarText = (lang: Lang) => {
  const map: Record<string, string[]> = {
    "zh-CN": ["自评", "经验"],
    "en-US": ["Self-Evaluation", "Experience"],
  };
  return map[lang];
};
