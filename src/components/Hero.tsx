import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ArrowDown } from 'lucide-react';
import { portfolioOwner } from '../data';

const figmaProfile = new URL('../assets/images/assets/figma_asset_0.png', import.meta.url).href;

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

export default function Hero({ onContactClick, onWorkClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-16 flex items-center justify-center overflow-hidden bg-transparent text-[#0A0A0A] dark:text-[#F5F5F0] transition-colors duration-300 px-4"
    >
      {/* Absolute Decorative Blurs - Colorful & Vibrant */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-violet-500/10 dark:bg-violet-500/15 blur-3xl pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-orange-500/10 dark:bg-orange-500/15 blur-3xl pointer-events-none -z-10 animate-pulse duration-[10000ms]" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-20 rounded-3xl glass-card flex flex-col items-center text-center w-full relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        
        {/* Centered Intro Column */}
        <div className="flex flex-col items-center text-center" id="hero-left-text">
          {/* Creative Profile Picture with Gradient Glow Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-6"
            id="hero-profile-container"
          >
            <div className="relative p-[1.5px] rounded-full bg-gradient-to-tr from-violet-500 via-pink-500 to-cyan-500 shadow-md">
              <div className="p-0.5 rounded-full bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-sm transition-colors">
                <img
                  src={figmaProfile}
                  alt="Rohit Choudhary profile portrait"
                  referrerPolicy="no-referrer"
                  style={{ width: '220px', height: '220px' }}
                  className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-white/40 dark:border-white/10 text-black/80 dark:text-[#F5F5F0]/80 rounded-full text-[10px] font-bold tracking-[0.2em] bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm"
            id="intro-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400 fill-current" />
            <span>AVAILABLE FOR INTERNSHIPS & UX CONTRACTS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-[85px] font-black tracking-tighter uppercase font-sans text-black dark:text-[#F5F5F0] leading-[0.85] text-center"
            id="hero-title"
          >
            <span className="block text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm tracking-[0.25em] font-mono lowercase italic font-medium mb-3">hello, i'm</span>
            <span className="block text-black dark:text-[#F5F5F0]">ROHIT CHOUDHARY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm text-neutral-600 dark:text-neutral-300 font-medium max-w-lg leading-relaxed text-center mx-auto"
            id="hero-description"
          >
            {portfolioOwner.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 items-center justify-center animate-fade-in"
            id="hero-ctas"
          >
            <button
              onClick={onWorkClick}
              id="hero-work-btn"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-650 to-blue-500 text-white text-xs font-black tracking-[0.25em] uppercase rounded-full hover:shadow-[0_0_30px_rgba(219,39,119,0.55)] dark:hover:shadow-[0_0_38px_rgba(219,39,119,0.7)] active:scale-95 cursor-pointer transition-all duration-300 shadow-md"
            >
              View My Work
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onContactClick}
              id="hero-contact-btn"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-white/30 hover:border-white/70 dark:hover:border-white/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              id="hero-about-btn"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-b border-transparent hover:border-black dark:hover:border-[#F5F5F0] text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            >
              About Me
            </button>
          </motion.div>

          {/* Quick Metrics Badge row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/35 dark:border-white/10 pt-8 w-full max-w-md mx-auto"
            id="hero-metrics-grid"
          >
            {portfolioOwner.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-3xl font-black text-black dark:text-[#F5F5F0] tracking-tighter">
                  {m.value}
                </span>
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-widest mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer pointer-events-none">
        <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-neutral-500">
          SCROLL EXPLORE
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-neutral-500 animate-bounce" />
      </div>

    </section>
  );
}
