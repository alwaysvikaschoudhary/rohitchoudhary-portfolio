import { motion } from 'motion/react';
import { Layout, Zap, Cpu, Monitor, HelpCircle, Heart, Palette, Target } from 'lucide-react';
import { portfolioOwner, services } from '../data';

const iconMap: { [key: string]: any } = {
  Layout: Layout,
  Zap: Zap,
  Cpu: Cpu,
  MonitorPhone: Monitor,
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-transparent border-t border-b border-white/15 dark:border-white/5 relative z-10 transition-colors duration-300"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-16" id="about-section-header">
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-neutral-500 font-mono">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tighter text-black dark:text-[#F5F5F0] mt-2 uppercase italic leading-none">
            Passionate about creating <br/>Digital Experiences
          </h2>
          <div className="h-[1px] w-24 bg-pink-500/55 mt-5" />
        </div>

        {/* Bento Grid layout - 3-Column balanced display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full" id="about-bento-grid">
          
          {/* Column 2: Main Biography Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-lg sm:text-xl font-black text-black dark:text-[#F5F5F0] uppercase tracking-wide leading-snug">
              Specializing in User-Centered Designing that Balances Aesthetics, Usability & Functional Logic.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal text-sm">
              {portfolioOwner.detailedBio}
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-xs font-mono">
              {portfolioOwner.journey}
            </p>

            {/* Values / Core Mindset Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl glass-card flex flex-col items-start gap-3 shadow-md hover:border-pink-500/50 dark:hover:border-pink-500/40 hover:-translate-y-1 transition-all duration-350">
                <div className="p-2.5 rounded-lg bg-pink-550/10 text-pink-600 dark:text-pink-400">
                  <Heart className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-black dark:text-[#F5F5F0] uppercase tracking-wider">Empathy First</p>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 leading-normal">Deep interviews and observation guides my interface architecture.</p>
                </div>
              </div>
              
              <div className="p-5 rounded-2xl glass-card flex flex-col items-start gap-3 shadow-md hover:border-purple-500/50 dark:hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-350">
                <div className="p-2.5 rounded-lg bg-purple-550/10 text-purple-600 dark:text-purple-400">
                  <Palette className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-black dark:text-[#F5F5F0] uppercase tracking-wider">Aesthetic Rigor</p>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 leading-normal">Pixel-perfect typography rules and structured padding layouts.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-card flex flex-col items-start gap-3 shadow-md hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-350">
                <div className="p-2.5 rounded-lg bg-cyan-550/10 text-cyan-600 dark:text-cyan-400">
                  <Target className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-black dark:text-[#F5F5F0] uppercase tracking-wider">Business Alignment</p>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 leading-normal">Form follows function to improve key conversions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Core Services/Capabilities Bento Column */}
          <div className="lg:col-span-5 w-full space-y-4" id="about-capabilities">
            <span className="text-[9px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.35em] block mb-1 pl-1 font-black">
              CORE CAPABILITIES
            </span>
            <div className="space-y-3">
              {services.map((serv, index) => {
                const IconComponent = iconMap[serv.icon] || HelpCircle;
                return (
                  <motion.div
                    key={serv.id}
                    id={`serv-card-${serv.id}`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="group select-none flex items-start gap-4 p-5 rounded-xl border border-white/40 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md hover:bg-white/35 dark:hover:bg-white/10 hover:border-white/60 dark:hover:border-white/20 transition-all duration-300 shadow-sm"
                  >
                    <div className="p-2.5 rounded-lg bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200/55 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:bg-black dark:group-hover:bg-[#F5F5F0] group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-black tracking-widest text-black dark:text-[#F5F5F0] uppercase group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                        {serv.title}
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-normal">
                        {serv.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
