'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { DigiPass } from '@/types/response-type';
import { useUserStore } from '@/store/useUserProfile';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

type CardPassProp = {
    data: DigiPass
}


const MintPass = ({ data }: CardPassProp) => {
    const { profile } = useUserStore();
    const currentPassPower = profile?.current_pass_power ?? 0;
    const currentPassId = profile?.current_pass_id;
    const isCurrent = currentPassId === data.id;
    const isLocked = process.env.NODE_ENV !== 'development' && profile?.has_pass && data.point_power <= currentPassPower;
    const router = useRouter()
    
    const handleClick = () => {
        if (isLocked) return;
        router.push(`/mint-pass/${data.id}`);
    };

    // Determine neon glow colors and float parameters based on tier
    const getTierGlow = () => {
        if (data.point_power === 4) return "hover:shadow-[0_0_40px_rgba(245,158,11,0.45)] hover:border-yellow-500/40";
        if (data.point_power === 2) return "hover:shadow-[0_0_35px_rgba(6,182,212,0.35)] hover:border-cyan-500/30";
        return "hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:border-purple-500/30";
    };

    const getAmbientGlow = () => {
        if (data.point_power === 4) return "bg-yellow-500/10 group-hover:bg-yellow-500/25 blur-[35px]";
        if (data.point_power === 2) return "bg-cyan-500/5 group-hover:bg-cyan-500/20 blur-[30px]";
        return "bg-purple-500/5 group-hover:bg-purple-500/20 blur-[30px]";
    };

    const idAsNumber = typeof data.id === 'number' ? data.id : parseInt(String(data.id)) || 0;
    const floatDelay = (idAsNumber % 3) * 0.5;

    return (
        <motion.div 
            onClick={handleClick}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: [0, -10, 0] 
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
            transition={{
              opacity: { duration: 0.8 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: floatDelay
              }
            }}
             className={cn(
                // Mobile-First Layout & Font
                "relative flex flex-col items-center font-chakra transition-all duration-500 holo-card-hover",
                "w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[230px] xl:max-w-[260px] mx-auto", 
                "p-4 sm:p-6 lg:p-4 xl:p-5", 
                
                // Glassmorphism Aesthetic
                "bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-[24px] sm:rounded-[28px] holo-card-shine",
                
                // States & Animations
                isLocked && "cursor-not-allowed opacity-40 grayscale pointer-events-none",
                !isLocked && !isCurrent && cn("cursor-pointer hover:bg-white/[0.02] hover:-translate-y-2 active:scale-95", getTierGlow()),
                isCurrent && cn(
                    "border-white/40 bg-white/[0.05] shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-2",
                    getTierGlow()
                )
            )}
        >
            {/* Header: Name */}
            <h3 className="text-[10px] font-bold text-xs sm:text-sm lg:text-xs xl:text-sm tracking-widest text-white uppercase mb-4 sm:mb-6 lg:mb-3 xl:mb-4 text-center">
                {data.name}
            </h3>

            {/* Card Visual: Slanted/Floating Container */}
            <div className="relative w-full aspect-[2/3] mb-4 sm:mb-6 lg:mb-3 xl:mb-4 group flex justify-center items-center">
                {/* Background Glow Halo */}
                <div className={cn("absolute w-[80%] h-[80%] rounded-full transition-all duration-500 pointer-events-none", getAmbientGlow())} />
                <div className="relative h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <Image 
                        src={data.card} 
                        alt={data.name} 
                        fill
                        className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                        priority
                    />
                </div>
                
                {/* Status Indicator Icon */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 rounded-full">
                    <CheckCircle2 
                        className={cn(
                            "w-7 h-7 sm:w-9 sm:h-9 transition-all duration-300",
                            isCurrent ? "text-white scale-110" : "text-white/65"
                        )} 
                        strokeWidth={1.2}
                    />
                </div>
            </div>

            {/* Footer: Stardust & Price */}
            <div className="flex flex-col items-center gap-1 w-full">
                <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg tracking-widest">
                    <span className="text-white">x{data.point_power}</span>
                    <span className="uppercase">STARDUST</span>
                </div>
                
                <div className="text-zinc-500 text-xs sm:text-sm font-medium tracking-widest">
                    ~${data.usd_price} BNB
                </div>
            </div>

            {/* Subtle Active Glow */}
            {isCurrent && (
                <div className="absolute inset-0 rounded-[inherit] pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
            )}
        </motion.div>
    )
}

export default MintPass