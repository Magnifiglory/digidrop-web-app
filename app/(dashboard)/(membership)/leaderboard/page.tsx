'use client'

import React from 'react'
import BoardTable from '../../_components/leaderboard/board-table'
import Link from 'next/link'
import Position from '../../_components/leaderboard/position'
const LeaderBoard = () => {
  return (
    <div 
      style={{ backgroundImage: "url('/assets/bg/leaderboard%20bg.webp')" }}
      className="w-full min-h-screen relative py-6 bg-[#0B0B0B] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden px-4"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-black/65 pointer-events-none" />

      <div className='container max-w-5xl mx-auto pt-6 relative z-10'>
        {/* Sub-Navigation Links */}
        <div className="flex justify-between items-center w-full mb-6">
          <Link href="/dashboard" className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl text-[10px] sm:text-xs uppercase font-extrabold bg-black/50 border border-white/10 hover:border-white/20 transition-all text-white font-chakra backdrop-blur-md">
            ← Dashboard
          </Link>
          <Link href="/referrals" className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl text-[10px] sm:text-xs uppercase font-extrabold bg-black/50 border border-white/10 hover:border-white/20 transition-all text-white font-chakra backdrop-blur-md">
            Referrals →
          </Link>
        </div>

        <Position />

        <div className='w-full mt-6'>
          <BoardTable />
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard