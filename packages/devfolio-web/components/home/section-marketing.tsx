import { COLORS } from '@/assets/theme'
import { Button } from '@/components/ui/button'
import { IconDottedCircle } from '@/icons'

export function SectionMarketing() {
  return (
    <main className="container py-12 relative mt-8">
      <div className="h-full absolute left-4 md:left-20">
        <div className="text-5xl text-accent absolute left-10 top-[11%] w-[300px]">Driven to Be</div>
        <IconDottedCircle stroke={COLORS.accent.DEFAULT} strokeWidth={2} className="absolute -left-10 top-[11%]" />
        <div className="intro-line-vertical intro-line-animation" />
      </div>
      <div className="h-full absolute right-4 md:right-20">
        <div className="intro-line-vertical intro-line-animation" />
      </div>
      <div className="w-[55%] h-28 mx-auto flex justify-between md:w-[45%]">
        <div className="intro-line-vertical intro-line-vertical-mask intro-line-animation" />
        <div className="intro-line-vertical intro-line-vertical-mask intro-line-animation" />
      </div>
      <div className="intro-line intro-mask-trim intro-line-animation text-center">
        <h1 className="text-4xl font-bold md:text-6xl px-3 py-12 md:py-16">A World-class Web Developer</h1>
      </div>
      <div className="p-6 text-center">
        <p className="text-lg py-4 md:py-4 md:px-24 text-slate-600">
          With over 10 years of experience in designing and developing, I will make your development process transparent, logical, and enjoyable, ensuring that you launch a product you can be proud of without headaches.
        </p>
      </div>
      <div className="intro-line intro-line-animation">
        <div className="w-[55%] h-24 mx-auto flex justify-between items-center md:w-[45%] relative">
          <div className="intro-line-vertical intro-line-vertical-extra intro-line-animation" />
          <Button size="lg">Get in Touch</Button>
          <div className="intro-line-vertical intro-line-vertical-extra intro-line-animation" />
          <IconDottedCircle stroke={COLORS.accent.DEFAULT} strokeWidth={2} className="absolute -right-9 -bottom-9 rotate-180 animate-in" />
        </div>
      </div>
    </main>
  )
}
