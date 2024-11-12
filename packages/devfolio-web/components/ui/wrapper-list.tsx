import { cn } from '@/lib/utils'

interface WrapperListProps {
  children: React.ReactNode
  className?: string
}
export function WrapperList({ children, className }: WrapperListProps) {
  return <div className={cn('grid md:grid-cols-3 gap-6', className)}>{children}</div>
}
