import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import { AboutPage, ContactPage, ServiceDetailPage, ServicesPage, WorkPage } from './pages'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
