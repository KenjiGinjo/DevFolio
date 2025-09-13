import { SKILL_CONFIG } from '../constants/skills';

// 计算技能等级
export const calculateSkillLevel = (baseLevel: number, experienceCount: number): number => {
  return Math.min(baseLevel + experienceCount, SKILL_CONFIG.MAX_SKILL_LEVEL);
};

// 获取熟练度等级
export const getProficiencyLevel = (progress: number): string => {
  const levels = Object.values(SKILL_CONFIG.PROFICIENCY_LEVELS).sort((a, b) => b.threshold - a.threshold);
  
  for (const level of levels) {
    if (progress > level.threshold) {
      return level.label;
    }
  }
  
  return SKILL_CONFIG.PROFICIENCY_LEVELS.NOVICE.label;
};

// 获取进度条颜色
export const getProgressColor = (progress: number): string => {
  const levels = Object.values(SKILL_CONFIG.PROFICIENCY_LEVELS).sort((a, b) => b.threshold - a.threshold);
  const colors = Object.values(SKILL_CONFIG.PROGRESS_COLORS);
  
  for (let i = 0; i < levels.length; i++) {
    if (progress > levels[i].threshold) {
      return colors[i];
    }
  }
  
  return SKILL_CONFIG.PROGRESS_COLORS.NOVICE;
};

// 格式化日期
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
};

// 处理图标加载错误
export const handleIconError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.style.display = 'none';
};
