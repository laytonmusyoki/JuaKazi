import React from 'react'

function About() {
  return (
      <div id='about' className='max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-[100px] py-10 px-4 sm:px-10 bg-gray-100 text-gray-800'>
        <div data-aos="fade-right">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            About JuaKazi
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            JuaKazi is your go-to platform for finding skilled professionals near you. Whether you need a mechanic, electrician, or any other service provider — we've got you covered.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Our mission is to connect people looking for help with reliable, rated experts in their area. We make it easy to browse, hire, and get things done faster and better.
          </p>
        </div>
        <div className="flex justify-center" data-aos="zoom-in">
          <img
            src="/images/car.png"
            alt="Handshake"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] object-contain drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
  )
}

export default About