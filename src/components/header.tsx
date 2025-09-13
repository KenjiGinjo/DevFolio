export function Header() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Kenji Ginjo</h1>
            <p className="text-gray-600 mt-1">
              Full-Stack Engineer
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              Weibo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
