import React from 'react'

function HowItWorks() {
  const data = [
    {
      id: 1,
      title: "Create an Account",
      description: "Sign up for a free account to get started. It's quick and easy!",
      aosDelay: "0"
    },
    {
      id: 2,
      title: "Find Services",
      description: "Browse through a variety of services offered by local professionals.",
      aosDelay: "150"
    },
    {
      id: 3,
      title: "Book a Service",
      description: "Select a service, choose a provider, and book an appointment.",
      aosDelay: "300"
    },
    {
      id: 4,
      title: "Get the Job Done",
      description: "Enjoy the service and leave feedback to help others.",
      aosDelay: "450"
    }
  ]

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800" data-aos="zoom-in-up">How It Works</h2>
        <p className="text-gray-500 mt-4 text-lg" data-aos="zoom-in-up" data-aos-delay="100">
          Follow these simple steps to get started with <span className="text-primary font-semibold">JuaKazi</span>.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
              data-aos="zoom-in-up"
              data-aos-delay={item.aosDelay}
              data-aos-once="true"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-xl shadow-lg mb-4">
                {item.id}
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

export default HowItWorks
