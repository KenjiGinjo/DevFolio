import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
                KenjiGinjo
              </h1>

          <div className="flex items-center space-x-3">
            <Button
              asChild
              variant="ghost"
              size="icon"
            >
              <a 
                href="https://x.com/KenjiGinjo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/twitter-x.svg" 
                  alt="Twitter/X" 
                  className="w-5 h-5"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
            >
              <a 
                href="https://github.com/KenjiGinjo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/github.svg" 
                  alt="GitHub" 
                  className="w-5 h-5"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
            >
              <a 
                href="https://weibo.com/u/7197769280" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/weibo.svg" 
                  alt="Weibo" 
                  className="w-5 h-5"
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
