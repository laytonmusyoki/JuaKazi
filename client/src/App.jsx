import { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './pages/HowItWorks'
import AOS from 'aos'
import "aos/dist/aos.css"
import WhyChooseUs from './pages/WhyChooseUs'
import Banner from './components/Banner'
import About from './pages/About'
import Footer from './pages/Footer'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import RequireAuth from './pages/RequireAuth'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100
    })

    AOS.refresh()
  }, [])

  return (
    <>
      {(location.pathname !== '/register' && location.pathname !== '/login') && <Navbar />}

      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Banner />
            <Services />
            <About />
            <Footer />
            <Home />
          </>
        } />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route element={<RequireAuth/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
