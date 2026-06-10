import { CircleAlert } from 'lucide-react'
import React from 'react'

const NoteCard = () => {
  return (
    <div className='w-full flex items-center gap-3 border border-yellow-500/10 bg-yellow-500/5 rounded-xl px-4 py-2.5 backdrop-blur-sm'>
        <CircleAlert size={18} className="text-yellow-500 shrink-0"/>
        <p className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-400 font-chakra leading-relaxed">
            NOTE: IT TAKES 1 HOUR DURING PEAK DEMAND TIME FOR THE POINTS TO BE MADE AVAILABLE FOR CLAIMING ON CERTAIN QUESTS.
        </p>
    </div>
  )
}

export default NoteCard