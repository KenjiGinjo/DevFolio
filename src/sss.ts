// 技能相关常量配置
export const SKILL_CONFIG = {
  // 熟练度等级配置
  PROFICIENCY_LEVELS: {
    EXPERT: { threshold: 80, label: 'Expert' },
    ADVANCED: { threshold: 60, label: 'Advanced' },
    INTERMEDIATE: { threshold: 40, label: 'Intermediate' },
    BEGINNER: { threshold: 20, label: 'Beginner' },
    NOVICE: { threshold: 0, label: 'Novice' },
  },
  
  // 进度条颜色配置
  PROGRESS_COLORS: {
    EXPERT: '#10b981', // green-500
    ADVANCED: '#3b82f6', // blue-500
    INTERMEDIATE: '#f59e0b', // amber-500
    BEGINNER: '#f97316', // orange-500
    NOVICE: '#ef4444', // red-500
  },
  
  // 最大技能等级
  MAX_SKILL_LEVEL: 100,
  
  // 图标尺寸
  ICON_SIZES: {
    CARD: { width: 8, height: 8 }, // w-8 h-8
    MODAL: { width: 10, height: 10 }, // w-10 h-10
  },
} as const;

// 图标映射
export const ICON_MAP: { [key: string]: string } = {
  // Frontend
  'Javascript': '/src/icons/js.svg',
  'Typescript': '/src/icons/logo-ts-svgrepo-com.svg',
  'Html': '/src/icons/html5.svg',
  'Css': '/src/icons/css3-alt.svg',
  'Less': '/src/icons/less-svgrepo-com.svg',
  'Sass': '/src/icons/sass-svgrepo-com.svg',
  'TailwindCSS': '/src/icons/tailwind-css-svgrepo-com.svg',
  'WebPack': '/src/icons/webpack-svgrepo-com.svg',
  
  // Frameworks & Libraries
  'React': '/src/icons/react.svg',
  'ReactNative': '/src/icons/react.svg',
  'Redux': '/src/icons/redux-svgrepo-com.svg',
  'Vue': '/src/icons/vuejs.svg',
  'VueX': '/src/icons/vuejs.svg',
  'Pinia': '/src/icons/vuejs.svg',
  'NuxtJS': '/src/icons/nuxtjs-svgrepo-com.svg',
  'Nextjs': '/src/icons/nextjs-fill-svgrepo-com.svg',
  'SolidJS': '/src/icons/react.svg', // 使用React图标作为替代
  
  // Backend
  'Nodejs': '/src/icons/node.svg',
  'Express': '/src/icons/express-svgrepo-com.svg',
  'Koa': '/src/icons/node.svg', // 使用Node图标作为替代
  'NestJS': '/src/icons/nestjs-svgrepo-com.svg',
  'MongoDB': '/src/icons/mongodb-svgrepo-com.svg',
  'MySQL': '/src/icons/mysql-svgrepo-com.svg',
  'PostgreSQL': '/src/icons/postgresql-svgrepo-com.svg',
  'Python': '/src/icons/python-127-svgrepo-com.svg',
  'JAVA': '/src/icons/java-16-svgrepo-com.svg',
  'Kotlin': '/src/icons/kotlin-svgrepo-com.svg',
  'PHP': '/src/icons/php-16-svgrepo-com.svg',
  
  // DevOps & Cloud
  'Docker': '/src/icons/docker-svgrepo-com.svg',
  'GoogleCloudPlatform': '/src/icons/google-cloud-svgrepo-com.svg',
  'AlibabaCloudPlatform': '/src/icons/aliyun-svgrepo-com.svg',
  'DevOps': '/src/icons/devops-svgrepo-com.svg',
  
  // Other Tools
  'Git': '/src/icons/git.svg',
  'Github': '/src/icons/github.svg',
  'Figma': '/src/icons/figma.svg',
  'Chrome': '/src/icons/chrome.svg',
  'GraphQL': '/src/icons/graphql-svgrepo-com.svg',
  'ApolloGraphQL': '/src/icons/apollographql-svgrepo-com.svg',
  'TensorFlowJs': '/src/icons/tensorflow-svgrepo-com.svg',
  'Redis': '/src/icons/redis-svgrepo-com.svg',
  'SocketIO': '/src/icons/socket-dot-io-svgrepo-com.svg',
  'RESTAPI': '/src/icons/rest-api-svgrepo-com.svg',
  'BashShell': '/src/icons/bash01-svgrepo-com.svg',
  'Npm': '/src/icons/npm.svg',
  'Rust': '/src/icons/rust-svgrepo-com.svg',
  'Terminal': '/src/icons/terminal-solid.svg',
  'universalAccessSolid': '/src/icons/universal-access-solid.svg',
  'WebFrontBasics': '/src/icons/WebFrontendBasics.svg',
  'OpenAi': '/src/icons/openai-svgrepo-com.svg',
  'Regex': '/src/icons/terminal-solid.svg', // 使用Terminal图标作为替代
  'Linux': '/src/icons/terminal-solid.svg', // 使用Terminal图标作为替代
};

// 技能分类配置
export const SKILL_CATEGORIES = [
  {
    title: 'Frontend Technologies',
    key: 'frontEnd',
  },
  {
    title: 'Frameworks & Libraries',
    key: 'frontEndFrameworksAndLibraries',
  },
  {
    title: 'Backend Technologies',
    key: 'backEnd',
  },
  {
    title: 'DevOps & Cloud',
    key: 'devOpsAndCloud',
  },
  {
    title: 'Other Tools',
    key: 'other',
  },
] as const;
