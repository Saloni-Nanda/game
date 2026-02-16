import React from 'react';
import section2bg from '../../assets/section2bg.png';
import bluebuttonbg from '../../assets/blue_buttonbg.jpeg';
import kenoblast from '../../assets/kenoblast.png';
import greenbuttonbg from '../../assets/green_buttonbg.png';
import turbokeno from '../../assets/turbokeno.png';
import redbuttonbg from '../../assets/red_buttonbg.jpeg';
import card3bg from '../../assets/card3bg.png';
import luckylotto from '../../assets/luckylotto.png';
import card4bg from '../../assets/card4bg.png';
import horseracing from '../../assets/horseracing.png';
import yellowbuttonbg from '../../assets/yellow_buttonbg.png';
import { ChevronRight } from 'lucide-react';

export default function Section2() {
    return (
        <div className="relative min-h-[800px] h-auto w-full overflow-hidden border-b-2 border-[#0d0a4ba1] shadow-[0_25px_20px_rgba(255,255,255,0.8)] pb-8">
            {/* Background Image Container - FIXED TO SHOW FULL BACKGROUND */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${section2bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Optional overlay - commented out as in original */}
                {/* <div className="absolute inset-0 bg-black/30"></div> */}
            </div>
            

            {/* Content Container */}
            <div className="relative z-10 px-4 py-4">
                {/* Title */}
                <div className="flex justify-center mb-8 mt-2">
                   
                      <h2
                    className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 tracking-wide"
                    style={{
                        fontFamily: 'Arial, sans-serif',
                        color: '#FFD700',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.3)',
                        letterSpacing: '0.05em'
                    }}
                >
                    Discover Our Games
                </h2>
                </div>

                {/* Games Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 px-2 sm:px-4">
                    
                    {/* Keno Blast Card */}
                    <div className="relative w-full max-w-[350px] mx-auto md:max-w-none">
                        {/* Card Background */}
                        <div
                            className="rounded-xl  h-auto min-h-[440px] overflow-hidden shadow-2xl bg-cover bg-center bg-no-repeat flex flex-col"
                            style={{
                                backgroundImage: `url('${bluebuttonbg}')`,
                            }}
                        >
                            <div className="rounded-xl absolute inset-0" style={{
                                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%)'
                            }}></div>
                            <div className="p-3 sm:p-4 flex flex-col flex-1 relative z-10">
                                {/* Hot Badge */}
                                <div className="absolute top-2 left-2">
                                    <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-md transform -rotate-12 shadow-lg">
                                        HOT
                                    </div>
                                </div>

                                {/* Game Title */}
                                <div
                                    className="h-14 sm:h-16 bg-contain bg-no-repeat bg-center mb-2 mt-4 z-20"
                                    style={{
                                        backgroundImage: `url(${kenoblast})`,
                                    }}
                                ></div>

                                {/* Jackpot Amount */}
                                <div className="text-center mb-4">
                                    <div className="bg-red-900 border border-yellow-300 rounded px-2 py-1 inline-block">
                                        <span className="text-yellow-300 text-xs sm:text-sm font-bold">JACKPOT $25,000.00</span>
                                    </div>
                                </div>

                                {/* Keno Board */}
                                <div className="bg-black/40 rounded-lg p-2 sm:p-3 mb-3">
                                    <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                                        {[...Array(28)].map((_, i) => {
                                            const num = i + 1;
                                            const selected = [2, 11, 12, 17, 25, 28].includes(num);
                                            return (
                                                <div
                                                    key={num}
                                                    className={`aspect-square flex items-center justify-center text-[10px] sm:text-xs font-bold rounded ${selected
                                                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black'
                                                        : 'bg-blue-900/50 text-white border border-blue-700'
                                                        }`}
                                                >
                                                    {num}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Bet Info */}
                                <div className="flex justify-between text-[10px] sm:text-sm text-white mb-4 sm:mb-6">
                                    <span>Picks 6/10</span>
                                    <span>Bet Amount: $2.00</span>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2 justify-between mt-auto">
                                    <div className="flex-1">
                                        <div className="p-[2px] rounded-lg bg-gradient-to-br from-yellow-400 to-green-500">
                                            <div
                                                className="cursor-pointer rounded-lg overflow-hidden bg-white"
                                                style={{
                                                    backgroundImage: `url(${greenbuttonbg})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: "no-repeat",
                                                }}
                                            >
                                                <button className="w-full px-2 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-lg font-bold text-white drop-shadow-lg whitespace-nowrap">
                                                    Quick Pick
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="p-[2px] rounded-lg bg-gradient-to-br from-sky-400 to-blue-500">
                                            <div
                                                className="cursor-pointer rounded-lg overflow-hidden bg-white"
                                                style={{
                                                    backgroundImage: `url(${bluebuttonbg})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: "no-repeat",
                                                }}
                                            >
                                                <button className="w-full px-2 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-lg font-bold text-white drop-shadow-lg">
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Turbo Keno Card */}
                    <div className="relative w-full max-w-[350px] mx-auto md:max-w-none">
                        {/* Card Background */}
                        <div
                            className="rounded-xl h-auto min-h-[440px] overflow-hidden shadow-2xl bg-cover bg-center bg-no-repeat flex flex-col"
                            style={{
                                backgroundImage: `url('${bluebuttonbg}')`,
                            }}
                        >
                            <div className="rounded-xl absolute inset-0" style={{
                                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%)'
                            }}></div>
                            <div className="p-3 sm:p-4 flex flex-col flex-1 relative z-10">
                                {/* Game Title */}
                                <div
                                    className="h-14 sm:h-16 bg-contain bg-no-repeat bg-center mb-2 mt-4 z-20"
                                    style={{
                                        backgroundImage: `url(${turbokeno})`,
                                    }}
                                ></div>

                                {/* Jackpot Amount */}
                                <div className="text-center mb-4">
                                    <div className="px-2 py-1 inline-block">
                                        <span className="text-yellow-300 text-xs sm:text-sm font-bold">FAST 50-BALL KENO</span>
                                    </div>
                                </div>

                                {/* Keno Board */}
                                <div className="bg-black/40 rounded-lg p-2 sm:p-3 mb-3">
                                    <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                                        {[...Array(28)].map((_, i) => {
                                            const num = i + 1;
                                            const selected = [2, 11, 12, 17, 25, 28].includes(num);
                                            return (
                                                <div
                                                    key={num}
                                                    className={`aspect-square flex items-center justify-center text-[10px] sm:text-xs font-bold rounded ${selected
                                                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black'
                                                        : 'bg-blue-900/50 text-white border border-blue-700'
                                                        }`}
                                                >
                                                    {num}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Bet Info */}
                                <div className="flex justify-between text-[10px] sm:text-sm text-white mb-4 sm:mb-6">
                                    <span>Picks 6/10</span>
                                    <span>Bet Amount: $2.00</span>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2 justify-between mt-auto">
                                    <div className="flex-1">
                                        <div className="p-[2px] rounded-lg bg-gradient-to-br from-yellow-400 to-green-500">
                                            <div
                                                className="cursor-pointer rounded-lg overflow-hidden bg-white"
                                                style={{
                                                    backgroundImage: `url(${greenbuttonbg})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: "no-repeat",
                                                }}
                                            >
                                                <button className="w-full px-2 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-lg font-bold text-white drop-shadow-lg whitespace-nowrap">
                                                    Quick Pick
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="p-[2px] rounded-lg bg-gradient-to-br from-yellow-400 to-red-500">
                                            <div
                                                className="cursor-pointer rounded-lg overflow-hidden bg-white"
                                                style={{
                                                    backgroundImage: `url(${redbuttonbg})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: "no-repeat",
                                                }}
                                            >
                                                <button className="w-full px-2 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-lg font-bold text-white drop-shadow-lg">
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lucky Lotto Card */}
                    <div className="relative w-full max-w-[350px] mx-auto md:max-w-none">
                        {/* Card Background */}
                        <div
                            className="rounded-xl h-auto min-h-[440px] overflow-hidden shadow-2xl bg-cover bg-center bg-no-repeat flex flex-col"
                            style={{
                                backgroundImage: `url('${card3bg}')`,
                            }}
                        >
                            {/* Dark overlay for better text visibility */}
                            <div className="absolute inset-0 bg-black/30"></div>
                            <div className="p-3 sm:p-4 flex flex-col flex-1 relative z-10">
                                {/* Game Title */}
                                <div
                                    className="h-16 sm:h-18 bg-contain bg-no-repeat bg-center mt-4 z-20"
                                    style={{
                                        backgroundImage: `url(${luckylotto})`,
                                    }}
                                ></div>

                                {/* Jackpot Amount */}
                                <div className="text-center mb-4 bg-gradient-to-r from-transparent via-[#00000077] from-transparent">
                                    <div className="px-2 py-1 inline-block">
                                        <span className="text-yellow-300 text-sm sm:text-md font-bold">JACKPOT $25,000.00</span>
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="flex-1"></div>

                                {/* Buttons - with arrow icon properly aligned */}
                                <div className="w-full mt-4">
                                    <div className="p-[2px] rounded-lg bg-gradient-to-br from-yellow-400 to-green-500">
                                        <div
                                            className="cursor-pointer rounded-lg overflow-hidden bg-white"
                                            style={{
                                                backgroundImage: `url(${greenbuttonbg})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        >
                                            <button className="flex items-center justify-center w-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-lg font-bold text-white drop-shadow-lg">
                                                Play Now
                                                <ChevronRight className="ml-1 h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Horse Racing Card */}
                    <div className="relative w-full max-w-[350px] mx-auto md:max-w-none">
                        {/* Card Background */}
                        <div
                            className="rounded-xl h-auto min-h-[440px] overflow-hidden shadow-2xl bg-cover bg-center bg-no-repeat flex flex-col"
                            style={{
                                backgroundImage: `url('${card4bg}')`,
                            }}
                        >
                            {/* Dark overlay for better text visibility */}
                            <div className="absolute inset-0 bg-black/30"></div>
                            <div className="p-3 sm:p-4 flex flex-col flex-1 relative z-10">
                                {/* Game Title */}
                                <div
                                    className="h-14 sm:h-16 bg-contain bg-no-repeat bg-center mt-4 z-20"
                                    style={{
                                        backgroundImage: `url(${horseracing})`,
                                    }}
                                ></div>

                                {/* Spacer */}
                                <div className="flex-1"></div>

                                {/* Jackpot Amount */}
                                <div className="text-center mb-4 bg-gradient-to-r from-transparent via-[#00000077] from-transparent">
                                    <div className="px-2 py-1 inline-block">
                                        <span className="text-yellow-300 text-sm sm:text-md font-bold">JACKPOT $25,000.00</span>
                                    </div>
                                    <div className="px-2 py-1 inline-block">
                                        <span className="text-yellow-300 text-xs sm:text-sm font-bold">NEXT RACE IN </span>
                                        <span className="text-yellow-300 text-sm sm:text-md font-bold">04:30</span>
                                    </div>
                                </div>

                                {/* Buttons - with arrow icon and dark overlay on yellow button */}
                                <div className="w-full">
                                    <div className="p-[2px] rounded-lg bg-gradient-to-br from-white/70 to-yellow-500 relative">
                                        {/* Dark overlay for yellow button background */}
                                        <div className="absolute inset-0 rounded-lg bg-black/30 pointer-events-none"></div>
                                        <div
                                            className="cursor-pointer rounded-lg overflow-hidden bg-white relative"
                                            style={{
                                                backgroundImage: `url(${yellowbuttonbg})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        >
                                            {/* Additional dark overlay on the button itself */}
                                            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                                            <button className="flex items-center justify-center w-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-lg font-bold text-white drop-shadow-lg relative z-10">
                                                Play Now
                                                <ChevronRight className="ml-1 h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Play Now Button - with arrow icon and dark overlay */}
                <div className="flex justify-center px-4">
                    <div className="inline-block p-[2px] rounded-lg bg-gradient-to-br from-white/70 to-yellow-500 w-full sm:w-auto max-w-[300px] sm:max-w-none relative">
                        {/* Dark overlay for yellow button background */}
                        <div className="absolute inset-0 rounded-lg bg-black/30 pointer-events-none"></div>
                        <div
                            className="cursor-pointer rounded-lg overflow-hidden bg-white relative"
                            style={{
                                backgroundImage: `url(${yellowbuttonbg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* Additional dark overlay on the button itself */}
                            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                            <button className="flex items-center justify-center w-full px-8 sm:px-12 md:px-16 py-2 text-lg sm:text-xl font-bold text-white drop-shadow-lg relative z-10">
                                Play Now
                                <ChevronRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Center Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-6 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent blur-md"></div>
            </div>
        </div>
    );
}