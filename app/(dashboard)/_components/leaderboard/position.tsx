"use client"
import React from 'react'
import { useProfileStats } from '@/hooks/useGetProfileStats'
import { Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const Position = () => {
  const { data, isLoading } = useProfileStats()

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between w-full border-b border-white/10 pb-4 text-white animate-pulse">
        <div className="flex items-center gap-3">
          <div className="h-8 w-40 sm:h-9 sm:w-48 bg-white/10 rounded-lg"></div>
          <div className="h-5 w-16 bg-white/10 rounded-full"></div>
        </div>
        <div className="h-8 w-52 sm:h-9 sm:w-56 bg-white/10 rounded-full"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between w-full border-b border-white/10 pb-4 text-white font-chakra">
      {/* Title (hidden on mobile) */}
      <div className="hidden sm:flex items-center gap-3">
        <h1 className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-md uppercase">
          Leaderboard
        </h1>
      </div>

      {/* Obsidian Black Stats Badge (centered on mobile) */}
      <div className="flex items-center justify-center w-full sm:w-auto">
        <motion.div 
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
          className="inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md shadow-lg text-purple-400 font-bold text-xs sm:text-sm cursor-pointer hover:border-purple-500/20"
        >
          <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0" />
          <span>
            MY STANDING: <span className="text-white font-mono text-xs sm:text-base">#{data?.rank ?? '-'}</span>
          </span>
          <span className="text-white/20">|</span>
          <span>
            STARDUST: <span className="text-white font-mono text-xs sm:text-base">{data?.point ?? 0}</span>
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default Position

