"use client"

import { Skeleton } from "@/components/ui/skeleton"

const PointBox = ({
  point,
  isLoading,
}: {
  point: number
  isLoading: boolean
}) => {
  if (isLoading) return <Skeleton className="h-20 w-40" />

  return (
    <div className="flex w-40 flex-col items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4 text-white hover:border-[#CB6CE6]/30 transition-all duration-300 shadow-[0_0_20px_rgba(203,108,230,0.1)] animate-pulse-glow">
      <p className="text-[10px] uppercase tracking-wider text-[#CB6CE6] font-bold">Claim Point</p>
      <p className="text-2xl font-extrabold text-white font-chakra mt-1">{point}</p>
    </div>
  )
}

export default PointBox
