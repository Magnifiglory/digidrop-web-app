"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Star, Zap, Shield, Trophy, Rocket, Crown } from "lucide-react";
import PassActionButton from "../PassActionButton"; // Ensure this path is correct
import { DigiPass } from "@/types/response-type"; // Ensure this path matches your types

type Prop = {
  pass: DigiPass
}

// --- DYNAMIC THEME CONFIGURATION ---
// This helper function customizes the look based on the pass power/tier.
// It automatically switches colors and icons so you don't need hardcoded text.
const getPassTheme = (pass: DigiPass) => {
  const isGold = pass.pass_type?.toLowerCase() === 'gold' || pass.id === 'gold' || pass.point_power >= 4;
  const isWhite = pass.pass_type?.toLowerCase() === 'white' || pass.id === 'white' || pass.point_power === 2;

  if (isGold) {
    return {
      textColor: "text-amber-400",
      gradientText: "from-yellow-400 via-amber-400 to-yellow-500",
      glowColor: "from-yellow-600 to-amber-500",
      bgGlow: "bg-amber-500/20 shadow-[0_0_80px_rgba(245,158,11,0.25)]",
      borderColor: "group-hover:border-amber-500/40",
      
      perksTitle: `Gold Privileges`,
      statLabel: "ELITE STATUS",
      statDesc: "Full ecosystem access\nPriority Support",
      perks: [
        { label: "Governance Voting Rights", icon: <Crown size={20} /> },
        { label: "Stardust Multiplier Applied", icon: <Zap size={20} /> },
        { label: "VIP Discord Channel", icon: <Shield size={20} /> },
      ]
    };
  }

  if (isWhite) {
    return {
      textColor: "text-cyan-400",
      gradientText: "from-cyan-400 via-teal-400 to-blue-400",
      glowColor: "from-cyan-600 to-teal-500",
      bgGlow: "bg-cyan-500/10 shadow-[0_0_50px_rgba(6,182,212,0.15)]",
      borderColor: "group-hover:border-cyan-500/30",
      
      perksTitle: `White Privileges`,
      statLabel: "MEMBER STATUS",
      statDesc: "Community access\nDaily Missions",
      perks: [
        { label: "Regular Platform Access", icon: <Rocket size={20} /> },
        { label: "Community Badge", icon: <Trophy size={20} /> },
        { label: "Basic Voting Power", icon: <Check size={20} /> },
      ]
    };
  }

  // Black / default passport
  return {
    textColor: "text-purple-400",
    gradientText: "from-purple-400 via-pink-400 to-purple-600",
    glowColor: "from-purple-600 to-pink-500",
    bgGlow: "bg-purple-500/10 shadow-[0_0_50px_rgba(168,85,247,0.15)]",
    borderColor: "group-hover:border-purple-500/30",
    
    perksTitle: `Black Privileges`,
    statLabel: "MEMBER STATUS",
    statDesc: "Community access\nDaily Missions",
    perks: [
      { label: "Regular Platform Access", icon: <Rocket size={20} /> },
      { label: "Community Badge", icon: <Trophy size={20} /> },
      { label: "Basic Voting Power", icon: <Check size={20} /> },
    ]
  };
};

