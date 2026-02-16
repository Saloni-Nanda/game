import React from 'react';
import section3bg from '../../assets/section3bg.png';

export default function Section3() {
    const winners = [
        {
            name: "Tom R.",
            amount: "$2,640",
            game: "Keno",
            gameIcon: "keno-icon.png",
            userImage: "user1.jpg"
        },
        {
            name: "Sarah L.",
            amount: "$1,150",
            game: "Lucky Lotto",
            gameIcon: "lotto-icon.png",
            userImage: "user2.jpg"
        },
        {
            name: "Alex M.",
            amount: "$5,215",
            game: "89", // Based on the image
            gameIcon: "coins-icon.png",
            userImage: "user3.jpg"
        },
        {
            name: "Alex M.",
            amount: "$3,215",
            game: "Turbo Keno",
            gameIcon: "turbo-keno-icon.png",
            userImage: "user4.jpg"
        },
        {
            name: "Emma J.",
            amount: "$780",
            game: "Horse Racing",
            gameIcon: "horse-racing-icon.png",
            userImage: "user5.jpg"
        }
    ];

    return (
        <div className="relative w-full min-h-[500px] md:min-h-[400px] overflow-hidden">
            {/* Background Image Container - ADD YOUR BACKGROUND IMAGE HERE */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${section3bg})`
                }}
            >
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 px-3 sm:px-4 py-6 sm:py-8">
                {/* Title */}
                <h2
                    className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold mb-6 sm:mb-8 md:mb-10 tracking-wide"
                    style={{
                        fontFamily: 'Arial, sans-serif',
                        color: '#FFD700',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.3)',
                        letterSpacing: '0.02em'
                    }}
                >
                    Latest Winners
                </h2>

                {/* Winners Container */}
                <div className="max-w-[1400px] mx-auto px-2 sm:px-4">
                    {/* Winners Box */}
                    <div
                        className="rounded-xl p-4 sm:p-5 md:p-6"
                        style={{
                            background: 'linear-gradient(180deg, rgba(15, 35, 70, 0.6) 0%, rgba(10, 25, 55, 0.6) 100%)',
                            border: '1px solid rgba(30, 70, 130, 0.6)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(100, 150, 255, 0.1)',
                        }}
                    >
                        {/* First Row - 3 Winners */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3 md:gap-4 pb-4 mb-4 sm:mb-6 border-b border-[#1e3a5f]">
                            {winners.slice(0, 3).map((winner, index) => (
                                <div key={index} className="flex items-center gap-2 sm:gap-3">
                                    {/* User Avatar - ADD YOUR USER IMAGE HERE */}
                                    <div
                                        className="w-10 sm:w-12 md:w-[52px] h-6 sm:h-7 md:h-[32px] rounded-full bg-cover bg-center flex-shrink-0 border-2 border-[#2a5080]"
                                        style={{
                                            // backgroundImage: `url('/${winner.userImage}')`,
                                        }}
                                    >
                                        {/* Placeholder avatar */}
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#3a6ea5] to-[#1e3a5f] flex items-center justify-center">
                                            <span className="text-white font-bold text-sm sm:text-base md:text-xl">{winner.name.charAt(0)}</span>
                                        </div>
                                    </div>

                                    {/* Winner Info */}
                                    <div className="flex flex-col xl:flex-row gap-0.5 xl:gap-4 flex-1 min-w-0">
                                        <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                                            <span className="text-white font-bold text-base sm:text-lg md:text-[22px] truncate" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.name}
                                            </span>
                                            <span className="text-[#FFD700] font-bold text-base sm:text-lg md:text-[22px] whitespace-nowrap" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.amount}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 sm:gap-2 mt-0.5">
                                            {/* Game Icon - ADD YOUR GAME ICON IMAGE HERE */}
                                            <div
                                                className="w-4 sm:w-[18px] h-4 sm:h-[18px] bg-contain bg-no-repeat bg-center flex-shrink-0"
                                                style={{
                                                    // backgroundImage: `url('/${winner.gameIcon}')`
                                                }}
                                            >
                                                {/* Placeholder icon based on game type */}
                                                {index === 0 && (
                                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500]"></div>
                                                )}
                                                {index === 1 && (
                                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF4757]"></div>
                                                )}
                                                {index === 2 && (
                                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500]"></div>
                                                )}
                                            </div>
                                            <span className="text-[#9CA3AF] text-xs sm:text-sm md:text-[15px] truncate" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.game}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second Row - 2 Winners + More Button */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-2">
                            {winners.slice(3, 5).map((winner, index) => (
                                <div key={index} className="flex items-center gap-2 sm:gap-3">
                                    {/* User Avatar - ADD YOUR USER IMAGE HERE */}
                                    <div
                                        className="w-10 sm:w-12 md:w-[52px] h-6 sm:h-7 md:h-[32px] rounded-full bg-cover bg-center flex-shrink-0 border-2 border-[#2a5080]"
                                        style={{
                                            // backgroundImage: `url('/${winner.userImage}')`,
                                        }}
                                    >
                                        {/* Placeholder avatar */}
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#3a6ea5] to-[#1e3a5f] flex items-center justify-center">
                                            <span className="text-white font-bold text-sm sm:text-base md:text-xl">{winner.name.charAt(0)}</span>
                                        </div>
                                    </div>

                                    {/* Winner Info */}
                                    <div className="flex flex-col xl:flex-row gap-0.5 xl:gap-4 flex-1 min-w-0">
                                        <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                                            <span className="text-white font-bold text-base sm:text-lg md:text-[22px] truncate" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.name}
                                            </span>
                                            <span className="text-[#FFD700] font-bold text-base sm:text-lg md:text-[22px] whitespace-nowrap" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.amount}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 sm:gap-2 mt-0.5">
                                            {/* Game Icon - ADD YOUR GAME ICON IMAGE HERE */}
                                            <div
                                                className="w-4 sm:w-[18px] h-4 sm:h-[18px] bg-contain bg-no-repeat bg-center flex-shrink-0"
                                                style={{
                                                    // backgroundImage: `url('/${winner.gameIcon}')`
                                                }}
                                            >
                                                {/* Placeholder icon */}
                                                {index === 0 && (
                                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD]"></div>
                                                )}
                                                {index === 1 && (
                                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#7ED321] to-[#5FA816]"></div>
                                                )}
                                            </div>
                                            <span className="text-[#9CA3AF] text-xs sm:text-sm md:text-[15px] truncate" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.game}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* More Winners Button */}
                            <div className="flex items-center justify-start sm:justify-center lg:justify-end mt-2 sm:mt-0">
                                <button className="flex items-center gap-1 sm:gap-2 group hover:opacity-80 transition-opacity">
                                    <span className="text-white text-sm sm:text-base md:text-[18px] font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>
                                        More Winners
                                    </span>
                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFD700] transform group-hover:translate-x-1 transition-transform"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Center Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-4 sm:h-6 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent blur-md opacity-80"></div>
            </div>
        </div>
    );
}