import 'server-only'

const home = {
  'en-US': () => import('./en-US/home.json').then(module => module.default),
  'zh-CN': () => import('./zh-CN/home.json').then(module => module.default),
}

const header = {
  'en-US': () => import('./en-US/header.json').then(module => module.default),
  'zh-CN': () => import('./zh-CN/header.json').then(module => module.default),
}

export const dictionaries = {
  home,
  header,
}
