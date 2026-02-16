import React from 'react';
import section3bg from '../../assets/section3bg.png';

export default function Section3() {
    const winners = [
        {
            name: "Tom R.",
            amount: "$2,640",
            game: "Keno",
            gameIcon: "https://img.freepik.com/free-vector/detailed-esports-gaming-logo_52683-63632.jpg?semt=ais_user_personalization&w=740&q=80",
            userImage: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Sarah L.",
            amount: "$1,150",
            game: "Lucky Lotto",
            gameIcon: "https://static.vecteezy.com/system/resources/thumbnails/017/068/883/small/dark-ninja-mascot-logo-for-team-esport-gaming-vector.jpg",
            userImage: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Alex M.",
            amount: "$5,215",
            game: "Turbo Keno",
            gameIcon: "https://marketplace.canva.com/EAGDIVufSLI/1/0/1600w/canva-black-and-white-illustrative-gaming-logo-Vp2loTXnros.jpg",
            userImage: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
            name: "James W.",
            amount: "$3,215",
            game: "Turbo Keno",
            gameIcon: "https://i.fbcd.co/products/resized/resized-750-500/image-preview-ee4c8261ec772760ba07991712c805737aa7f9a6433478202674bf7b76fe5fab.jpg",
            userImage: "https://randomuser.me/api/portraits/men/86.jpg"
        },
        {
            name: "Emma J.",
            amount: "$780",
            game: "Horse Racing",
            gameIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdGxD0zfvSYjmvMRU2MkAAl28r5eednxykw&s",
            userImage: "https://randomuser.me/api/portraits/women/63.jpg"
        }
    ];

    return (
        <div className="relative w-full min-h-[700px] md:min-h-[600px] overflow-hidden pb-[50px] lg:pb-[100px]">
            {/* Background Image Container */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${section3bg})`
                }}
            >
                {/* Dark overlay for better text visibility */}
                {/* <div className="absolute inset-0 bg-black/30"></div> */}
            </div>

            {/* Content Container */}
            <div className="relative z-10 px-3 sm:px-4 py-6 sm:py-8">
                {/* Title */}
                <h2
                    className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 tracking-wide"
                    style={{
                        fontFamily: 'Arial, sans-serif',
                        color: '#FFD700',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.3)',
                        letterSpacing: '0.05em'
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
                                    {/* User Avatar with real image */}
                                    <div
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-cover bg-center flex-shrink-0 border-2 border-[#2a5080] overflow-hidden"
                                        style={{
                                            backgroundImage: `url('${winner.userImage}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        {/* Fallback in case image doesn't load */}
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#3a6ea5] to-[#1e3a5f] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                            <span className="text-white font-bold text-sm sm:text-base md:text-xl">{winner.name.charAt(0)}</span>
                                        </div>
                                    </div>

                                    {/* Winner Info */}
                                    <div className="flex flex-col xl:flex-row gap-0.5 xl:gap-4 flex-1 min-w-0">
                                        <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                                            <span className="text-white font-bold text-base sm:text-lg md:text-[22px] truncate max-w-[120px] sm:max-w-[140px]" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.name}
                                            </span>
                                            <span className="text-[#FFD700] font-bold text-base sm:text-lg md:text-[22px] whitespace-nowrap flex-shrink-0" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.amount}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 sm:gap-2 mt-0.5 min-w-0">
                                            {/* Game Icon with real image */}
                                            <div
                                                className="w-5 h-5 sm:w-6 sm:h-6 bg-contain bg-no-repeat bg-center flex-shrink-0 rounded-full"
                                                style={{
                                                    backgroundImage: `url('${winner.gameIcon}')`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }}
                                            />
                                            <span className="text-[#9CA3AF] text-xs sm:text-sm md:text-[15px] truncate max-w-[100px] sm:max-w-[120px]" style={{ fontFamily: 'Arial, sans-serif' }}>
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
                                    {/* User Avatar with real image */}
                                    <div
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-cover bg-center flex-shrink-0 border-2 border-[#2a5080] overflow-hidden"
                                        style={{
                                            backgroundImage: `url('${winner.userImage}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        {/* Fallback in case image doesn't load */}
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#3a6ea5] to-[#1e3a5f] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                            <span className="text-white font-bold text-sm sm:text-base md:text-xl">{winner.name.charAt(0)}</span>
                                        </div>
                                    </div>

                                    {/* Winner Info */}
                                    <div className="flex flex-col xl:flex-row gap-0.5 xl:gap-4 flex-1 min-w-0">
                                        <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                                            <span className="text-white font-bold text-base sm:text-lg md:text-[22px] truncate max-w-[120px] sm:max-w-[140px]" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.name}
                                            </span>
                                            <span className="text-[#FFD700] font-bold text-base sm:text-lg md:text-[22px] whitespace-nowrap flex-shrink-0" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.amount}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 sm:gap-2 mt-0.5 min-w-0">
                                            {/* Game Icon with real image */}
                                            <div
                                                className="w-5 h-5 sm:w-6 sm:h-6 bg-contain bg-no-repeat bg-center flex-shrink-0 rounded-full"
                                                style={{
                                                    backgroundImage: `url('${winner.gameIcon}')`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }}
                                            />
                                            <span className="text-[#9CA3AF] text-xs sm:text-sm md:text-[15px] truncate max-w-[100px] sm:max-w-[120px]" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {winner.game}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* More Winners Button */}
                            <div className="flex items-center justify-start sm:justify-center lg:justify-end mt-2 sm:mt-0 pr-10">
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
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent blur-md"></div>
            </div>
        </div>
    );
}