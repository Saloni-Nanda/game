import React, { useState, useEffect, useCallback } from 'react';
import section1bg from '../../assets/section1bg.png';
import section2bg from '../../assets/section2bg.png';
import section3bg from '../../assets/section3bg.png';
import card4bg from '../../assets/card4bg.png';
import luckylotto from '../../assets/luckylotto.png';
import turbokeno from '../../assets/turbokeno.png';
import kenoblast from '../../assets/kenoblast.png';
import horseracing from '../../assets/horseracing.png';
import greenbuttonbg from '../../assets/green_buttonbg.png';
import call404API from '../../utils/api';

const slides = [
  {
    id: 1,
    bgImage: section1bg,
    logo: luckylotto,
    jackpot: "JACKPOT $1,500,000!",
    buttonText: "Play Now",
    buttonAction: call404API
  },
  {
    id: 2,
    bgImage: section2bg,
    logo: turbokeno,
    jackpot: "JACKPOT $2,000,000!",
    buttonText: "Play Now",
    buttonAction: call404API
  },
  {
    id: 3,
    bgImage: section3bg,
    logo: kenoblast,
    jackpot: "JACKPOT $3,500,000!",
    buttonText: "Play Now",
    buttonAction: call404API
  },
  {
    id: 4,
    bgImage: card4bg,
    logo: horseracing,
    jackpot: "JACKPOT $4,500,000!",
    buttonText: "Play Now",
    buttonAction: call404API
  }
];

const Section1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-sliding effect
  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }
    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section
      className="relative w-full min-h-150 overflow-hidden border-b-2 border-[#0d0a4ba1] shadow-[0_25px_20px_rgba(255,255,255,0.8)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container - Using opacity/visibility instead of transform */}
      <div className="relative w-full h-full min-h-150">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index 
                ? 'opacity-100 visible z-10' 
                : 'opacity-0 invisible z-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-100 px-4 py-12 mr-0 lg:mr-40">
              {/* Logo Image */}
              <div className="mb-6">
                <img
                  src={slide.logo}
                  alt="Game Logo"
                  className="w-auto h-30 md:h-40 lg:h-50 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Jackpot Amount */}
              <div className="mb-8 justify-center relative">
                {/* Top Gradient Border */}
                <div className="absolute top-0 left-0 w-full h-[4px] 
                  bg-gradient-to-r from-transparent via-green-600 to-transparent">
                </div>

                {/* Bottom Gradient Border */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] 
                  bg-gradient-to-r from-transparent via-green-600 to-transparent">
                </div>

                <div className="bg-gradient-to-r from-transparent via-black/50 to-transparent py-3">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 drop-shadow-lg text-center">
                    {slide.jackpot}
                  </h2>
                </div>
              </div>

              {/* Play Now Button */}
              <div className="relative group">
                <div className="relative p-0.5 rounded-lg bg-linear-to-br from-yellow-400 to-green-500">
                  <div
                    className="cursor-pointer rounded-lg overflow-hidden bg-white"
                    style={{
                      backgroundImage: `url(${greenbuttonbg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <button
                      className="px-16 py-4 text-2xl md:text-3xl font-bold text-white drop-shadow-lg cursor-pointer"
                      onClick={slide.buttonAction}
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>

                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-green-400/30 blur-xl group-hover:bg-green-400/50 transition-all duration-300 -z-10"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              currentSlide === index
                ? 'w-8 h-3 bg-yellow-400'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Number Indicator */}
      <div className="absolute top-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Floating Coins Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-400 rounded-full animate-float opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-yellow-300 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-yellow-500 rounded-full animate-float opacity-80"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1s;
        }
      `}</style>

      {/* Bottom Center Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-6 pointer-events-none">
        <div className="w-full h-full bg-linear-to-r from-transparent via-white to-transparent blur-md"></div>
      </div>
    </section>
  );
};

export default Section1;