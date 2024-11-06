'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

interface NavLintItemProps {
  text: string
  href: string
}

export function NavLintItem({ text, href }: NavLintItemProps) {
  const segment = useSelectedLayoutSegment()

  return (
    <Link
      href={href}
      className={cn('text-lg transition-colors text-primary/70 hover:text-primary', href.startsWith(`/${segment}`))}
    >
      {text}
    </Link>
  )
}
