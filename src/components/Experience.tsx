import { Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';
import { experienceData } from '../data';
import { motion } from 'motion/react';

export default function Experience() {
  const experiences = experienceData.filter(item => item.type === 'experience');
  const educations = experienceData.filter(item => item.type === 'education');

  return (
    <section
      id="experience"
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
        <div className="text-left max-w-2xl mb-16" id="exp-section-header">
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-neutral-500 font-mono">
            EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tighter text-black dark:text-[#F5F5F0] mt-2 uppercase italic leading-none">
            My Professional <br/>Journey
          </h2>
          <div className="h-[1px] w-24 bg-pink-500/55 mt-5" />
        </div>

        {/* Two-Column Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-start" id="timeline-dual-grid">
          
          {/* Work Experience Timeline */}
          <div className="space-y-8 glass-card p-6 sm:p-8" id="work-timeline">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-black dark:text-[#F5F5F0] flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-pink-500 dark:text-pink-400" />
              Work & Journey
            </h3>

            <div className="relative border-l border-white/45 dark:border-white/10 ml-3.5 space-y-8 pl-6">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="relative group text-left" id={`timeline-exp-card-${idx}`}>
                  {/* Timeline bullet dot */}
                  <span className="absolute -left-[30.5px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-50 dark:bg-[#110f24] border border-neutral-400 dark:border-neutral-500 ring-4 ring-white/40 dark:ring-black/40 transition-all duration-300 group-hover:scale-125" />

                  {/* Content */}
                  <div>
                    <span className="inline-block px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-[#0A0A0A] dark:text-[#F5F5F0] bg-white/50 dark:bg-white/10 border border-white/40 dark:border-white/10 rounded-full shadow-xs">
                      {exp.period}
                    </span>
                    
                    <h4 className="text-sm font-black tracking-wide text-neutral-850 dark:text-neutral-100 mt-2">
                      {exp.role}
                    </h4>

                    <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mt-1 flex items-center gap-1">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <span className="flex items-center gap-0.5 opacity-80 text-[9px]">
                          • <MapPin className="w-3.5 h-3.5 inline text-neutral-500" /> {exp.location}
                        </span>
                      )}
                    </p>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2.5">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Awards Timeline */}
          <div className="space-y-8 glass-card p-6 sm:p-8" id="education-timeline">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-black dark:text-[#F5F5F0] flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                Education & Background
              </h3>

              <div className="relative border-l border-white/45 dark:border-white/10 ml-3.5 space-y-8 pl-6 pt-4">
                {educations.map((edu, idx) => (
                  <div key={edu.id} className="relative group text-left" id={`timeline-edu-card-${idx}`}>
                    {/* Timeline bullet dot */}
                    <span className="absolute -left-[30.5px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-50 dark:bg-[#110f24] border border-neutral-400 dark:border-neutral-500 ring-4 ring-white/40 dark:ring-black/40 transition-all duration-300 group-hover:scale-125" />

                    {/* Content */}
                    <div>
                      <span className="inline-block px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-[#0A0A0A] dark:text-[#F5F5F0] bg-white/50 dark:bg-white/10 border border-white/40 dark:border-white/10 rounded-full shadow-xs">
                        {edu.period}
                      </span>
                      
                      <h4 className="text-sm font-black tracking-wide text-neutral-850 dark:text-neutral-100 mt-2">
                        {edu.role}
                      </h4>

                      <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mt-1 flex items-center gap-1">
                        <span>{edu.company}</span>
                      </p>

                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2.5">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* College Design Club Highlight / Hackathons */}
                <div className="relative group text-left" id="timeline-extra-academic">
                  <span className="absolute -left-[30.5px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-50 dark:bg-[#110f24] border border-neutral-400 dark:border-neutral-500 ring-4 ring-white/40 dark:ring-black/40 transition-all duration-300 group-hover:scale-125" />
                  
                  <div>
                    <span className="inline-block px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-[#0A0A0A] dark:text-[#F5F5F0] bg-white/50 dark:bg-white/10 border border-white/40 dark:border-white/10 rounded-full shadow-xs">
                      VGU Leadership
                    </span>

                    <h4 className="text-sm font-black tracking-wide text-neutral-850 dark:text-neutral-100 mt-2 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                      College Design Club Lead
                    </h4>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2">
                      Spearheaded interactive UX crash courses for fellow design students, designed college event graphics, and led VGU team to multiple local hackathon design wins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
