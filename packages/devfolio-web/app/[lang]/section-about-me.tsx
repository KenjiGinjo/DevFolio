import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IntroTitle } from '@/components/ui/intro-title'
import { cn } from '@/lib/utils'
import Image from 'next/image'

function Badges() {
  return (
    <div className="mt-8 py-4 space-x-4 overflow-hidden flex intro-mask-trim">
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
      <Badge variant="outline" className="bg-purple-200 text-purple-500 border-0">Passionate</Badge>
    </div>
  )
}

interface CardProps {
  title: string
  description: string
  className?: string
}

function Card({ title, description, className }: CardProps) {
  return (
    <div className={cn('absolute w-[290px] bg-background border border-border shadow-lg rounded-lg hover:z-10 hover:scale-110 hover:rotate-0 transition duration-300 ease-in-out cursor-pointer', className)}>
      <div className="w-full flex justify-center">
        <Image src="/Avatar_Pink.png" width={200} height={170} alt="Kenji Ginjo" />
      </div>
      <div className="px-6 pb-4 pt-2">

        <div className='text-xl font-bold leading-none py-2 line-clamp-2"'>{title}</div>
        <div className="text-base text-slate-600 line-clamp-3 leading-tight">{description}</div>
      </div>
    </div>
  )
}

function Recommendations() {
  return (
    <div className="absolute -top-10 right-24 flex flex-row items-center justify-center w-[453px]">
      <Card title="VocalAce" description="This is only a heuristic since the TypeScript plugin doesn't actually know if it receives a Server Action or an ordinary function. Runtime type-checking will still ensure you don't accidentally pass a function to a Client Component." className="right-0 top-0 z-[2] -rotate-1" />
      <Card title="Dictogloss" description="This is only a heuristic since the TypeScript plugin doesn't actually know if it receives a Server Action or an ordinary function. Runtime type-checking will still ensure you don't accidentally pass a function to a Client Component." className="right-[100px] -top-[20px] z-[1] -rotate-2" />
      <Card title="Personal Website" description="This is only a heuristic since the TypeScript plugin doesn't actually know if it receives a Server Action or an ordinary function. Runtime type-checking will still ensure you don't accidentally pass a function to a Client Component." className="right-[200px] -top-[40px] -rotate-3" />
    </div>
  )
}

export function SectionAboutMe() {
  return (
    <section className="container py-12 relative">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] intro-cubics z-0" />
      <div className="intro-line-vertical intro-line-vertical-mask !h-[100%] absolute -top-[0%] left-4 md:left-20" />
      <div className="relative z-1">
        <IntroTitle>Get to know me in seconds.</IntroTitle>
        <div className="intro-line before:!w-full ">
          <p className="text-slate-600 text-xl text-center pt-6">A digital solutions architect.</p>
          <Badges />
          <div className="mt-6 relative px-24 py-6">
            <div className="w-[45%] mt-4">My name is Kenji Ginjo (My real name is Congkun Cui, but it’s difficult to pronounce), I'm from China. I am very excited to know that you're interested in me. Most of the clients' projects have confidentiality agreements, so I prefer to show you my projects in its entirety.</div>
            <Button size="lg" className="mt-8">Explore Portfolio</Button>
            <Recommendations />
          </div>
        </div>
      </div>
    </section>
  )
}
