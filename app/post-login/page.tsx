'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/useUserProfile';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PostLogin() {
  const router = useRouter();
  const { setProfile } = useUserStore();
  const [statusMessage, setStatusMessage] = useState('Initializing secure connection...');

  useEffect(() => {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const runAuthentication = async () => {
      await delay(500);
      setStatusMessage('Wallet signature verified successfully');
      await delay(600);
      setStatusMessage('Checking passport credentials...');
      await delay(600);

      try {
        const res = await fetch('/api/profile');
        if (!res.ok) throw new Error('Not authenticated');
        const profile = await res.json();
        
        setStatusMessage(profile.has_pass ? 'Soulbound Passport verified' : 'No passport detected');
        await delay(600);
        setStatusMessage('Loading profile and Stardust balances...');
        await delay(600);
        setStatusMessage('Redirecting to your dashboard...');
        await delay(800);

        setProfile(profile);
        router.replace(profile.has_pass ? '/dashboard' : '/mint-pass');

      } catch {
        setStatusMessage('Authentication failed. Redirecting to login...');
        await delay(1200);
        router.replace('/login');
      }
    };

    runAuthentication();
  }, [router, setProfile]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full overflow-hidden bg-[url('/assets/bg/dashboard%20bg.webp')] bg-cover bg-center bg-no-repeat px-4 font-chakra text-white selection:bg-brandColor/30 relative">
      
      {/* Background Noise Texture for cinematic feel */}
      <div className="fixed inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      
      {/* Highly compact obsidian black card with 50% opacity, optimized for mobile screen spaces */}
      <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] bg-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl flex flex-col items-center gap-4 text-center">
        
        {/* Slower, premium rotation of assets_icon/2.png as the custom loading animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center"
        >
          <Image
            src="/assets_icon/2.png"
            alt="Loading State"
            width={112}
            height={112}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>
        
        <div className="space-y-1 mt-1">
          <h2 className="text-sm font-bold uppercase tracking-wider text-purple-400 animate-pulse">
            Verifying Account
          </h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            Connecting to the Digiverse
          </p>
        </div>

        {/* Dynamic, clean status message */}
        <div className="h-5 flex items-center justify-center mt-1 border-t border-white/5 pt-3 w-full">
          <p className="text-xs text-blue-400 font-medium tracking-wide animate-fade-in transition-all">
            {statusMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
