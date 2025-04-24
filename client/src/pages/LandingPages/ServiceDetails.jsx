import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import services from '../../data/services'
import providers from '../../data/providers'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

function ServiceDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const service = services.find(service => service.id === id)

  if (!service) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-center bg-gray-50 py-20">
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition"
          >
            Go Back to Services
          </button>
        </div>
      </div>
    )
  }

  const filteredProviders = providers.filter(provider => 
    provider.services && provider.services.includes(service.id)
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 py-10 px-4 sm:px-10">
      <div className="max-w-screen-xl mx-auto">
        <button
          onClick={() => navigate('/services')}
          className="text-primary font-semibold text-sm mb-6 inline-block hover:underline"
        >
          ← Back to All Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full">
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 sm:h-96 object-contain rounded-xl"
              />
            )}
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold text-primary mb-4">{service.title}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{service.fullDescription}</p>
            </div>

            <div className="flex flex-col justify-between items-start border-t pt-4">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg font-semibold text-gray-800">How It Works</h3>
                <p className="text-gray-600 text-sm">
                  Get in touch with professionals in just a few clicks. Book, chat, and receive services with ease.
                </p>
              </div>
              <div
                  onClick={() => {
                    const section = document.getElementById('providers-section')
                    if (section) section.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="cursor-pointer bg-primary text-white px-6 py-2 my-4 rounded-full hover:bg-primary-dark transition"
                >
                  See Providers
                </div>
            </div>
          </div>
        </div>

        <div className="mt-12" id="providers-section">
          <h2 className="text-3xl font-semibold mb-6">Available Providers</h2>
          {filteredProviders.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProviders.map((provider) => (
                <div
                  // data-aos="fade-up"
                  data-aos-delay={100 * provider.id}
                  key={provider.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
                >
                  <div className="bg-primary py-1">
                    <img
                      src={provider.profileImage}
                      alt={provider.name}
                      className="w-30 h-30 rounded-full mx-auto mb-4 object-contain"
                    />
                  </div>

                  <div className="p-5 space-y-2">
                    <h2 className="text-lg font-semibold text-gray-900">{provider.name}</h2>
                    <p className="text-sm text-gray-600">{provider.profession}</p>

                    <div className="flex items-center text-sm text-gray-500 gap-1">
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

                    <button 
                      onClick={() => alert(`Booking ${provider.name}`)}
                      className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-600">No providers available for this service yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
