import { motion } from 'motion/react';
import { X, ClipboardList, Workflow, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  // Let's create beautiful contextual stories for each project
  const getContextualContent = (id: string) => {
    switch (id) {
      case 'proj-vitaflow':
        return {
          problem: "In critical medical situations, finding compatible blood donors fast is highly stressful. Existing solutions suffer from bad response latency, outdated donor records, and complex mobile registration wizards that donors abandoned.",
          solution: "We streamlined the donation journey to a single radial search and automated alerts. The interface is optimized to minimize cognitive loading so users find a nearby matching donor in less than 3 user clicks.",
          researchNotes: "Conducted usability testing with 15 participants in Jaipur. Identified that 70% of blood seekers care most about direct contact features rather than searching deep historical records.",
          keyPersona: {
            name: "Rajesh Sharma",
            role: "Emergency Seeker (Father)",
            need: "Needs 2 units of O-negative blood in less than 1 hour for surgical backup.",
            painPoint: "Frustrated by dial lists that don't pick up or return outdated locations."
          }
        };
      case 'proj-mealmitra':
        return {
          problem: "Students and young tech professionals in Jaipur find it difficult to secure continuous, healthy, home-cooked food. Fast-food apps cause nutritional fatigue, and commercial catering packages lack customized scheduling and transparent kitchen hygiene.",
          solution: "MealMitra connects consumers directly to certified home kitchens nearby. We put the cooks' stories front and center, providing a warm, intuitive UI where ordering a weekly meal subscription takes moments.",
          researchNotes: "Engaged 8 home cooks and 25 university hostel students. Survey showed nutritional authenticity, flexible scheduling, and friendly local cooks were key drivers.",
          keyPersona: {
            name: "Ananya Iyer",
            role: "VGU Design Student",
            need: "Wants affordable, clean, home-made lunches that remind her of home meals.",
            painPoint: "No kitchen in PG, and restaurants are too expensive and greasy."
          }
        };
      default:
        return {
          problem: "In a world overwhelmed by fleeting digital advertisements, visual storytelling often gets drowned on standard social Feeds. Designers lack channels to communicate deep narrative layers using print layouts.",
          solution: "A physical/key art narrative poster campaign using stark typographic contrast, layered shapes, and meticulous negative space to draw users into a structured focus cycle.",
          researchNotes: "Mapped typography height scales and tested color combination legibility from various physical display distances.",
          keyPersona: {
            name: "Amrit Singh",
            role: "Creative Arts Evaluator",
            need: "Wants clean visual assets that communicate immediate emotional topics.",
            painPoint: "Most academic project designs choose default themes over intentional grids."
          }
        };
    }
  };

  const story = getContextualContent(project.id);

  return (
    <div
      id="case-study-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-4xl bg-white dark:bg-[#1A1A1A] text-black dark:text-neutral-300 rounded-xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.8)] border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[90vh]"
      >
        
        {/* Modal Sticky Header bar */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-900 px-6 py-4 bg-neutral-100 dark:bg-[#0A0A0A] sticky top-0 z-10 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-pulse" />
            <span className="text-[9px] font-black tracking-[0.25em] text-neutral-500 uppercase">
              CASE STUDY EXPLORATION
            </span>
          </div>

          <button
            onClick={onClose}
            id="close-modal-btn"
            className="p-1.5 rounded border border-neutral-250 dark:border-neutral-805 bg-white dark:bg-neutral-900 text-neutral-550 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200 cursor-pointer"
            title="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Content body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1 text-left bg-white dark:bg-[#1A1A1A] transition-colors" id="case-study-scrollable-body">
          
          {/* Main Hero Summary Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-neutral-150 dark:border-neutral-900 pb-8">
            
            {/* Title & Tagline */}
            <div className="md:col-span-8 space-y-4">
              <span className="px-2.5 py-1 text-[9px] font-mono tracking-widest font-bold uppercase text-black dark:text-[#F5F5F0] bg-neutral-100 dark:bg-[#0A0A0A] border border-neutral-205 dark:border-neutral-800 rounded">
                {project.category} CASE STUDY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight text-black dark:text-[#F5F5F0] leading-tight mt-1.5">
                {project.title}
              </h2>
              <p className="text-xs text-neutral-607 dark:text-neutral-450 leading-relaxed font-sans">
                {project.description}
              </p>
              
              {/* Deliverables tags inside hero */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-black">
                  Core Scope & Output
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.deliverables?.map(del => (
                    <span key={del} className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 text-neutral-600 dark:text-neutral-400 rounded">
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics & tools column */}
            <div className="md:col-span-4 bg-neutral-100 dark:bg-[#0A0A0A] rounded-xl p-5 border border-neutral-200 dark:border-neutral-850 space-y-5">
              <div>
                <span className="text-[8.5px] font-mono text-neutral-550 dark:text-neutral-500 uppercase tracking-[0.2em] font-black">
                  USABILITY IMPACT
                </span>
                <p className="text-xs font-black tracking-wide text-neutral-800 dark:text-neutral-300 mt-1 flex items-center gap-1 uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-450" />
                  {project.metrics}
                </p>
              </div>

              <div>
                <span className="text-[8.5px] font-mono text-neutral-550 dark:text-neutral-500 uppercase tracking-[0.2em] font-black block mb-1.5">
                  DESIGN WORKSPACE
                </span>
                <div className="flex flex-wrap gap-1">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-[9px] px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-400 bg-white dark:bg-[#1A1A1A] font-mono border border-neutral-205 dark:border-neutral-850 uppercase">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Deep UX Structure: Problem / Solution GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="case-study-prob-sol">
            <div className="space-y-3">
              <h4 className="text-xs font-black text-black dark:text-white uppercase tracking-widest flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-neutral-505 dark:text-neutral-400" />
                The Problem Statement
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {story.problem}
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xs font-black text-black dark:text-white uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-505 dark:text-neutral-400" />
                The UX Design Solved
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {story.solution}
              </p>
            </div>
          </div>

          {/* Persona Work segment */}
          <div className="bg-neutral-50 dark:bg-[#0A0A0A] rounded-xl border border-neutral-200 dark:border-neutral-850 p-6 space-y-4 text-left" id="case-study-persona">
            <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-900 pb-3">
              <ClipboardList className="w-4 h-4 text-neutral-505 dark:text-neutral-400" />
              <span className="text-xs font-black uppercase text-black dark:text-white tracking-wider">
                Target User Personas
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
              <div className="sm:col-span-4 bg-white dark:bg-[#1A1A1A] p-4 rounded-xl border border-neutral-200 dark:border-neutral-850 shadow-sm dark:shadow-none">
                <p className="text-xs font-black text-black dark:text-white uppercase tracking-wider">{story.keyPersona.name}</p>
                <p className="text-[9px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">{story.keyPersona.role}</p>
                <div className="w-10 h-10 rounded bg-neutral-100 dark:bg-neutral-909 border border-neutral-200 dark:border-neutral-850 flex items-center justify-center font-black text-black dark:text-[#F5F5F0] text-xs mt-3">
                  {story.keyPersona.name.substring(0, 2).toUpperCase()}
                </div>
              </div>

              <div className="sm:col-span-8 space-y-3 pt-1 font-sans">
                <div>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest block font-black leading-none">
                    Core Goals & Needs
                  </span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    {story.keyPersona.need}
                  </p>
                </div>
                
                <div>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest block font-black leading-none">
                    Current Friction Points
                  </span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-normal">
                    {story.keyPersona.painPoint}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Research & Testing Methods segment */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-sans" id="case-study-research mt-4">
            <div className="md:col-span-8 space-y-3">
              <h4 className="text-xs font-black text-black dark:text-white uppercase tracking-widest flex items-center gap-2 font-sans">
                <Workflow className="w-4 h-4 text-neutral-505 dark:text-neutral-400" />
                User Research & Usability Feedback
              </h4>
              <p className="text-xs text-neutral-635 dark:text-neutral-450 leading-relaxed font-sans font-medium">
                {story.researchNotes}
              </p>
            </div>
            
            <div className="md:col-span-4 p-4 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-transparent text-center font-mono">
              <span className="text-[9px] font-black text-neutral-505 dark:text-neutral-500 uppercase tracking-wider block">Methodology</span>
              <p className="text-[10px] font-bold text-black dark:text-white mt-1 uppercase">1:1 Interviews • Journey Mapping</p>
              <p className="text-[8px] text-neutral-510 dark:text-neutral-500 font-mono mt-0.5">VGU Case Study Standard 3.2</p>
            </div>
          </div>

          <div className="pt-4" />
        </div>

        {/* Modal Sticky Footer bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 dark:border-neutral-900 px-6 py-5 bg-neutral-100 dark:bg-[#0A0A0A] sticky bottom-0 z-10 w-full transition-colors">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/60 dark:text-[#F5F5F0]/50 font-semibold text-center sm:text-left">
            💡 Full interactive mock screens are detailed in Behance presentation
          </p>

          <a
            href={project.behanceUrl}
            target="_blank"
            rel="noreferrer"
            id="modal-behance-cta-btn"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-black bg-black dark:bg-[#F5F5F0] text-white dark:text-black rounded hover:bg-neutral-900 dark:hover:bg-white tracking-widest uppercase shadow-md transition-all duration-300 cursor-pointer"
          >
            Open Full Behance Case Study
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </motion.div>
    </div>
  );
}
