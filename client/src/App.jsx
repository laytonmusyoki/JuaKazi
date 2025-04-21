import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  useEffect(()=>{
    AOS.init({
      duration:800,
      easing:"ease-in-sine",
      delay:100,
      offset:100
    });

    AOS.refresh();

  },[])
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' 
        element={
          <>
          <Hero/>
          <HowItWorks/>
          <WhyChooseUs/>
          <Banner/>
          <Services/>
          <About/>
          <Footer/>
          <Home/>
          </>
        }
        />
        <Route path="/register" element={<Register/>} />
        <Route path="/services/:id" element={<ServiceDetails/>} />
      </Routes>
    </Router>
    <ToastContainer/>
    </>
  )
}

export default App
