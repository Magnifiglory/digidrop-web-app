'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PolicySection = {
  id: string;
  title: string;
  content: string[];
};

const SECTIONS: PolicySection[] = [
  {
    id: 'intro',
    title: '1. Introduction',
    content: [
      'In the quiet vastness of Digiverse, trust is everything. We built this platform with your privacy front and center.',
      'Your journey here is protected by design — quietly, deliberately, and with restraint.',
    ],
  },
  {
    id: 'collection',
    title: '2. Data Collection',
    content: [
      'We track your public wallet address and nothing more.',
      'Digidrops does not collect your name, phone number, physical address, or any financial identifiers. We do not need them.',
    ],
  },
  {
    id: 'usage',
    title: '3. Usage',
    content: [
      'Your wallet address is used only to:',
      '• Confirm you own a Digidrops Passport before granting dashboard access',
      '• Track your Stardust as a non-monetary participation score',
      '• Record quest completions for leaderboard ranking',
    ],
  },
  {
    id: 'protection',
    title: '4. Protection',
    content: [
      'Your data is protected by blockchain transparency and strict internal access controls.',
      'Digidrops does not sell, rent, or share your data with anyone — ever.',
    ],
  },
  {
    id: 'command',
    title: '5. Your Command',
    content: [
      'You can disconnect your wallet at any time. Your access ends immediately.',
      'For any questions or concerns, contact us through official Digidrops channels.',
    ],
  },
];

export default function DashboardPrivacyPolicy() {
  const [activeId, setActiveId] = useState<string>('intro');

  useEffect(() => {
    const handleScroll = () => {
      const offsetThreshold = 150;
      
      const offsets = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        return { 
          id: s.id, 
          offset: el ? el.getBoundingClientRect().top : 0 
        };
      });

      const current = offsets.findLast((s) => s.offset <= offsetThreshold);
      if (current) setActiveId(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className='relative min-h-screen w-full scroll-smooth bg-[#0B0B0B] text-white bg-[url("/assets/bg/terms%20bg.webp")] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden'>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      <div className="container mx-auto px-6 py-12 lg:px-12 relative z-10">
        {/* BACK TO FLIGHT DECK BUTTON */}
        <div className="mb-10">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-purple-500/30 bg-purple-950/20 text-purple-300 hover:bg-purple-900/40 hover:text-white font-chakra text-sm font-semibold tracking-wider rounded-xl transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              RETURN TO FLIGHT DECK
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* ===== SIDEBAR NAV ===== */}
          <aside className="mb-12 md:mb-0 md:w-1/4">
            <nav className="sticky top-28">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                Contents
              </h3>
              <ul className="space-y-4 border-l-2 border-white/10 pl-6">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section.id)?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                        setActiveId(section.id);
                      }}
                      className={`block text-lg transition-all duration-300 ${
                        activeId === section.id
                          ? 'translate-x-2 font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* ===== MAIN CONTENT ===== */}
          <div className="md:w-3/4 md:pl-20">
            <div className="mb-16">
              <h1 className="mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl font-chakra">
                Privacy Policy
              </h1>
              <p className="text-xl font-medium text-gray-300">
                Guardians of Your Cosmic Privacy
              </p>
            </div>

            <div className="space-y-24">
              {SECTIONS.map((section) => (
                <article 
                  key={section.id} 
                  id={section.id} 
                  className="scroll-mt-32 border-b border-white/10 pb-12 last:border-0"
                >
                  <h2 className="mb-6 text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl font-chakra">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, idx) => {
                      if (paragraph.startsWith('•')) {
                        return (
                          <div key={idx} className="flex items-start gap-3 text-base leading-relaxed text-gray-300 sm:text-lg pl-4">
                            <span className="text-blue-400 font-bold mt-1.5 text-xs">●</span>
                            <span>{paragraph.replace(/^•\s*/, '')}</span>
                          </div>
                        );
                      }
                      return (
                        <p
                          key={idx}
                          className="text-base leading-relaxed text-gray-300 sm:text-lg"
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
