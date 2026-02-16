import React from 'react';
import section1bg from '../../assets/section1bg.png';
import luckylotto from '../../assets/luckylotto.png';
import greenbuttonbg from '../../assets/green_buttonbg.png';

const Section1 = () => {
  return (
    <section className="relative w-full min-h-150 overflow-hidden border-b-2 border-[#0d0a4ba1] shadow-[0_25px_20px_rgba(255,255,255,0.8)]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${section1bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

        }}
      >
        {/* Dark overlay on sides, lighter in middle */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%)'

        }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-100 px-4 py-12">
        {/* Lucky Lotto Text Image */}
        <div className="mb-6">
          <img
            src={luckylotto}
            alt="Lucky Lotto"
            className="w-auto h-30 md:h-40 lg:h-50 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Jackpot Amount */}
        <div className="mb-8 border-t-4 border-b-4 border-green-800/80 py-3 px-10 bg-linear-to-r from-transparent via-black/50 to-transparent">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 drop-shadow-lg">
            JACKPOT <span className="text-white">$1,500,000!</span>
          </h2>
        </div>

        {/* Play Now Button */}
        <div className="relative group">
          <div class="relative p-0.5 rounded-lg bg-linear-to-br from-yellow-400 to-green-500 ">
            <div
              className="cursor-pointer 
              rounded-lg overflow-hidden bg-white"
              style={{
                backgroundImage: `url(${greenbuttonbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
              }}
            >
              <button className="px-16 py-4 text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                Play Now
              </button>
            </div>
          </div>

          {/* Button Glow Effect */}
          <div className="absolute inset-0 bg-green-400/30 blur-xl group-hover:bg-green-400/50 transition-all duration-300 -z-10"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 animate-bounce">
          <div className="w-12 h-12 rounded-full bg-yellow-400 opacity-70"></div>
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce delay-150">
          <div className="w-8 h-8 rounded-full bg-yellow-300 opacity-60"></div>
        </div>
      </div>

      {/* Floating Coins Animation (Optional) */}
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
        <div className="w-full h-full bg-linear-to-r from-transparent via-white to-transparent blur-md opacity-80"></div>
      </div>
    </section>
  );
};

export default Section1;