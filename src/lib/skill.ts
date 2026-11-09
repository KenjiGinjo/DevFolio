import { SKILL_CONFIG } from '../constants/skills';

export const calculateSkillLevel = (baseLevel: number): number => {
  return Math.min(baseLevel, SKILL_CONFIG.MAX_SKILL_LEVEL);
};

export const getProgressColor = (): string => {
  return SKILL_CONFIG.BAR_COLOR;
};

export const formatDate = (dateString: string): string => {
  const [year, month] = dateString.split('-').map(Number);
  if (!year || !month) return dateString;
  return new Date(year, month - 1, 1).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
};

export const handleIconError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.style.display = 'none';
};
