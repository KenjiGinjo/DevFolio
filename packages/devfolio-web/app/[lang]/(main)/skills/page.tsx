import type { PageProps } from '@/app/types'
import type { Language } from '@/dictionaries/settings'
import { dictionaries } from '@/dictionaries'

export default async function Page({ params }: PageProps) {
  const { lang } = await params

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {lang}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">Skills</footer>
    </div>
  )
}
