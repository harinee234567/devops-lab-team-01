import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App_news.jsx'

// Import the shared Navbar
import Navbar from '../shared/components/NavBar'
import '../shared/components/NavBar.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>,
)