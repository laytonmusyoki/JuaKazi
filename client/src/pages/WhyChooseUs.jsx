import React from 'react'

function WhyChooseUs() {
  const data = [
    {
      id: 1,
      title: "Wide Range of Services",
      description: "From home repairs to personal training, find a service that fits your needs.",
      icon: "images/car.jpg"
    },
    {
      id: 2,
      title: "Verified Professionals",
      description: "All service providers are vetted and verified for your peace of mind.",
      icon: "images/car.jpg"
    },
    {
      id: 3,
      title: "User-Friendly Platform",
      description: "Easily navigate our platform to find and book services in just a few clicks.",
      icon: "images/car.jpg"
    },
    {
      id: 4,
      title: "Customer Support",
      description: "Our dedicated support team is here to assist you 24/7.",
      icon: "images/car.jpg"
    }
  ]

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800" data-aos="fade-up">Why Choose Us</h2>
        <p className="text-gray-500 mt-4 text-lg" data-aos="fade-up" data-aos-delay="100">
          Discover the benefits of using <span className="font-semibold text-primary">JuaKazi</span> for all your service needs.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-50 hover:bg-white transition duration-300 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md text-left"
              data-aos="fade-up"
              data-aos-delay={index * 150} 
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                <img src={item.icon} alt={item.title} className="w-10 h-10 object-cover rounded-full" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
