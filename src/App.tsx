import { Header } from './components/header'
import { Home } from './pages/home'
import { Footer } from './components/footer'

export default function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
