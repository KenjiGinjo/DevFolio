import { dictionaries } from '@/dictionaries'
import { fallbackLng, type Language } from '@/dictionaries/settings'
import Image from 'next/image'
import Link from 'next/link'
import { NavLintItem } from './nav-link-item'

interface HeaderProps {
  lang: Language
}
export async function Header({ lang }: HeaderProps) {
  const localeHeader = await dictionaries.header[lang]()

  const list = [
    { id: '1', title: localeHeader.blog, href: '/blog' },
    { id: '2', title: localeHeader.skills, href: '/skills' },
    { id: '3', title: localeHeader.projects, href: '/projects' },
    { id: '4', title: localeHeader.about, href: '/about' },
    { id: '5', title: localeHeader.contact, href: '/contact' },
  ]

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between py-6">
          <Link href="/" className="flex items-center space-x-2" aria-label="Homepage">
            <Image
              src="/Avatar_Pink.png"
              alt="Logo"
              width={32}
              height={32}
              priority
              className="rounded-xl border-pink-400 border-2"
            />
            <span className="font-bold text-xl">Kenji G.</span>
          </Link>
          <nav className="hidden gap-10 md:flex">
            {list?.map((item) => {
              const href = `${lang === fallbackLng ? '' : `/${lang}`}${item.href}`
              return <NavLintItem key={item.id} text={item.title} href={href} />
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
