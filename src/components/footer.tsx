import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 sm:mt-20 lg:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © {profile.copyrightYear} {profile.name}
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={`mailto:${profile.email}`}
              className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base font-medium"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
