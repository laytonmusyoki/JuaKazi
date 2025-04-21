import React from 'react'
import services from '../data/services' 
import { useNavigate } from 'react-router-dom'

function Services() {
  const navigate = useNavigate()

  return (
    <div className='w-full bg-gray-100 text-gray-800 mt-[100px]'>
      <div className='max-w-[95%] mx-auto w-full py-10 px-4 sm:px-10'>
        <h1 className='text-4xl font-bold text-center my-8'>Our Services</h1>
        <p className='text-center text-lg mb-8'>Explore a wide range of services offered by our skilled professionals.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={service.id}
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Optional image */}
              {/* <img src={service.image} alt={service.title} className='w-full h-40 object-cover rounded-md mb-4' /> */}
              <h2 className='text-xl font-semibold mb-4'>{service.title}</h2>
              <p className='text-gray-600'>{service.description}</p>
              <button
                onClick={() => navigate(`/services/${service.id}`)}
                className='mt-4 bg-primary text-white py-2 px-4 rounded-full'
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
