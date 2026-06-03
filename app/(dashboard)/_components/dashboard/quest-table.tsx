"use client"
import { Play } from 'lucide-react'
import React from 'react'
import { useStartTask } from '@/hooks/useStartQuest';
import { useCompleteTask } from '@/hooks/useCompleteQuest';
import Task from './task-card';
import { TaskResponse } from '@/types/response-type';




type QuestProp={
    data:TaskResponse[],
    
}
const QuestTable = ({data}: QuestProp) => {
  return (
    <div className="w-full font-chakra">
      {/* Desktop/Tablet Grid Header */}
      <div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-2.5 border-b border-white/5 text-xs font-bold uppercase tracking-wider text-gray-400 items-center">
        <div className="col-span-2 md:col-span-1 flex items-center">
          <img src="/assets_icon/9.webp" alt="Quest Icon" className="h-6 w-6 shrink-0 object-contain" />
        </div>
        <div className="col-span-6 md:col-span-7">Daily Quests</div>
        <div className="col-span-2 text-center">Points</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>

      {/* Grid Content */}
      <div className="divide-y divide-white/5">
        {!data || data.length === 0 ? (
          <div className="text-center py-6 text-gray-400 text-xs sm:text-sm">
            No tasks available
          </div>
        ) : (
          data.map((item) => <Task data={item} key={item.id} />)
        )}
      </div>
    </div>
  )
}

export default QuestTable