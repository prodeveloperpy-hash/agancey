import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa6'
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
      <a
        className="email-float"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40upforge.us&su=New%20Project%20Inquiry%20for%20UpForge&body=Hello%20UpForge%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project.%0A%0AName%3A%0ACompany%3A%0APhone%20%2F%20WhatsApp%3A%0AService%20required%3A%0ABudget%3A%0ATimeline%3A%0A%0AProject%20details%3A%0A%0A%0AThank%20you."
        target="_blank"
        rel="noreferrer"
        aria-label="Email UpForge at info@upforge.us"
        title="Email UpForge"
      >
        <span>Email us</span>
        <FaEnvelope />
      </a>
      <a
        className="whatsapp-float"
        href="https://wa.me/923041769292?text=Hello%20UpForge%2C%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with UpForge on WhatsApp at +92 304 1769292"
        title="Chat with UpForge on WhatsApp"
      >
        <span>Chat with us</span>
        <FaWhatsapp />
      </a>
    </BrowserRouter>
  </StrictMode>,
)
