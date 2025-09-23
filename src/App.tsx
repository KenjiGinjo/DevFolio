import { Header } from './components/header'
import { Home } from './pages/home'
import { Footer } from './components/footer'

export default function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
