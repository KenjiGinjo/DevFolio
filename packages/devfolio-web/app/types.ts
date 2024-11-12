import type { Language } from '@/dictionaries/settings'

export interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ lang: Language }>
}

export interface PageProps {
  params: Promise<{ lang: Language }>
}
