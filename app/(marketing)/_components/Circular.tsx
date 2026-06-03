"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Circular() {
  return (
    <>
      {/* Main Section */}
      <section className="relative w-full min-h-screen clip-path-v flex flex-col items-center justify-start lg:justify-center px-4 pt-10 pb-28 overflow-x-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="https://pub-a796c7833fd9465a9f5676c0d5aee36e.r2.dev/Make%20This%20A%20Secs%20Video.mp4" type="video/mp4" />
        </video>
        {/* Fallback Background Image */}
        <div className="absolute inset-0 bg-[url('/assets/bg/home%20bg.webp')] bg-cover bg-no-repeat -z-20" />
        
        {/* Original 4-Column Grid layout */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-8 md:gap-12 lg:gap-x-20 w-full max-w-7xl z-20 bg-[url('/assets_icon/sky.png')] bg-cover md:bg-contain bg-center bg-no-repeat">

          {/* 1. DAILY LOGIN */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
            className="flex items-center justify-center"
          >
            <div className="bg-[linear-gradient(203.64deg,rgba(24,24,24,0.5)_9.95%,rgba(0,74,173,0.5)_50.53%,rgba(25,24,24,0.5)_90.05%)]
                text-white p-3 sm:p-6 md:p-8 rounded-tl-[1.25rem] rounded-br-[1.25rem] sm:rounded-tl-[2rem] sm:rounded-br-[2rem] shadow-lg
                transform hover:-translate-y-2
                transition-transform duration-300 ease-out w-full max-w-sm text-center"
            >
              <h2 className="text-[11px] sm:text-sm md:text-base font-bold mb-2 sm:mb-4 font-chakra">DAILY LOGIN</h2>
              <button
                className="px-2 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 font-chakra bg-[rgba(161,118,214,0.14)]
                  border border-white/30 text-gray-100 text-[9px] sm:text-sm md:text-base font-semibold
                  rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(109,87,14,0.49)]
                  hover:scale-105 transition-all duration-300 ease-out w-full sm:w-auto"
              >
                50 STARDUST
              </button>
            </div>
          </motion.div>

          {/* --- Column 2: Middle Stack (Mint + Refer) --- */}
          <div className="flex flex-col justify-between space-y-4 sm:space-y-12 lg:space-y-48">
            
            {/* 2. MINT GOLDEN PASS */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="flex justify-center"
            >
              <div className="bg-[linear-gradient(203.64deg,rgba(24,24,24,0.5)_9.95%,rgba(0,74,173,0.5)_50.53%,rgba(25,24,24,0.5)_90.05%)]
                  text-white p-3 sm:p-6 md:p-8 rounded-tl-[1.25rem] rounded-br-[1.25rem] sm:rounded-tl-[2rem] sm:rounded-br-[2rem] shadow-lg
                  transform hover:-translate-y-2
                  transition-transform duration-300 ease-out w-full max-w-sm text-center"
              >
                <h2 className="text-[11px] sm:text-sm md:text-base font-bold mb-2 sm:mb-4 font-chakra">MINT A GOLDEN PASS</h2>
                <button
                  className="px-2 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 font-chakra bg-[rgba(161,118,214,0.14)]
                    border border-white/30 text-gray-100 text-[9px] sm:text-sm md:text-base font-semibold
                    rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(109,87,14,0.49)]
                    hover:scale-105 transition-all duration-300 ease-out w-full sm:w-auto"
                >
                  4X STARDUST
                </button>
              </div>
            </motion.div>

            {/* 3. REFER YOUR FRIEND */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="flex justify-center"
            >
              <div className="bg-[linear-gradient(203.64deg,rgba(24,24,24,0.5)_9.95%,rgba(0,74,173,0.5)_50.53%,rgba(25,24,24,0.5)_90.05%)]
                  text-white p-3 sm:p-6 md:p-8 rounded-tl-[1.25rem] rounded-br-[1.25rem] sm:rounded-tl-[2rem] sm:rounded-br-[2rem] shadow-lg
                  transform hover:-translate-y-2
                  transition-transform duration-300 ease-out w-full max-w-sm text-center"
              >
                <h2 className="text-[11px] sm:text-sm md:text-base font-bold mb-2 sm:mb-4 font-chakra">REFER YOUR FRIEND</h2>
                <button
                  className="px-2 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 font-chakra bg-[rgba(161,118,214,0.14)]
                    border border-white/30 text-gray-100 text-[9px] sm:text-sm md:text-base font-semibold
                    rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(109,87,14,0.49)]
                    hover:scale-105 transition-all duration-300 ease-out w-full sm:w-auto"
                >
                  100 STARDUST
                </button>
              </div>
            </motion.div>
          </div>

          {/* 4. COMMUNITY REWARD (Restored to Column 3, Shifted Right slightly) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="flex items-center justify-center lg:items-end lg:justify-end lg:translate-x-12"
          >
            <div className="bg-[linear-gradient(203.64deg,rgba(24,24,24,0.5)_9.95%,rgba(0,74,173,0.5)_50.53%,rgba(25,24,24,0.5)_90.05%)]
                text-white p-3 sm:p-6 md:p-8 rounded-tl-[1.25rem] rounded-br-[1.25rem] sm:rounded-tl-[2rem] sm:rounded-br-[2rem] shadow-lg
                transform hover:-translate-y-2
                transition-transform duration-300 ease-out w-full max-w-sm text-center"
            >
              <h2 className="text-[11px] sm:text-sm md:text-base font-bold mb-2 sm:mb-4 font-chakra">COMMUNITY REWARD</h2>
              <button
                className="px-2 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 font-chakra bg-[rgba(161,118,214,0.14)]
                  border border-white/30 text-gray-100 text-[9px] sm:text-sm md:text-base font-semibold
                  rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(109,87,14,0.49)]
                  hover:scale-105 transition-all duration-300 ease-out w-full sm:w-auto"
              >
                UNLIMITED STARDUST
              </button>
            </div>
          </motion.div>

          {/* 5. COMPLETE MULTIPLE QUESTS (Restored to Column 4, Shifted Right slightly) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="flex items-center justify-center lg:items-start lg:justify-start lg:translate-x-0"
          >
            <div className="bg-[linear-gradient(203.64deg,rgba(24,24,24,0.5)_9.95%,rgba(0,74,173,0.5)_50.53%,rgba(25,24,24,0.5)_90.05%)]
                text-white p-3 sm:p-6 md:p-8 rounded-tl-[1.25rem] rounded-br-[1.25rem] sm:rounded-tl-[2rem] sm:rounded-br-[2rem] shadow-lg
                transform hover:-translate-y-2
                transition-transform duration-300 ease-out w-full max-w-sm text-center"
            >
              <h2 className="text-[11px] sm:text-sm md:text-base font-bold mb-2 sm:mb-4 font-chakra">MULTIPLE QUESTS</h2>
              <button
                className="px-2 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 font-chakra bg-[rgba(161,118,214,0.14)]
                  border border-white/30 text-gray-100 text-[9px] sm:text-sm md:text-base font-semibold
                  rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(109,87,14,0.49)]
                  hover:scale-105 transition-all duration-300 ease-out w-full sm:w-auto"
              >
                MULTIPLE STARDUST
              </button>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}