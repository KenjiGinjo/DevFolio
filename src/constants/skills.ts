export const SKILL_CATEGORIES = [
  {
    key: 'frontEnd',
    title: 'Frontend Technologies'
  },
  {
    key: 'frontEndFrameworksAndLibraries',
    title: 'Frontend Frameworks & Libraries'
  },
  {
    key: 'backEnd',
    title: 'Backend Technologies'
  },
  {
    key: 'devOpsAndCloud',
    title: 'DevOps & Cloud'
  },
  {
    key: 'other',
    title: 'Other Tools & Technologies'
  }
];

export const SKILL_CONFIG = {
  MAX_SKILL_LEVEL: 100,
  PROFICIENCY_LEVELS: {
    EXPERT: { threshold: 80, label: 'Expert' },
    ADVANCED: { threshold: 60, label: 'Advanced' },
    INTERMEDIATE: { threshold: 40, label: 'Intermediate' },
    BEGINNER: { threshold: 20, label: 'Beginner' },
    NOVICE: { threshold: 0, label: 'Novice' }
  },
  PROGRESS_COLORS: {
    EXPERT: '#10b981',
    ADVANCED: '#374151',
    INTERMEDIATE: '#6b7280',
    BEGINNER: '#ef4444',
    NOVICE: '#9ca3af'
  }
};
