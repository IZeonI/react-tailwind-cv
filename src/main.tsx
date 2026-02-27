import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar.tsx'
import Header from './components/header.tsx'
import AboutMe from './components/about_me.tsx'
import Contact from './components/contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Header />
    <AboutMe />
    <Contact />
  </StrictMode>,
)
