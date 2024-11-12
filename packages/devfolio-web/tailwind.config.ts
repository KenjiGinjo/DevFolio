import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
import { THEME } from './assets/theme'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './contexts/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: THEME,
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config
