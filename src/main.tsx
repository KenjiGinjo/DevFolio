import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { profile } from './data/profile'

import App from './App.tsx'

document.title = `${profile.name} - ${profile.role}`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
