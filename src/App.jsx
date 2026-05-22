import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About' 
import Services from './pages/Services/Services'  
import BlogPage from './pages/BlogPage'
import ContactUs from './pages/ContactUs'
import Brouchure from './pages/Brouchure'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/brochure" element={<Brouchure />} />
        <Route path="/broucher" element={<Navigate to="/brochure" replace />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
