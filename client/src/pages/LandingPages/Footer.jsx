import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full bg-gray-100 text-gray-800 mt-[100px]'>
      <div className='max-w-[95%] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4 sm:px-10'>

        {/* Column 1: About */}
        <div>
          <h2 className='text-xl font-bold mb-4 text-primary'>JuaKazi</h2>
          <p className='text-sm'>
            JuaKazi is a platform connecting skilled workers and service providers with clients looking for reliable help nearby.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="hover:text-primary cursor-pointer" />
            <FaTwitter className="hover:text-primary cursor-pointer" />
            <FaInstagram className="hover:text-primary cursor-pointer" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li><a href='/' className='hover:text-primary'>Home</a></li>
            <li><a href='/services' className='hover:text-primary'>Services</a></li>
            <li><a href='/register' className='hover:text-primary'>Join as Provider</a></li>
            <li><a href='/how-it-works' className='hover:text-primary'>How It Works</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Top Categories</h3>
          <ul className='space-y-2 text-sm'>
            <li><a href='/services/mechanics' className='hover:text-primary'>Mechanics</a></li>
            <li><a href='/services/electricians' className='hover:text-primary'>Electricians</a></li>
            <li><a href='/services/plumbers' className='hover:text-primary'>Plumbers</a></li>
            <li><a href='/services/cleaners' className='hover:text-primary'>Cleaners</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className="text-primary" /> +254 712 345 678
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className="text-primary" /> support@juakazi.co.ke
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='text-center text-sm text-gray-600 py-4 border-t'>
        © {new Date().getFullYear()} JuaKazi. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
