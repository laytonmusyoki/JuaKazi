import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'
import { MdAppRegistration, MdDashboard, MdLogin, MdLogout, MdPerson }  from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/userSlice'
import api from '../utils/axiosInstance'
import { toast } from 'react-toastify'

function Navbar() {
  const { access }=useSelector((state)=>(state.user))
  const dispatch=useDispatch()
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef()

  const toggleSidebar = () => setToggleNavbar(prev => !prev)
  const toggleDropdown = () => setDropdownOpen(prev => !prev)

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const HandleLogout=async()=>{
    try{
      // const res=await api.get('signout/')
      toast.success('You have logged out successfully')
      dispatch(logout())
      localStorage.removeItem('persist:root');
      dispatch(reset())
    }
    catch(err){
      toast.error(err.response.data.error)
    }
    
  }

  return (
    <>
      <nav className='max-w-[95%] z-50 py-3 px-4 rounded-md mx-auto flex items-center justify-between w-full m-4 bg-primary sticky top-0'>
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            <span className="bg-gray-100 text-black px-2 py-1 rounded-l-xl">Jua</span>
            <span className="bg-black text-white px-2 py-1 rounded-r-xl">Kazi</span>
          </h1>

          {/* Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 uppercase font-semibold text-white">
            <li className="hover:text-black transform transition-all duration-300"><a href="#">Home</a></li>
            <li className="hover:text-black transform transition-all duration-300"><a href="#">About</a></li>
            <li className="hover:text-black transform transition-all duration-300"><a href="#">Contact</a></li>
            <li className="hover:text-black transform transition-all duration-300"><a href="#">Services</a></li>
          </ul>

          {/* Profile & Menu (Mobile) */}
          <div className="flex items-center gap-x-4 relative" ref={dropdownRef}>
            {/* User Dropdown */}
            <div
              onClick={toggleDropdown}
              className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center text-xl cursor-pointer"
            >
              <FaUserCircle />
            </div>

            {dropdownOpen && (
              <div className="absolute top-12 right-0 bg-white w-44 p-3 rounded-md shadow-lg border z-50 text-sm space-y-2">
                {
                  access ? 
                  <>
                  <a href="/dashboard" className=" hover:text-black flex items-center gap-x-2"><MdDashboard/> Dashboard</a>
                  <a href="#" className=" hover:text-black flex items-center gap-x-2"> <MdPerson/> Profile</a>
                <a href="" className=" hover:text-black flex items-center gap-x-2" onClick={()=>{HandleLogout()}}><MdLogout/> logout</a>
                  </>
                :
                <>
                <a href="/login" className=" hover:text-black flex items-center gap-x-2"><MdLogin/> Login</a>
                <a href="/register" className=" hover:text-black flex items-center gap-x-2"><MdAppRegistration/> Register</a>
                </>
                
                }
                
              </div>
            )}

            {/* Mobile Toggle */}
            <div className="md:hidden text-2xl text-white cursor-pointer" onClick={toggleSidebar}>
              <FaBars />
            </div>
          </div>
      </nav>

      {/* Overlay */}
      {toggleNavbar && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[85%] h-full bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${
          toggleNavbar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">
            <span className="bg-primary text-white px-2 py-1 rounded-l-xl">Jua</span>
            <span className="bg-black text-white px-2 py-1 rounded-r-xl">Kazi</span>
          </h1>
          <button
            className="text-2xl text-gray-800"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div>

        <ul className="space-y-4 uppercase font-semibold text-gray-700">
          <li className="hover:text-primary transition"><a href="#">Home</a></li>
          <li className="hover:text-primary transition"><a href="#">About</a></li>
          <li className="hover:text-primary transition"><a href="#">Contact</a></li>
          <li className="hover:text-primary transition"><a href="#">Services</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
