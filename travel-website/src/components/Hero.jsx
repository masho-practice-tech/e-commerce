import React from 'react'

const Hero = () => {
  return (
          <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
            {/* Video background */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
              autoPlay
              muted
              loop
              playsInline
              // Sample royalty free video from Pexels videos (small size)
              src="https://cdn.pixabay.comhttps://cdn.pixabay.com/video/2025/05/01/276047_tiny.mp4/vimeo/214624405/Sea%20Waves%20On%20Sand-7280.mp4?width=1280&hash=9a0c7890743367d8f95a6db6d6a98827b1022ebe"
              type="video/mp4"
            />
            {/* Overlay content */}
            <div className="relative z-10 max-w-4xl px-4">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                Explore the World with <span className='text-orange-500 font-serif '>Alif Travel</span> 
              </h1>
              <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
                Discover breathtaking destinations and unforgettable experiences.
              </p>
              <a
                href="#destinations"
                className="inline-block px-8 py-3 bg-teal-500 rounded-full text-lg font-semibold hover:bg-teal-600 transition"
              >
                Start Your Journey
              </a>
            </div>
          </section>
        );
      }

export default Hero