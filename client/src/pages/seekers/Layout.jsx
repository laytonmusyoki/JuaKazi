import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {
  FaUserCircle,
  FaBars,
  FaTimes,
  FaBriefcase,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaUser
} from 'react-icons/fa'
import { logout, reset } from '../../features/auth/userSlice'

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const sidebarLinks = [
    { label: 'My Jobs', icon: <FaBriefcase />, path: '#' },
    { label: 'Requests', icon: <FaEnvelope />, path: '#' },
    { label: 'Settings', icon: <FaCog />, path: '#' },
    { label: 'Profile', icon: <FaUser />, path: '/seeker/profile' },
    { label: 'Logout', icon: <FaSignOutAlt />, path: '#' },
  ]

  const linkClass = (path) =>
    `flex items-center gap-3 text-sm hover:text-black ${
      location.pathname === path ? 'text-black font-bold' : ''
    }`

  const HandleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    localStorage.removeItem('persist:root')
    navigate('/login')
  }

  return (
    <div className="bg-gray-100 min-h-[95vh] w-full flex justify-center">
      <div className="w-full max-w-[95%] flex flex-col">

        {/* Topbar */}
        <div className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white rounded-lg px-6 py-4 w-[95%] z-50 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold">
              <span className="bg-white text-black px-2 py-1 rounded-l-xl">Jua</span>
              <span className="bg-black text-white px-2 py-1 rounded-r-xl">Kazi</span>
            </h1>
            <ul className="hidden md:flex space-x-6 uppercase font-semibold">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">Services</li>
              <li className="hover:text-black cursor-pointer">Providers</li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
          <FaUserCircle className="text-4xl bg-white text-black rounded-full p-2" />
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-white text-xl"
            >
              <FaBars />
            </button>
            
          </div>
        </div>

        {/* Sidebar for mobile */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-blue-700 text-white p-6 transform transition-transform duration-300 md:hidden rounded-lg mt-[80px] mb-2 shadow-lg ${
            sidebarOpen ? 'translate-x-2' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-end mb-6">
            <button onClick={() => setSidebarOpen(false)} className="text-white text-2xl">
              <FaTimes />
            </button>
          </div>
          <ul className="space-y-6 font-medium">
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                {link.label === 'Logout' ? (
                  <button onClick={HandleLogout} className={linkClass(link.path)}>
                    {link.icon}
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={linkClass(link.path)}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        

        {/* Layout Body */}
        <div className="pt-[88px] flex flex-grow h-full">
          {/* Sidebar for desktop */}
          <div className="bg-blue-700 text-white w-64 p-6 space-y-4 rounded-lg mt-2 mr-4 hidden md:block">
            <ul className="space-y-6 font-medium">
              {sidebarLinks.map((link, index) => (
                <li key={index}>
                  {link.label === 'Logout' ? (
                    <button onClick={HandleLogout} className={linkClass(link.path)}>
                      {link.icon}
                      {link.label}
                    </button>
                  ) : (
                    <Link to={link.path} className={linkClass(link.path)}>
                      {link.icon}
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-md p-6 shadow-md mt-2 mb-2 h-auto sm:h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
