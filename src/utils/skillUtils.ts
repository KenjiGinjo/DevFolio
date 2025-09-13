import { SKILL_CONFIG } from '../constants/skills';

export const calculateSkillLevel = (baseLevel: number, experienceCount: number): number => {
  return Math.min(baseLevel + experienceCount, SKILL_CONFIG.MAX_SKILL_LEVEL);
};

export const getProficiencyLevel = (progress: number): string => {
  const levels = Object.values(SKILL_CONFIG.PROFICIENCY_LEVELS).sort((a, b) => b.threshold - a.threshold);
  
  for (const level of levels) {
    if (progress > level.threshold) {
      return level.label;
    }
  }
  
  return SKILL_CONFIG.PROFICIENCY_LEVELS.NOVICE.label;
};

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

export const getProficiencyBadgeColor = (progress: number): string => {
  const levels = Object.values(SKILL_CONFIG.PROFICIENCY_LEVELS).sort((a, b) => b.threshold - a.threshold);
  
  for (let i = 0; i < levels.length; i++) {
    if (progress > levels[i].threshold) {
      switch (levels[i].label) {
        case 'Expert':
          return 'bg-green-100 text-green-700'; // 对应 #10b981
        case 'Advanced':
          return 'bg-gray-100 text-gray-700'; // 对应 #374151
        case 'Intermediate':
          return 'bg-gray-100 text-gray-700'; // 对应 #6b7280
        case 'Beginner':
          return 'bg-red-100 text-red-700'; // 对应 #ef4444
        case 'Novice':
          return 'bg-gray-100 text-gray-700'; // 对应 #6b7280
        default:
          return 'bg-gray-100 text-gray-700';
      }
    }
  }
  
  return 'bg-gray-100 text-gray-700';
};


export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
};

export const handleIconError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.style.display = 'none';
};
