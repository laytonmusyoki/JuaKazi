import React from 'react'
import providers from '../data/providers'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

function Providers() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="max-w-[95%] w-full">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Find the Right Professional
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {providers.map((provider) => (
            <div
                data-aos="fade-up"
              data-aos-delay={100 * provider.id}
              key={provider.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className='bg-primary py-1'>
              <img
              src={provider.profileImage}
              alt={provider.name}
              className="w-30 h-30 rounded-full mx-auto mb-4 object-contain"
            />
              </div>

              <div className="p-5 space-y-2">
                <h2 className="text-lg font-semibold text-gray-900">{provider.name}</h2>
                <p className="text-sm text-gray-600">{provider.profession}</p>

                <div className="flex items-center  text-sm text-gray-500 gap-1">
                  <FaMapMarkerAlt className="text-blue-500" />
                  {provider.location}
                </div>

                <div className="flex justify-between text-sm mt-2 text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    {provider.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <MdWork className="text-green-600" />
                    {provider.experience}
                  </span>
                </div>

                <div className="mt-3 text-sm text-gray-700 flex items-center gap-1">
                  <span className="text-green-600">Ksh</span> {provider.hourlyRate}/hr
                </div>

                <p className="text-xs italic text-gray-500 mt-3">"{provider.bio}"</p>

                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Providers
