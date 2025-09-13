export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 Kenji Ginjo. All rights reserved.
          </div>
          <div className="flex items-center space-x-3">
            <a href="mailto:kenjiginjo@gmail.com" className="text-gray-300 hover:text-primary-foreground transition-colors">
              kenjiginjo@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
