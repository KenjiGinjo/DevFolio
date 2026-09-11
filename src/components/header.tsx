import { profile } from '@/data/profile'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-lg border-b border-gray-100/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            {profile.displayName}
          </h1>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {profile.socials.map((social) => (
              <Button
                key={social.name}
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-10 sm:w-10"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-100 transition-colors rounded-lg"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
