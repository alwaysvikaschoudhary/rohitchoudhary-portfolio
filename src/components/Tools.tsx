import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toolsList } from '../data';
import { CheckCircle2 } from 'lucide-react';

const ToolLogo = ({ name, className = "w-9 h-9" }: { name: string; className?: string }) => {
  switch (name.toLowerCase()) {
    case 'figma':
      return (
        <svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Top left red-orange */}
          <path d="M20 0 C31 0 40 9 40 20 L40 40 L20 40 C9 40 0 31 0 20 C0 9 9 0 20 0 Z" fill="#F24E1E" />
          {/* Top right orange */}
          <circle cx="60" cy="20" r="20" fill="#FF7262" />
          {/* Middle left purple */}
          <path d="M20 40 C31 40 40 49 40 60 L40 80 L20 80 C9 80 0 71 0 60 C0 49 9 40 20 40 Z" fill="#A259FF" />
          {/* Middle right blue/turquoise */}
          <circle cx="60" cy="60" r="20" fill="#1ABC9C" />
          {/* Bottom left green tear */}
          <path d="M20 80 L40 80 L40 100 C40 111 31 120 20 120 C9 120 0 111 0 100 C0 89 9 80 20 80 Z" fill="#0ACF83" />
        </svg>
      );
    case 'framer':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="#0055FF">
          <path d="M12 12h8V4H4l8 8H4v8h8v-8z" />
        </svg>
      );
    case 'illustrator':
      return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="2" y="2" width="96" height="96" rx="16" fill="#1D1000" stroke="#FF9A00" strokeWidth="4" />
          <text x="24" y="68" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="42" fill="#FF9A00">A</text>
          <text x="58" y="68" fontFamily="'Inter', system-ui, sans-serif" fontWeight="700" fontSize="42" fill="#FF9A00">i</text>
        </svg>
      );
    case 'photoshop':
      return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="2" y="2" width="96" height="96" rx="16" fill="#001833" stroke="#31A8FF" strokeWidth="4" />
          <text x="22" y="68" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="42" fill="#31A8FF">P</text>
          <text x="54" y="68" fontFamily="'Inter', system-ui, sans-serif" fontWeight="600" fontSize="42" fill="#31A8FF">s</text>
        </svg>
      );
    case 'indesign':
      return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="2" y="2" width="96" height="96" rx="16" fill="#200010" stroke="#FF3366" strokeWidth="4" />
          <text x="24" y="68" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="42" fill="#FF3366">I</text>
          <text x="52" y="68" fontFamily="'Inter', system-ui, sans-serif" fontWeight="600" fontSize="42" fill="#FF3366">d</text>
        </svg>
      );
    case 'after effects':
      return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="2" y="2" width="96" height="96" rx="16" fill="#120024" stroke="#9999FF" strokeWidth="4" />
          <text x="21" y="68" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="42" fill="#9999FF">A</text>
          <text x="54" y="68" fontFamily="'Inter', system-ui, sans-serif" fontWeight="600" fontSize="42" fill="#9999FF">e</text>
        </svg>
      );
    case 'powerpoint':
      return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="18" y="18" width="64" height="64" rx="8" fill="#D35222" opacity="0.15" />
          <rect x="24" y="24" width="58" height="52" rx="6" fill="#F24E1E" />
          <rect x="12" y="28" width="44" height="44" rx="8" fill="#D83B01" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.25))" />
          <text x="34" y="60" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="26" fill="#FFFFFF" textAnchor="middle">P</text>
          <line x1="56" y1="36" x2="70" y2="36" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line x1="56" y1="46" x2="74" y2="46" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line x1="56" y1="56" x2="66" y2="56" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        </svg>
      );
    case 'canva':
      return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <defs>
            <linearGradient id="canvaIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C4CC" />
              <stop offset="100%" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="url(#canvaIconGrad)" />
          <path d="M 70 38 C 65 24, 40 24, 34 40 C 28 56, 38 76, 58 74 C 68 73, 72 64, 72 64 M 64 56 C 64 56, 52 64, 44 54 C 38 46, 44 34, 52 38" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'word':
      return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="18" y="18" width="64" height="64" rx="8" fill="#185ABD" opacity="0.15" />
          <rect x="24" y="24" width="58" height="52" rx="6" fill="#185ABD" />
          <rect x="12" y="28" width="44" height="44" rx="8" fill="#103F91" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.25))" />
          <text x="34" y="60" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="24" fill="#FFFFFF" textAnchor="middle">W</text>
          <line x1="56" y1="36" x2="72" y2="36" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line x1="56" y1="46" x2="68" y2="46" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line x1="56" y1="56" x2="74" y2="56" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        </svg>
      );
    default:
      return (
        <div className={`rounded-lg flex items-center justify-center font-black text-xs text-white shadow-sm ${className}`} style={{ backgroundColor: "#000" }}>
          {name.substring(0, 2).toUpperCase()}
        </div>
      );
  }
};

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'design' | 'prototyping' | 'productivity'>('all');
  const [hoveredTool, setHoveredTool] = useState<string | null>("Figma");

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'design', label: 'Graphics & Vector' },
    { id: 'prototyping', label: 'Prototyping & Motion' },
    { id: 'productivity', label: 'Doc & Comm' },
  ];

  const filteredTools = toolsList.filter(
    (tool) => selectedCategory === 'all' || tool.category === selectedCategory
  );

  // Custom tool details explaining his practical proficiency
  const toolDetails: { [key: string]: { usage: string; rating: string; tagline: string } } = {
    "Figma": { 
      usage: "UX Wireframing, complete layout design, design systems architecture with advanced variables & auto-layout 5.0.", 
      rating: "Mastery (2000+ Hrs)", 
      tagline: "Collaborative UX Workspace" 
    },
    "Framer": { 
      usage: "Advanced interactive prototypes with complex micro-interactions, responsive scroll-based trigger events, and CMS integration.", 
      rating: "Advanced & Adaptive", 
      tagline: "High-Fidelity Code-Like Prototyping" 
    },
    "Illustrator": { 
      usage: "Custom layout iconography, vector artwork, typographic branding, print assets design.", 
      rating: "High Proficiency", 
      tagline: "Infinite Vector Fidelity" 
    },
    "Photoshop": { 
      usage: "High fidelity image manipulations, compositing key narrative posters, mockup creation.", 
      rating: "High Proficiency", 
      tagline: "Pixel-Perfect Digital Art" 
    },
    "InDesign": { 
      usage: "Academic study documentation layout, portfolio books, standard UX pitch portfolios.", 
      rating: "Intermediate Design", 
      tagline: "Sophisticated Editorial Layouts" 
    },
    "After Effects": { 
      usage: "Lottie web animations design, user interface motion demos, render video clips for Behance Case Studies.", 
      rating: "Advanced Timelines", 
      tagline: "Keyframe Motion Graphic Wizardry" 
    },
    "PowerPoint": { 
      usage: "Quick client pitch decks, academic presentations, research findings sharing.", 
      rating: "Proficient", 
      tagline: "Interactive Pitch Decks" 
    },
    "Canva": { 
      usage: "Agile content wireframing, high-velocity marketing templates, social layouts.", 
      rating: "Highly Proficient", 
      tagline: "Rapid Format Generation" 
    },
    "Word": { 
      usage: "Drafting persona worksheets, user interview scripts, and documentation.", 
      rating: "Proficient", 
      tagline: "Structural Text & Documentation" 
    }
  };

  return (
    <section
      id="tools"
      className="py-20 bg-transparent text-black dark:text-[#F5F5F0] border-b border-white/10 dark:border-white/5 relative z-10 transition-colors duration-300"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-neutral-500 font-mono">
              PROFESSIONAL TOOLKIT
            </span>
            <h2 className="text-3xl font-black font-sans uppercase tracking-tight text-black dark:text-[#F5F5F0] mt-1 italic">
              TOOLS I WORK WITH
            </h2>
          </div>

          {/* Quick tab controls */}
          <div className="flex flex-wrap gap-1 bg-white/15 dark:bg-black/25 backdrop-blur-md p-1 rounded-xl border border-white/40 dark:border-white/5 transition-colors">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3.5 py-1.5 text-[10px] uppercase tracking-widest font-black rounded-lg transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-[#1A1A1A] text-black dark:text-[#F5F5F0] border border-neutral-250 dark:border-neutral-800 shadow-sm'
                    : 'text-neutral-510 dark:text-neutral-500 hover:text-black dark:hover:text-neutral-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Tools Interactive Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" id="tools-tiles-grid">
            {filteredTools.map((tool) => {
              const isHovered = hoveredTool === tool.name;
              return (
                <motion.div
                  key={tool.name}
                  id={`tool-tile-${tool.name.toLowerCase()}`}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onClick={() => setHoveredTool(tool.name)}
                  className={`relative overflow-hidden cursor-pointer p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center text-center select-none ${
                    isHovered
                      ? 'border-pink-500/50 dark:border-pink-500/30 bg-white/50 dark:bg-white/10 backdrop-blur-lg shadow-lg scale-[1.03]'
                      : 'border-white/40 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md hover:border-white/60 dark:hover:border-white/20 hover:bg-white/30 dark:hover:bg-white/8'
                  }`}
                >
                  {/* Decorative Brand Accent Dot */}
                  <span
                    className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: tool.color }}
                  />

                  {/* Icon Replacement (Elegant original logo SVGs) */}
                  <div className="w-10 h-10 mb-3 flex items-center justify-center transition-transform hover:scale-105 duration-300">
                    <ToolLogo name={tool.name} className="w-9 h-9" />
                  </div>

                  <span className="text-xs font-black tracking-wide text-black dark:text-[#F5F5F0]">
                    {tool.name}
                  </span>
                  
                  <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-neutral-500 mt-1.5">
                    {tool.category}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Right Panel: How Rohit Uses It Card */}
          <div className="lg:col-span-4" id="tool-insight-panel">
            <AnimatePresence mode="wait">
              {hoveredTool && (
                <motion.div
                  key={hoveredTool}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-xl p-6 text-left shadow-lg relative overflow-hidden transition-all duration-300"
                >
                  {/* Glowing backdrop banner based on active tool color */}
                  <div
                    className="absolute -top-32 -right-32 w-48 h-48 rounded-full opacity-5 blur-3xl pointer-events-none"
                    style={{ backgroundColor: toolsList.find(t => t.name === hoveredTool)?.color || "#000" }}
                  />

                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 flex items-center justify-center p-1 bg-white/5 dark:bg-black/10 rounded-xl border border-white/10 shadow-sm">
                      <ToolLogo name={hoveredTool} className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-[#0a0a0a] dark:text-[#F5F5F0]">
                        {hoveredTool}
                      </h3>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 mt-0.5">
                        {toolDetails[hoveredTool]?.tagline || "Advanced Suite tool"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-neutral-150 dark:border-neutral-900">
                    <div>
                      <span className="text-[8.5px] font-mono font-black uppercase tracking-widest text-neutral-500">
                        Proficiency Rating
                      </span>
                      <p className="text-xs font-black tracking-wider text-[#0A0A0A] dark:text-neutral-200 mt-1 flex items-center gap-1.5 uppercase">
                        <CheckCircle2 className="w-4 h-4 text-emerald-555 dark:text-neutral-400" /> {toolDetails[hoveredTool]?.rating || "Highly Proficient"}
                      </p>
                    </div>

                    <div>
                      <span className="text-[8.5px] font-mono font-black uppercase tracking-widest text-neutral-500">
                        Practical Application
                      </span>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal mt-1">
                        {toolDetails[hoveredTool]?.usage || "Integrating creative assets with rapid wireframing to achieve visual precision."}
                      </p>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
