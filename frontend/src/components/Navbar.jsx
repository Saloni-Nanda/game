import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import navbarbg from '../assets/navbarbg.png';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="relative px-8 md:px-4 sm:px-4 py-3 shadow-2xl overflow-hidden border-t-2 border-b-2 border-[#0d0a4ba1]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{
                    backgroundImage: `url(${navbarbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>

            {/* Container for all navbar content */}
            <div className="relative z-10">
                {/* Top Row - Always visible */}
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <div className="w-10.5 h-10.5 sm:w-9 sm:h-9 bg-linear-to-br from-[#2a5a8f] via-[#4a8fd4] to-[#6bb5ff] rounded-lg flex items-center justify-center relative shadow-[0_2px_8px_rgba(74,143,212,0.3)]">
                            <div
                                className="w-7 h-7 sm:w-6 sm:h-6 bg-white -rotate-15"
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)'
                                }}
                            ></div>
                        </div>
                        <span className="text-[26px] sm:text-[22px] font-semibold text-white tracking-tight">
                            FortisPlay
                        </span>
                    </div>

                    {/* Desktop Navigation Links - Only visible on lg+ */}
                    <div className="hidden lg:flex gap-10 flex-1 justify-center">
                        <a
                            href="#games"
                            className="group relative text-white font-medium text-base py-2 transition-all duration-300"
                        >
                            <span className="relative inline-block">
                                Games
                                <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[110%] h-1 
                     bg-linear-to-r from-yellow-600 via-yellow-300 to-yellow-600 
                     rounded-full 
                     shadow-[0_0_15px_4px_rgba(250,204,21,0.9)]
                     transition-all duration-300
                     group-hover:w-[110%]">
                                </span>
                            </span>
                        </a>

                        <a
                            href="#promotions"
                            className="text-[#a8b9d1] font-medium text-base py-2 transition-colors duration-300 hover:text-white"
                        >
                            Promotions
                        </a>
                        <a
                            href="#jackpots"
                            className="text-[#a8b9d1] font-medium text-base py-2 transition-colors duration-300 hover:text-white"
                        >
                            Jackpots
                        </a>
                        <a
                            href="#wallet"
                            className="text-[#a8b9d1] font-medium text-base py-2 transition-colors duration-300 hover:text-white"
                        >
                            My Wallet
                        </a>
                    </div>

                    {/* Right Section - Visible on lg+ and md */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Balance Display */}
                        <div className="relative flex items-center gap-2 rounded-lg px-4.5 py-2.5 border-[1.5px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 152, 0, 0.15) 100%)',
                                borderColor: 'rgba(255, 193, 7, 0.4)'
                            }}
                        >
                            {/* Shimmer Effect */}
                            <div
                                className="absolute inset-0 -left-full w-full h-full animate-shimmer"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                                    animation: 'shimmer 3s infinite'
                                }}
                            ></div>

                            <span className="text-base font-bold text-[#ffc107]"
                                style={{ textShadow: '0 2px 8px rgba(255, 193, 7, 0.5)' }}
                            >
                                $
                            </span>
                            <span className="text-base font-semibold text-white tracking-wide">
                                $1,250.75
                            </span>
                        </div>

                        {/* Sign Up Button */}
                        <button className="relative px-7 py-2.5 rounded-lg font-bold text-base text-[#0a1e3d] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                            style={{
                                background: 'linear-gradient(135deg, #ffa726 0%, #ff9800 50%, #fb8c00 100%)',
                                boxShadow: '0 4px 15px rgba(255, 152, 0, 0.4)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 152, 0, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 152, 0, 0.4)';
                            }}
                        >
                            {/* Shine Effect */}
                            <span
                                className="absolute inset-0 -left-full w-full h-full transition-all duration-500 hover:left-full"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
                                }}
                            ></span>
                            <span className="relative">Sign Up</span>
                        </button>

                        {/* User Button */}
                        <button
                            className="w-11 h-11 rounded-lg flex items-center justify-center border-2 transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                background: 'linear-gradient(135deg, #3a6ea5 0%, #2a5a8f 100%)',
                                borderColor: 'rgba(74, 143, 212, 0.3)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #4a8fd4 0%, #3a6ea5 100%)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 143, 212, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #3a6ea5 0%, #2a5a8f 100%)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="drop-shadow-md">
                                <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="white" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle - Using Lucide React icons */}
                    <button
                        className="lg:hidden block p-2 text-white hover:text-gray-200 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} strokeWidth={2} />
                        ) : (
                            <Menu size={28} strokeWidth={2} />
                        )}
                    </button>
                </div>

                {/* Mobile/Tablet Menu - Toggleable content */}
                <div className={`
                    lg:hidden
                    ${isMobileMenuOpen ? 'block' : 'hidden'}
                `}>
                    {/* Navigation Links - Mobile/Tablet */}
                    <div className="flex flex-col gap-0 mt-4 pt-4 border-t border-white/10">
                        <a
                            href="#games"
                            className="group relative text-white font-medium text-base py-3 transition-all duration-300"
                        >
                            <span className="relative inline-block">
                                Games
                                <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-1 
                     bg-linear-to-r from-yellow-600 via-yellow-300 to-yellow-600 
                     rounded-full 
                     shadow-[0_0_15px_4px_rgba(250,204,21,0.9)]
                     transition-all duration-300
                     group-hover:w-[110%]">
                                </span>
                            </span>
                        </a>

                        <a
                            href="#promotions"
                            className="text-[#a8b9d1] font-medium text-base py-3 transition-colors duration-300 hover:text-white"
                        >
                            Promotions
                        </a>
                        <a
                            href="#jackpots"
                            className="text-[#a8b9d1] font-medium text-base py-3 transition-colors duration-300 hover:text-white"
                        >
                            Jackpots
                        </a>
                        <a
                            href="#wallet"
                            className="text-[#a8b9d1] font-medium text-base py-3 transition-colors duration-300 hover:text-white"
                        >
                            My Wallet
                        </a>
                    </div>

                    {/* Right Section - Only on sm (mobile), hidden on md (tablet) */}
                    <div className="md:hidden flex items-center justify-between gap-4 mt-4 pt-4 border-t border-white/10">
                        {/* Balance Display */}
                        <div className="relative flex items-center gap-2 rounded-lg px-4.5 py-2.5 border-[1.5px] overflow-hidden flex-1 max-w-35"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 152, 0, 0.15) 100%)',
                                borderColor: 'rgba(255, 193, 7, 0.4)'
                            }}
                        >
                            {/* Shimmer Effect */}
                            <div
                                className="absolute inset-0 -left-full w-full h-full animate-shimmer"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                                    animation: 'shimmer 3s infinite'
                                }}
                            ></div>

                            <span className="text-lg font-bold text-[#ffc107]"
                                style={{ textShadow: '0 2px 8px rgba(255, 193, 7, 0.5)' }}
                            >
                                $
                            </span>
                            <span className="text-base font-semibold text-white tracking-wide">
                                $1,250.75
                            </span>
                        </div>

                        {/* Sign Up Button */}
                        <button className="relative px-5 py-2.5 rounded-lg font-bold text-sm text-[#0a1e3d] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                            style={{
                                background: 'linear-gradient(135deg, #ffa726 0%, #ff9800 50%, #fb8c00 100%)',
                                boxShadow: '0 4px 15px rgba(255, 152, 0, 0.4)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 152, 0, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 152, 0, 0.4)';
                            }}
                        >
                            {/* Shine Effect */}
                            <span
                                className="absolute inset-0 -left-full w-full h-full transition-all duration-500 hover:left-full"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
                                }}
                            ></span>
                            <span className="relative">Sign Up</span>
                        </button>

                        {/* User Button */}
                        <button
                            className="w-10 h-10 rounded-lg flex items-center justify-center border-2 transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                background: 'linear-gradient(135deg, #3a6ea5 0%, #2a5a8f 100%)',
                                borderColor: 'rgba(74, 143, 212, 0.3)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #4a8fd4 0%, #3a6ea5 100%)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 143, 212, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #3a6ea5 0%, #2a5a8f 100%)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="drop-shadow-md">
                                <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { left: -100%; }
                    50% { left: 100%; }
                    100% { left: 100%; }
                }
            `}</style>
        </nav>
    );
}