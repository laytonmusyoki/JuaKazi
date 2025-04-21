import React from 'react'
import Slider from "react-slick";


function Hero() {

    const heroSlides = [
        {
          id: 1,
          title: "Find Reliable Services Near You",
          subtitle: "From electricians to mechanics, JuaKazi connects you with trusted local professionals.",
          image: "/images/car.jpg",
          ctaText: "Explore Services",
          ctaLink: "/services"
        },
        {
          id: 2,
          title: "Offer Your Skills, Get Hired",
          subtitle: "Are you skilled? Create a profile and start earning with JuaKazi.",
          image: "/images/car.jpg",
          ctaText: "Join as a Provider",
          ctaLink: "/register"
        },
        {
          id: 3,
          title: "Fast & Easy Booking",
          subtitle: "Book services in just a few clicks — anytime, anywhere.",
          image: "/images/car.jpg",
          ctaText: "How It Works",
          ctaLink: "/how-it-works"
        },
        {
          id: 4,
          title: "Verified & Rated Professionals",
          subtitle: "Read reviews, check ratings, and choose with confidence.",
          image: "/images/car.jpg",
          ctaText: "Browse Top Rated",
          ctaLink: "/top-rated"
        }
      ];
      

    const settings = {
        dots: true,
        infinite: true,
        arrows:true,
        speed: 4000,
        slidesToScroll: 1,
        autoPlaySpeed:6000,
        cssEase:"ease-in-out",
        pauseOnHover:true,
        pauseOnFocus:false,
        autoplay:true
      };
  return (
      <div className='max-w-[95%]  mx-auto w-full h-[550px] lg:h-[450px]'>
        <div className='overflow-hidden rounded-3xl  sm:min-h-[650px]'>
        <Slider {...settings}>
        {
            heroSlides.map((data)=>(
                <div key={data.id} className='bg-primary px-[3%]'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 text-white'>
                        <div className='flex flex-col justify-center items-start z-30'>
                            <h3
                             data-aos="zoom-out" 
                             data-aos-duration="500"
                             data-aos-once="true"
                             className='text-lg md:text-3xl font-bold '>{data.ctaText}</h3>
                            <h1
                            data-aos="zoom-out" 
                            data-aos-duration="500"
                            data-aos-once="true"
                             className='text-4xl md:text-5xl font-extrabold'>{data.title}</h1>
                            <h5
                            data-aos="fade-up" 
                            data-aos-offset="0"
                            data-aos-duration="500"
                            data-aos-delay="300"
                             className='text-sm md:text-xl '>{data.subtitle}</h5>
                        </div>
                        <div>
                            <div
                            data-aos="zoom-in" 
                            ata-aos-once="true"
                            >
                            <img src="/images/car.png" className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' alt="hero"/>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        </Slider>
      </div>
      </div>
  )
}

export default Hero
