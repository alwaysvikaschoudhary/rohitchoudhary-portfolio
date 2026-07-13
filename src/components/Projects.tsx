import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import { ExternalLink, Eye, Smartphone, LayoutGrid, Heart, BookOpen } from 'lucide-react';

const figmaAsset1 = new URL('../assets/images/assets/figma_asset_1.png', import.meta.url).href;

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export default function Projects({ onOpenCaseStudy }: ProjectsProps) {
  const [filter, setFilter] = useState<'All' | 'App' | 'Graphics'>('All');
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    'proj-vitaflow': 24,
    'proj-mealmitra': 18,
    'proj-narrativeposters': 15,
  });
  const [likedList, setLikedList] = useState<{ [key: string]: boolean }>({});

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedList[id]) {
      setLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setLikedList(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setLikedList(prev => ({ ...prev, [id]: true }));
    }
  };

  const filteredProjects = projectsData.filter(
    (proj) => filter === 'All' || proj.category === filter
  );

  return (
    <section
      id="projects"
      className="py-24 bg-transparent text-black dark:text-[#F5F5F0] border-b border-white/10 dark:border-white/5 relative z-10 transition-colors duration-300"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left" id="proj-section-header">
            <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-neutral-510 dark:text-neutral-500 font-mono">
              PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tighter text-black dark:text-[#F5F5F0] mt-2 uppercase italic leading-none">
              Featured Projects
            </h2>
            <div className="h-[1px] w-24 bg-neutral-300 dark:bg-neutral-800 mt-5" />
          </div>

          {/* Tag Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 bg-white/15 dark:bg-black/25 backdrop-blur-md p-1 rounded-xl border border-white/40 dark:border-white/5 transition-colors">
            {[
              { id: 'All', label: 'All Projects', icon: LayoutGrid },
              { id: 'App', label: 'Mobile UX', icon: Smartphone },
              { id: 'Graphics', label: 'Visual Art', icon: Eye }
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] uppercase tracking-widest font-black rounded-lg transition-all duration-300 cursor-pointer ${
                    filter === tab.id
                      ? 'bg-white dark:bg-[#1A1A1A] text-black dark:text-[#F5F5F0] border border-neutral-250 dark:border-neutral-800 shadow-sm'
                      : 'text-neutral-550 dark:text-neutral-500 hover:text-black dark:hover:text-neutral-300'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" id="projects-bento-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const hasLiked = likedList[proj.id];
              return (
                <motion.div
                  key={proj.id}
                  id={`project-card-${proj.id}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onOpenCaseStudy(proj)}
                  className="group cursor-pointer flex flex-col glass-card overflow-hidden shadow-md hover:border-pink-500/50 dark:hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300"
                >
                  
                  {/* Styled Project Thumbnail (Direct integration of figma asset covers) */}
                  <div className="relative h-48 w-full overflow-hidden flex items-center justify-center border-b border-neutral-150 dark:border-neutral-900" id={`thumbnail-container-${proj.id}`}>
                    {proj.id === 'proj-narrativeposters' ? (
                      <div className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 select-none">
                        <svg className="w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#fc005c" stopOpacity={0.9} />
                              <stop offset="50%" stopColor="#1e054d" stopOpacity={0.95} />
                              <stop offset="100%" stopColor="#0a0a0f" stopOpacity={1} />
                            </linearGradient>
                            <linearGradient id="rainbowLeak" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ff0055" stopOpacity={0.8} />
                              <stop offset="25%" stopColor="#ff9a00" stopOpacity={0.65} />
                              <stop offset="50%" stopColor="#d4ff00" stopOpacity={0.5} />
                              <stop offset="75%" stopColor="#00ffe0" stopOpacity={0.65} />
                              <stop offset="100%" stopColor="#9d00ff" stopOpacity={0.8} />
                            </linearGradient>
                            <radialGradient id="prismLight" cx="30%" cy="50%" r="60%">
                              <stop offset="0%" stopColor="#ffe600" stopOpacity={0.85} />
                              <stop offset="45%" stopColor="#ff007f" stopOpacity={0.45} />
                              <stop offset="100%" stopColor="#0c0c0e" stopOpacity={0} />
                            </radialGradient>
                            <filter id="blurPrism" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur stdDeviation="40" />
                            </filter>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="8" result="blur" />
                              <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <linearGradient id="frostBg" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#04122b" />
                              <stop offset="50%" stopColor="#09254f" />
                              <stop offset="100%" stopColor="#123f6d" />
                            </linearGradient>
                            <radialGradient id="frostGlow" cx="70%" cy="30%" r="50%">
                              <stop offset="0%" stopColor="#80dfff" stopOpacity={0.45} />
                              <stop offset="100%" stopColor="#04122b" stopOpacity={0} />
                            </radialGradient>
                            <clipPath id="leftClip">
                              <rect x="0" y="0" width="262" height="450" />
                            </clipPath>
                            <clipPath id="rightClip">
                              <rect x="538" y="0" width="262" height="450" />
                            </clipPath>
                          </defs>

                          {/* Background Base */}
                          <rect width="800" height="450" fill="#0c0c0e" />

                          {/* Left Neon Section */}
                          <g clipPath="url(#leftClip)">
                            <rect x="0" y="0" width="266" height="450" fill="url(#neonGradient1)" />
                            <rect x="35" y="-50" width="15" height="550" fill="#ff0055" filter="url(#glow)" transform="rotate(-5, 40, 225)" opacity={0.8} />
                            <rect x="175" y="-50" width="10" height="550" fill="#9d00ff" filter="url(#glow)" transform="rotate(2, 180, 225)" opacity={0.7} />
                            <line x1="110" y1="0" x2="90" y2="450" stroke="#ff00de" strokeWidth={4} filter="url(#glow)" opacity={0.9} />
                          </g>

                          {/* Right Frost Section */}
                          <g clipPath="url(#rightClip)">
                            <rect x="534" y="0" width="266" height="450" fill="url(#frostBg)" />
                            <rect x="534" y="0" width="266" height="450" fill="url(#frostGlow)" />
                            <circle cx="610" cy="140" r="45" fill="#ffffff" opacity={0.08} filter="url(#glow)" />
                            <circle cx="710" cy="90" r="55" fill="#e0f7ff" opacity={0.12} filter="url(#glow)" />
                            <circle cx="580" cy="220" r="4" fill="#ffffff" opacity={0.5} />
                            <circle cx="750" cy="310" r="3" fill="#bef3ff" opacity={0.6} />
                            <circle cx="670" cy="180" r="5" fill="#ffffff" opacity={0.4} />
                            <circle cx="640" cy="350" r="2" fill="#ffffff" opacity={0.3} />
                            <circle cx="700" cy="260" r="3" fill="#bef3ff" opacity={0.7} />
                            <circle cx="740" cy="190" r="2" fill="#ffffff" opacity={0.5} />
                            <circle cx="560" cy="110" r="3" fill="#ffffff" opacity={0.6} />
                            <line x1="534" y1="100" x2="680" y2="0" stroke="#ffffff" strokeWidth="0.5" opacity={0.3} />
                            <line x1="620" y1="450" x2="800" y2="300" stroke="#ffffff" strokeWidth="0.5" opacity={0.25} />
                            <line x1="720" y1="450" x2="800" y2="380" stroke="#ffffff" strokeWidth="0.5" opacity={0.4} />
                          </g>

                          {/* Middle Section: Torn Paper with rainbow leakage and centered typography */}
                          <g>
                            <rect x="250" y="0" width="300" height="450" fill="#0d0d0e" />
                            <rect x="220" y="0" width="220" height="450" fill="url(#rainbowLeak)" filter="url(#blurPrism)" opacity={0.6} />
                            <circle cx="340" cy="225" r="240" fill="url(#prismLight)" opacity={0.8} />

                            {/* Left Tear */}
                            <path d="M 264,0 L 261,30 L 268,60 L 260,100 L 265,130 L 258,170 L 267,210 L 261,250 L 266,290 L 259,330 L 268,370 L 261,410 L 265,450 L 250,450 L 250,0 Z" fill="#050505" opacity={0.96} />
                            <path d="M 264,0 L 261,30 L 268,60 L 260,100 L 265,130 L 258,170 L 267,210 L 261,250 L 266,290 L 259,330 L 268,370 L 261,410 L 265,450" fill="none" stroke="#ffffff" strokeWidth={1.5} opacity={0.4} />

                            {/* Right Tear */}
                            <path d="M 536,0 L 539,40 L 532,80 L 540,120 L 533,160 L 538,200 L 531,240 L 540,280 L 533,320 L 539,360 L 531,400 L 537,450 L 550,450 L 550,0 Z" fill="#040d1c" opacity={0.96} />
                            <path d="M 536,0 L 539,40 L 532,80 L 540,120 L 533,160 L 538,200 L 531,240 L 540,280 L 533,320 L 539,360 L 531,400 L 537,450" fill="none" stroke="#bef1ff" strokeWidth={1.5} opacity={0.3} />
                          </g>

                          {/* Typography Overlay */}
                          <g filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.65))">
                            <text x="400" y="195" fontFamily="'Inter', system-ui, sans-serif" fontWeight={900} fontSize={35} fill="#ffffff" textAnchor="middle" letterSpacing="-0.03em">
                              Visual Narrative
                            </text>
                            <text x="400" y="245" fontFamily="'Inter', system-ui, sans-serif" fontWeight={900} fontSize={35} fill="#ffffff" textAnchor="middle" letterSpacing="-0.03em">
                              {"& Key Art Design"}
                            </text>
                            
                            <line x1="330" y1="285" x2="470" y2="285" stroke="rgba(255,255,255,0.22)" strokeWidth={1} />

                            <text x="400" y="315" fontFamily="'JetBrains Mono', 'Fira Code', monospace" fontSize={11} fill="rgba(255,255,255,0.72)" textAnchor="middle" letterSpacing="0.22em" fontWeight={500}>
                              A PORTFOLIO OF SELECTED WORKS
                            </text>
                          </g>
                        </svg>
                      </div>
                    ) : proj.id === 'proj-mealmitra' ? (
                      <div className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 select-none">
                        <svg className="w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2500/svg">
                          <defs>
                            <linearGradient id="mealBg" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#140a05" />
                              <stop offset="50%" stopColor="#25120a" />
                              <stop offset="100%" stopColor="#120603" />
                            </linearGradient>
                            <radialGradient id="orangeGlow" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="#ff5a19" stopOpacity={0.3} />
                              <stop offset="100%" stopColor="#140a05" stopOpacity={0} />
                            </radialGradient>
                            <linearGradient id="buttonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#ff5e1a" />
                              <stop offset="100%" stopColor="#e03e00" />
                            </linearGradient>
                            <linearGradient id="curryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ffb300" />
                              <stop offset="100%" stopColor="#ff7000" />
                            </linearGradient>
                            <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#fffcf5" />
                              <stop offset="100%" stopColor="#fee9d6" />
                            </linearGradient>
                            <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.45" />
                            </filter>
                          </defs>

                          {/* Base dark warm canvas */}
                          <rect width="800" height="450" fill="url(#mealBg)" />
                          <circle cx="400" cy="225" r="300" fill="url(#orangeGlow)" />

                          {/* Top Floating Badge */}
                          <g transform="translate(400, 30)">
                            <rect x="-100" y="0" width="200" height="24" rx="12" fill="rgba(255, 94, 26, 0.12)" stroke="rgba(255, 94, 26, 0.3)" strokeWidth="1" />
                            <text x="0" y="15" fontFamily="'Inter', system-ui, sans-serif" fontWeight={800} fontSize={9} fill="#ff7a45" textAnchor="middle" letterSpacing="0.1em">
                              #1 TIFFIN SERVICE IN JAIPUR
                            </text>
                          </g>

                          {/* Left Phone: Onboarding/Splash Screen */}
                          <g transform="translate(140, 50)" filter="url(#softShadow)">
                            {/* iPhone Frame */}
                            <rect width="210" height="420" rx="36" fill="#18181b" stroke="#37373a" strokeWidth="4" />
                            {/* Inner Screen */}
                            <rect x="6" y="6" width="198" height="408" rx="30" fill="#ffffff" />
                            {/* Dynamic Island */}
                            <rect x="65" y="15" width="80" height="16" rx="8" fill="#18181b" />
                            
                            {/* Logo and Brand Title */}
                            <g transform="translate(105, 150)">
                              {/* Tiffin box cooker graphic */}
                              <circle cx="0" cy="-40" r="42" fill="#fff5ec" />
                              
                              {/* Tiffin graphic */}
                              <rect x="-14" y="-56" width="28" height="34" rx="5" fill="#ff5e1a" />
                              <rect x="-12" y="-46" width="24" height="2" fill="#ffffff" opacity={0.5} />
                              <rect x="-12" y="-36" width="24" height="2" fill="#ffffff" opacity={0.5} />
                              
                              {/* Metal handle fork/spoon */}
                              <path d="M -16 -48 L -16 -24 A 18 18 0 0 0 16 -24 L 16 -48" fill="none" stroke="#e03e00" strokeWidth="1.8" />
                              <circle cx="0" cy="-62" r="6" fill="none" stroke="#e03e00" strokeWidth="2" />
                              
                              <text y="24" fontFamily="'Inter', system-ui, sans-serif" fontWeight={950} fontSize="26" fill="#1c1917" textAnchor="middle" letterSpacing="-0.04em">
                                Meal<tspan fill="#ff5e1a">Mitra</tspan>
                              </text>
                              <text y="42" fontFamily="'Inter', system-ui, sans-serif" fontWeight={600} fontSize="9" fill="#ff7a45" textAnchor="middle" letterSpacing="0.02em">
                                Your Daily Food Companion.
                              </text>
                            </g>

                            {/* Jaipur #1 slogan overlay */}
                            <text x="105" y="275" fontFamily="'Inter', system-ui, sans-serif" fontWeight={500} fontSize="8.5" fill="#c3c3c3" textAnchor="middle">
                              Jaipur's #1 Tiffin Delivery App
                            </text>

                            {/* Button indicator */}
                            <g transform="translate(25, 330)">
                              <rect width="160" height="34" rx="17" fill="url(#buttonGrad)" />
                              <text x="80" y="21" fontFamily="'Inter', system-ui, sans-serif" fontWeight={800} fontSize="11" fill="#ffffff" textAnchor="middle">
                                Get Started
                              </text>
                            </g>
                          </g>

                          {/* Right Phone: Interactive Dish & Map Detail Screen */}
                          <g transform="translate(450, 40)" filter="url(#softShadow)">
                            {/* iPhone Frame */}
                            <rect width="210" height="420" rx="36" fill="#18181b" stroke="#37373a" strokeWidth="4" />
                            {/* Inner Screen */}
                            <rect x="6" y="6" width="198" height="408" rx="30" fill="#fafafa" />
                            {/* Dynamic Island */}
                            <rect x="65" y="15" width="80" height="16" rx="8" fill="#18181b" />

                            {/* Top Address & Header */}
                            <g transform="translate(20, 48)">
                              <text x="4" y="0" fontFamily="'Inter', system-ui, sans-serif" fontWeight={800} fontSize="8" fill="#ff5e1a" letterSpacing="0.05em">
                                VIT, JAIPUR
                              </text>
                              <text x="4" y="10" fontFamily="'Inter', system-ui, sans-serif" fontWeight={500} fontSize="7" fill="#78716c">
                                Select location or search...
                              </text>
                              
                              {/* Search Bar mockup */}
                              <rect x="0" y="18" width="170" height="20" rx="6" fill="#f0edf0" />
                              <text x="12" y="31" fontFamily="'Inter', system-ui, sans-serif" fontWeight={500} fontSize="7.5" fill="#a09da0">
                                Try 'Home chef dal thali...'
                              </text>
                            </g>

                            {/* Quick horizontal categories */}
                            <g transform="translate(20, 102)">
                              <rect width="40" height="14" rx="5" fill="#ffeedd" stroke="#ff5e1a" strokeWidth="0.5" />
                              <text x="20" y="10" fontFamily="'Inter', system-ui, sans-serif" fontWeight={700} fontSize="6.5" fill="#ff5e1a" textAnchor="middle">
                                Rajasthani
                              </text>

                              <rect x="46" width="36" height="14" rx="5" fill="#ffffff" stroke="#e0dedd" strokeWidth="0.5" />
                              <text x="64" y="10" fontFamily="'Inter', system-ui, sans-serif" fontWeight={500} fontSize="6.5" fill="#78716c" textAnchor="middle">
                                North
                              </text>

                              <rect x="88" width="36" height="14" rx="5" fill="#ffffff" stroke="#e0dedd" strokeWidth="0.5" />
                              <text x="106" y="10" fontFamily="'Inter', system-ui, sans-serif" fontWeight={500} fontSize="6.5" fill="#78716c" textAnchor="middle">
                                Gujarati
                              </text>

                              <rect x="130" width="36" height="14" rx="5" fill="#ffffff" stroke="#e0dedd" strokeWidth="0.5" />
                              <text x="148" y="10" fontFamily="'Inter', system-ui, sans-serif" fontWeight={500} fontSize="6.5" fill="#78716c" textAnchor="middle">
                                Punjabi
                              </text>
                            </g>

                            {/* Food Feed Card */}
                            <g transform="translate(18, 128)">
                              <rect width="174" height="210" rx="14" fill="#ffffff" stroke="#f0eded" strokeWidth="1" />
                              
                              {/* Food Image Banner inside Card */}
                              <rect x="4" y="4" width="166" height="96" rx="10" fill="url(#bannerGrad)" />
                              
                              {/* Curry Bowl artwork */}
                              <circle cx="87" cy="52" r="34" fill="url(#curryGradient)" />
                              <circle cx="87" cy="52" r="30" fill="#f59e0b" />
                              {/* Garnish swirls */}
                              <path d="M 80 44 Q 85 41 90 46" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
                              <path d="M 83 58 Q 88 61 93 54" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
                              <circle cx="94" cy="46" r="2" fill="#ef4444" />
                              
                              {/* Dish Info */}
                              <text x="12" y="118" fontFamily="'Inter', system-ui, sans-serif" fontWeight={900} fontSize="12" fill="#1c1917">
                                Traditional Dal Tadka
                              </text>
                              <text x="12" y="130" fontFamily="'Inter', system-ui, sans-serif" fontWeight={500} fontSize="8" fill="#a8a29e">
                                Prepared by Radha Devi (Verified Chef)
                              </text>

                              <text x="12" y="152" fontFamily="'Inter', system-ui, sans-serif" fontWeight={800} fontSize="9.5" fill="#ff5e1a">
                                ₹140 <tspan fontWeight={450} fill="#7c7c7c" fontSize="8">/ meal</tspan>
                              </text>

                              {/* Rating & reviews / Badges */}
                              <rect x="122" y="142" width="40" height="12" rx="4" fill="#f0fff4" stroke="#86efac" strokeWidth="0.5" />
                              <text x="142" y="151" fontFamily="'Inter', system-ui, sans-serif" fontWeight={750} fontSize="6.5" fill="#166534" textAnchor="middle">
                                4.7 ★
                              </text>

                              {/* Action buttons inside card */}
                              <g transform="translate(10, 172)">
                                <rect width="72" height="24" rx="8" fill="#ffffff" stroke="#ff5e1a" strokeWidth="1" />
                                <text x="36" y="15" fontFamily="'Inter', system-ui, sans-serif" fontWeight={800} fontSize="8" fill="#ff5e1a" textAnchor="middle">
                                  Subscribe
                                </text>

                                <rect x="80" width="74" height="24" rx="8" fill="url(#buttonGrad)" />
                                <text x="117" y="15" fontFamily="'Inter', system-ui, sans-serif" fontWeight={800} fontSize="8" fill="#ffffff" textAnchor="middle">
                                  Order Now
                                </text>
                              </g>
                            </g>

                            {/* Slogan */}
                            <text x="105" y="365" fontFamily="'Inter', system-ui, sans-serif" fontWeight={700} fontSize="8" fill="#ff5e1a" textAnchor="middle" letterSpacing="0.05em">
                              HEALTHY HOME FOOD
                            </text>
                          </g>

                          {/* Soft background floating icons / accents */}
                          <g opacity={0.6} transform="translate(390, 200)">
                            <line x1="-30" y1="-30" x2="30" y2="30" stroke="rgba(255, 94, 26, 0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
                            <circle cx="0" cy="0" r="14" fill="#1a0f0a" stroke="rgba(255, 94, 26, 0.3)" strokeWidth="1" />
                            <path d="M -4 -4 Q -2 -1 -4 2 Q -2 4 -4 7" fill="none" stroke="#ff5e1a" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M 0 -4 Q 2 -1 0 2 Q 2 4 0 7" fill="none" stroke="#ff5e1a" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M 4 -4 Q 6 -1 4 2 Q 6 4 4 7" fill="none" stroke="#ff5e1a" strokeWidth="1.2" strokeLinecap="round" />
                          </g>
                        </svg>
                      </div>
                    ) : (
                      <img
                        src={figmaAsset1}
                        alt={proj.title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    )}

                    {/* Hover Icons overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <div className="p-2.5 rounded bg-white text-black hover:scale-105 duration-200 transition-transform shadow-lg">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="p-2.5 rounded bg-white text-black hover:scale-105 duration-200 transition-transform shadow-lg">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Category Label */}
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-widest text-[#F5F5F0] bg-neutral-900 border border-neutral-800">
                      {proj.category}
                    </span>
                  </div>

                  {/* Info Panel below card thumbnail */}
                  <div className="p-6 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-black uppercase tracking-wider text-neutral-800 dark:text-neutral-200 group-hover:text-violet-650 dark:group-hover:text-white transition-colors">
                          {proj.title}
                        </h3>
                        {/* Behance Quick Link anchor - keeps links active & reachable */}
                        <a
                          href={proj.behanceUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()} // don't open app modal on exact link click
                          className="p-1 rounded text-neutral-500 hover:text-neutral-800 dark:hover:text-[#F5F5F0] transition-colors"
                          title="View Behance Case Study ↗"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      <p className="text-xs text-neutral-550 dark:text-neutral-400 font-medium mt-2 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    {/* Tags row */}
                    <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-900 flex flex-wrap gap-1.5 items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {proj.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-300 bg-white/30 dark:bg-white/5 border border-white/35 dark:border-white/5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Interaction Actions */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => handleLike(proj.id, e)}
                          className="flex items-center gap-1 text-[10px] font-mono text-neutral-500 hover:text-rose-500 transition-colors py-1 px-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 transition-all ${
                              hasLiked ? 'text-rose-500 fill-rose-500 scale-110' : 'text-neutral-500'
                            }`}
                          />
                          <span>{likes[proj.id]}</span>
                        </button>
                      </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </motion.div>
    </section>
  );
}
