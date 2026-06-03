"use client"
import React, { Suspense } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NoteCard from './dashboard/note-card';
import QuestTable from './dashboard/quest-table';
import { useTasks } from '@/hooks/useTasks';
import { TaskSkeleton } from './dashboard/taskSkeleton';


const TaskQuest = () => {
  const { data, isLoading } = useTasks();
  
  if (isLoading) {
    return <TaskSkeleton />;
  }
  return (
     <div className="w-full mx-auto max-w-4xl mt-10">
        <Card className='mx-auto w-full bg-black/50 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl text-gray-200'>
          <CardHeader className='w-full mx-auto border-b border-white/5'>
            <NoteCard />
          </CardHeader>
          <CardContent className="pt-6">
            <QuestTable data={data}/>        
          </CardContent>
        </Card>
     </div>
  )
}

export default TaskQuest