export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Defolio
              </h1>

          <div className="flex items-center space-x-3">
            <a 
              href="https://x.com/KenjiGinjo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
            >
              <img 
                src="/twitter-x.svg" 
                alt="Twitter/X" 
                className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
              />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 hover:bg-gray-900 rounded-lg flex items-center justify-center transition-all duration-200 group"
            >
              <img 
                src="/github.svg" 
                alt="GitHub" 
                className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
              />
            </a>
            <a 
              href="https://weibo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
            >
              <img 
                src="/weibo.svg" 
                alt="Weibo" 
                className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
