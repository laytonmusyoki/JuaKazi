import { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Register from './pages/Auth/Register'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './pages/LandingPages/HowItWorks'
import AOS from 'aos'
import "aos/dist/aos.css"
import WhyChooseUs from './pages/LandingPages/WhyChooseUs'
import Banner from './components/Banner'
import About from './pages/LandingPages/About'
import Footer from './pages/LandingPages/Footer'
import Services from './pages/LandingPages/Services'
import ServiceDetails from './pages/LandingPages/ServiceDetails'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Dashboard'
import RequireAuth from './middleware/RequireAuth'
import Contact from './pages/LandingPages/Contact'
import SeekerAuth from './middleware/SeekerAuth'
import SeekerDashboard from './pages/seekers/SeekerDashboard'
import ProviderAuth from './middleware/ProviderAuth'
import ProviderDashboard from './pages/providers/ProviderDashboard'
import Providers from './pages/Providers'
import Profile from './pages/seekers/Profile'

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
      {(location.pathname !== '/register' && location.pathname !== '/login' && location.pathname !== '/seeker/dashboard'&& location.pathname !== '/seeker/profile') && <Navbar />}
      
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Banner />
            <Services />
            <About />
            <Contact/>
            <Footer />
          </>
        } />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/providers' element={<Providers/>} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route element={<RequireAuth/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
          {/* seeker */}
          <Route element={<SeekerAuth/>}>
            <Route path='/seeker/dashboard' element={<SeekerDashboard/>} />
            <Route path='/seeker/profile' element={<Profile/>} />
          </Route>
          {/* provider */}
          <Route element={<ProviderAuth/>}>
            <Route path='/provider/dashboard' element={<ProviderDashboard/>} />
          </Route>
        </Route>
      </Routes>
      {(location.pathname !== '/register' && location.pathname !== '/login' && location.pathname !== '/seeker/profile' && location.pathname !== '/' && location.pathname !== '/seeker/dashboard') && <Footer />}
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
