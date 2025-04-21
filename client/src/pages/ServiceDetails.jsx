import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import services from '../data/services'

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

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 py-10 px-4 sm:px-10">
      <div className="max-w-screen-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="text-primary font-semibold text-sm mb-6 inline-block hover:underline"
        >
          ← Back to All Services
        </button>

        {/* Grid Layout for Image and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Image */}
          <div className="w-full">
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 sm:h-96 object-cover rounded-xl shadow-md"
              />
            )}
          </div>

          {/* Service Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold text-primary mb-4">{service.title}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{service.fullDescription}</p>
            </div>

            {/* Additional Information and Booking Section */}
            <div className="flex flex-col justify-between items-start border-t pt-4">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg font-semibold text-gray-800">How It Works</h3>
                <p className="text-gray-600 text-sm">
                  Get in touch with professionals in just a few clicks. Book, chat, and receive services with ease.
                </p>
              </div>
              <button
                onClick={() => navigate(`/services/${service.id}/book`)}
                className="bg-primary text-white px-6 py-2 my-4 rounded-full hover:bg-primary-dark transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
