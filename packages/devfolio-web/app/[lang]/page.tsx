import type { Lang } from '@/config'
import { dictionaries } from '@/dictionaries'

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ lang: Lang }>
}>) {
  const { lang } = await params
  const dict = await dictionaries.home[lang]()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">{dict.hi}</main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">Home</footer>
    </div>
  )
}
