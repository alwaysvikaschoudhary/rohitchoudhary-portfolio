import { motion } from 'motion/react';
import { X, Printer, Mail, Phone, MapPin, CheckCircle, GraduationCap, Briefcase } from 'lucide-react';
import { portfolioOwner, experienceData } from '../data';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const experiences = experienceData.filter(item => item.type === 'experience');
  const education = experienceData.filter(item => item.type === 'education');

  const handlePrint = () => {
    // Elegant system print trigger
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      {/* Hide surrounding controls entirely during physical system print */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl bg-white dark:bg-[#1A1A1A] text-[#0A0A0A] dark:text-neutral-300 rounded-xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.8)] border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[90vh] print:max-h-full print:shadow-none print:border-none print:rounded-none"
      >
        
        {/* Header Toolbar (Always hidden during physical system printing) */}
        <div className="flex items-center justify-between border-b border-neutral-250 dark:border-neutral-900 px-6 py-4 bg-neutral-100 dark:bg-[#0A0A0A] print:hidden sticky top-0 z-10 w-full">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
            <span className="text-[9px] font-mono font-black tracking-[0.2em] text-neutral-500 uppercase">
              PROFESSIONAL CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono font-black uppercase tracking-widest text-[#F5F5F0] dark:text-black hover:text-black dark:hover:text-[#F5F5F0] bg-black dark:bg-[#F5F5F0] hover:bg-neutral-800 dark:hover:bg-white rounded border border-neutral-300 dark:border-neutral-800 transition-colors cursor-pointer"
              title="Print Curriculum Vitae"
            >
              <Printer className="w-3.5 h-3.5" />
              Print CV
            </button>
            <button
              onClick={onClose}
              id="close-resume-btn"
              className="p-1 rounded border border-neutral-250 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-550 dark:text-neutral-450 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200 cursor-pointer"
              title="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Scrollable Content Body (Styled using professional editorial typography layout) */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-10 flex-1 text-left bg-white text-[#0A0A0A] print:overflow-visible print:p-0 print:bg-white print:text-black" id="resume-printable-area">
          
          {/* Cover / Personal Details Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b-2 border-[#0A0A0A] pb-8">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black font-sans uppercase tracking-tight text-[#0A0A0A] leading-tight">
                {portfolioOwner.name}
              </h1>
              <p className="text-xs font-mono font-black uppercase tracking-widest text-neutral-600">
                {portfolioOwner.title}
              </p>
              <p className="text-xs text-neutral-555 font-medium max-w-xl italic">
                "{portfolioOwner.bio}"
              </p>
            </div>

            <div className="text-left sm:text-right text-[10px] font-mono font-medium text-neutral-600 space-y-1">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-500" /> {portfolioOwner.socials.email}
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-500" /> {portfolioOwner.socials.phone}
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" /> {portfolioOwner.socials.location}
              </p>
            </div>
          </div>

          {/* Dual column body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (Experiences & Journey) */}
            <div className="md:col-span-8 space-y-8">
              
              {/* Work Experience */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-black uppercase tracking-[0.15em] text-[#0A0A0A] border-b border-[#0A0A0A]/25 pb-1.5 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-neutral-650" />
                  Work Experience
                </h3>

                <div className="space-y-6">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0A0A]">{exp.role}</h4>
                        <span className="text-[10px] font-mono font-black text-neutral-600">{exp.period}</span>
                      </div>
                      <p className="text-[10px] font-mono font-black uppercase tracking-wider text-neutral-550">{exp.company}</p>
                      <p className="text-xs text-[#0A0A0A]/85 leading-normal font-sans font-medium pt-1">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xs font-mono font-black uppercase tracking-[0.15em] text-[#0A0A0A] border-b border-[#0A0A0A]/25 pb-1.5 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-neutral-650" />
                  Education
                </h3>

                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0A0A]">{edu.role}</h4>
                        <span className="text-[10px] font-mono font-black text-neutral-600">{edu.period}</span>
                      </div>
                      <p className="text-[10px] font-mono font-black uppercase tracking-wider text-neutral-550">{edu.company}</p>
                      <p className="text-xs text-[#0A0A0A]/80 leading-normal font-sans pt-1">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (Skills, Systems, and Contexts) */}
            <div className="md:col-span-4 space-y-8 text-left">
              
              {/* Design Disciplines */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-black uppercase tracking-[0.15em] text-[#0A0A0A] border-b border-[#0A0A0A]/25 pb-1 flex items-center gap-1.5">
                  Design Disciplines
                </h3>
                <div className="space-y-1.5 text-xs font-semibold text-neutral-600 font-sans">
                  <p className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-neutral-550" /> User Interface (UI)</p>
                  <p className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-neutral-550" /> User Experience (UX)</p>
                  <p className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-neutral-550" /> High-fidelity Prototyping</p>
                  <p className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-neutral-550" /> Design System Architecture</p>
                  <p className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-neutral-550" /> Mobile Native Accessibility</p>
                </div>
              </div>

              {/* Design Industry Tools */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-black uppercase tracking-[0.15em] text-[#0A0A0A] border-b border-[#0A0A0A]/25 pb-1">
                  Primary Tools
                </h3>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Figma", "Framer", "Illustrator", "Photoshop", "After Effects", "InDesign", "PowerPoint", "Canva"].map(tool => (
                    <span key={tool} className="text-[9px] font-mono font-black uppercase tracking-widest px-2 py-0.5 rounded border border-[#0A0A0A]/30 bg-white shadow-3xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Merits */}
              <div className="space-y-3">
                <h3 className="text-xs font-[#0A0A0A] border-b border-[#0A0A0A]/25 pb-1 flex items-center gap-1.5 font-mono uppercase font-black tracking-wider">
                  Academic Highlights
                </h3>
                <div className="space-y-2 text-xs font-medium text-neutral-600 font-sans leading-normal">
                  <p>
                    🌟 <strong>Design Lead:</strong> Elected organizer head of VGU design community.
                  </p>
                  <p>
                    🏆 <strong>Hackathon Wins:</strong> Led team UX designs under critical constraints.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Physical Print Footer details */}
          <div className="hidden print:block border-t border-[#0A0A0A]/20 pt-6 text-[9px] text-neutral-400 text-center font-mono">
            Generated directly from Rohit Choudhary's design portfolio at {window.location.origin}
          </div>

        </div>

      </motion.div>
    </div>
  );
}
