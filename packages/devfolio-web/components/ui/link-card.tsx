import Image from 'next/image'
import Link from 'next/link'

interface LinkCardProps {
  href: string
  title: string
  description: string
  image?: {
    src: string
    alt?: string
  }
}

export function LinkCard({ href, title, description, image }: LinkCardProps) {
  return (
    <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition duration-300 ease-in-out ">
      <Link href={href}>
        {image && (
          <div className="w-full flex justify-center">
            <Image src={image.src} width={16} height={9} alt={image.alt ? image.alt : title} />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold leading-none py-2 line-clamp-2">{title}</h3>
          <p className="text-base text-slate-600 line-clamp-3 leading-tight">{description}</p>
        </div>
      </Link>
    </div>
  )
}
