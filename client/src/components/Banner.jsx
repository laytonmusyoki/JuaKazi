import React from 'react'
import { FaSearch, FaTools, FaCompass } from 'react-icons/fa';

function Banner() {
  return (
    <div className="bg-primary text-white py-10 px-4 sm:px-10 rounded-3xl my-10 max-w-[95%] mx-auto overflow-hidden">
      <div className="grid grid-cols-1  sm:grid-cols-3 gap-8 items-center text-center sm:text-left">

        {/* Left Column */}
        <div data-aos="fade-up">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Your Skills, Their Solution</h3>
          <p className="text-sm sm:text-base text-gray-200">
            JuaKazi connects people to reliable professionals and gives skilled workers a platform to grow.
          </p>
        </div>

        {/* Center Column - Image */}
        <div data-aos="zoom-in" className="flex justify-center items-center">
          <img 
            src="images/car.png" 
            alt="Connecting People" 
            className="w-60 sm:w-72 h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Right Column */}

        <div data-aos="fade-up" data-aos-delay="300">
        <h4 className="text-lg font-bold mb-3">What brings you here?</h4>
        <ul className="text-sm text-gray-200 space-y-4">
            <li className="flex items-center space-x-2 hover:text-white transition">
            <FaSearch />
            <span>Looking for trusted professionals</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-white transition">
            <FaTools />
            <span>Ready to offer my skills and services</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-white transition">
            <FaCompass />
            <span>Just exploring opportunities</span>
            </li>
        </ul>
        </div>


      </div>
    </div>
  )
}

export default Banner