export default function PassDetailClient({ pass }: Prop) {
  const theme = getPassTheme(pass);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    setRotate({
      x: -(y / (box.height / 2)) * 12,
      y: (x / (box.width / 2)) * 12
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  // Reusable CSS class for the side glass panels (obsidian black with 50% opacity)
  const glassPanelClass = `relative flex flex-col justify-between w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[230px] xl:max-w-[260px] mx-auto h-full min-h-[280px] lg:min-h-[340px] xl:min-h-[380px] bg-black/50 border border-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 lg:p-4 xl:p-5 shadow-2xl overflow-hidden group ${theme.borderColor} transition-all duration-300`;

  // Custom class for the center card to maximize available space for the passport visual (zero padding, flush fit)
  const centerCardClass = `relative flex flex-col justify-center items-center w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[230px] xl:max-w-[260px] mx-auto h-full min-h-[280px] lg:min-h-[340px] xl:min-h-[380px] bg-black/50 border border-white/10 backdrop-blur-md rounded-2xl p-0 shadow-2xl overflow-hidden group ${theme.borderColor} transition-all duration-300`;

  return (
    <div className='relative w-full min-h-screen bg-[url("/assets/bg/mint%20pass%20bg.webp")] bg-cover bg-fixed bg-center text-white selection:bg-brandColor/30 flex flex-col justify-between py-6 sm:py-10 lg:py-8 xl:py-10 overflow-hidden'>
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Background Noise Texture for cinematic feel */}
      <div className="fixed inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-10"></div>

      <div className='relative container mx-auto flex flex-col items-center flex-grow justify-center px-4 z-10'>
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-6 lg:mb-4 xl:mb-6 space-y-1">
          {/* Main Title */}
          <h1 className='text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold font-chakra uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-lg'>
            {pass.name}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-gray-400 font-medium tracking-wide">
             Mint your <span className={`font-bold ${theme.textColor}`}>Soul-Bound</span> Access Pass to the Digiverse
          </p>
        </div>

        {/* --- MAIN CONTENT GRID (3 Columns: 3 + 6 + 3 = 12 Columns - Completely Balanced) --- */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-6xl items-stretch mb-6 lg:mb-4 xl:mb-6'>
          
          {/* 1. LEFT PANEL: Stats & Multiplier (col-span-4) */}
          <div className='lg:col-span-4 order-3 lg:order-1'>
            <div className={glassPanelClass}>
              <div>
                <div className="text-gray-400 text-[10px] lg:text-[9px] xl:text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-center">Passport Specifications</div>
                
                <div className="flex flex-col items-center mb-2">
                  {/* Huge Number with Gradient */}
                  <span className={`text-5xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b ${theme.gradientText} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                    {pass.point_power}x
                  </span>
                  <span className={`text-base lg:text-xs xl:text-base font-bold tracking-widest mt-0.5 uppercase ${theme.textColor} opacity-80`}>Multiplier</span>
                </div>

                {/* Animated Stars based on power level */}
                <div className="flex gap-1 justify-center mb-4">
                  {Array.from({ length: Math.min(pass.point_power, 5) }).map((_, i) => (
                    <Star key={i} size={12} className={`${theme.textColor} fill-current animate-pulse`} style={{animationDelay: `${i * 200}ms`}} />
                  ))}
                </div>

                {/* SaaS Metrics Table */}
                <div className="space-y-1.5 border-t border-white/5 pt-3 text-[11px] lg:text-[10px] xl:text-[11px] font-chakra">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tier Status:</span>
                    <span className={`font-bold ${theme.textColor}`}>{theme.statLabel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ecosystem Power:</span>
                    <span className="text-gray-200 font-medium">{pass.point_power}x Stardust</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Network Standard:</span>
                    <span className="text-gray-200 font-medium">BSC (BEP20)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Transferability:</span>
                    <span className="text-red-400 font-medium">Locked (SBT)</span>
                  </div>
                </div>
              </div>

              <div className="text-center text-[10px] text-gray-400 font-medium border-t border-white/5 pt-3 mt-3 whitespace-pre-line leading-relaxed">
                {theme.statDesc}
              </div>
            </div>
          </div>

          {/* 2. CENTER PANEL: Hero Card Image (col-span-4) */}
          <div className='lg:col-span-4 order-1 lg:order-2'>
            <div className={`${centerCardClass} relative`}>
              {/* Background Glow Halo */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] ${theme.bgGlow} rounded-full blur-[60px] pointer-events-none`}></div>
              
              {/* 3D Floating Image Effect */}
              <div 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                  transition: rotate.x === 0 ? "all 0.5s ease" : "none"
                }}
                className="relative z-10 cursor-pointer flex justify-center w-full h-full"
              >
                <Image 
                  src={pass.card} 
                  alt={pass.name} 
                  width={294} 
                  height={460}
                  className="w-full h-full object-cover shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>
              
              {/* Floating Price Tag (Positioned absolutely on top of the image) */}
              <div className="absolute bottom-4 z-20 py-1 px-5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 hover:border-white/30 transition-colors flex items-center gap-2 text-xs shadow-lg">
                <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase text-white/60">Ecosystem Price</span>
                <span className={`text-sm font-bold ${theme.textColor}`}>${pass.usd_price}</span>
              </div>
            </div>
          </div>

          {/* 3. RIGHT PANEL: Privileges & Mint (col-span-4) */}
          <div className='lg:col-span-4 order-2 lg:order-3'>
            <div className={glassPanelClass}>
              <div>
                <div className="text-gray-400 text-[10px] lg:text-[9px] xl:text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-center">Ecosystem Privileges</div>
                
                {/* Dynamic Perks list with premium icons */}
                <div className="space-y-2 mb-4">
                  {theme.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                      <div className={`flex-shrink-0 ${theme.textColor}`}>{perk.icon}</div>
                      <span className="text-[11px] lg:text-[10px] xl:text-[11px] text-gray-200 font-medium tracking-wide">{perk.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action and Price Summary */}
              <div className="border-t border-white/5 pt-3 space-y-3">
                <div className="flex justify-between items-center px-1">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[9px] uppercase tracking-wider">Payment Est:</span>
                    <span className="text-[11px] lg:text-[10px] xl:text-[11px] text-gray-300 font-semibold">~{pass.bnb_price} BNB</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-gray-500 text-[9px] uppercase tracking-wider">USD Value:</span>
                    <span className="text-sm text-white font-bold">${pass.usd_price}</span>
                  </div>
                </div>

                <div className="w-full relative group">
                  <div className="relative">
                    <PassActionButton pass={pass} />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Footer Disclaimer */}
      <footer className="w-full px-4 mt-auto relative z-10">
        <div className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-md">
          <p className="text-center text-[10px] leading-relaxed text-gray-400 sm:text-xs">
            SB Passports are non-transferable community credentials used to access Digiverse. They hold no external monetary value.
          </p>
        </div>
      </footer>

    </div>
  );
}