interface IntroTitleProps {
  children: React.ReactNode
}

export function IntroTitle({ children }: IntroTitleProps) {
  return <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl text-center mt-32 mb-16">{children}</h2>
}
