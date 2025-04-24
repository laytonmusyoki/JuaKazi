import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {
  return (
    <section id='contact' className="max-w-[95%] mx-auto py-20 overflow-x-hidden">
      <h2 
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary" 
        data-aos="fade-down"
      >
        Let's Talk
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <form 
          className="bg-white p-8 rounded-2xl shadow-xl space-y-2 flex flex-col h-full" 
          data-aos="fade-right"
        >
          <div className='grid md:grid-cols-2 gap-x-4'>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-black transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div 
          className="bg-primary text-white p-8 rounded-2xl shadow-xl space-y-8 flex flex-col justify-between" 
          data-aos="fade-left"
        >
          <div className="flex items-center gap-x-4">
            <FaEnvelope size={24} />
            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-sm opacity-90">support@juakazi.com</p>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <FaPhoneAlt size={24} />
            <div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="text-sm opacity-90">+254 712 345 678</p>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <FaMapMarkerAlt size={24} />
            <div>
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-sm opacity-90">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
