import { Mail, Github, Linkedin, Phone, Palette } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function Footer() {
  return (
    <footer
      id="app-footer"
      className="bg-transparent text-neutral-600 dark:text-neutral-400 py-12 border-t border-white/10 dark:border-white/5 relative z-10 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left trademark info */}
        <div className="text-center md:text-left">
          <p className="text-black dark:text-neutral-200 font-black text-xs uppercase tracking-[0.2em]">
            © 2026 Rohit Choudhary. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-1.5 flex items-center justify-center md:justify-start gap-1">
            Made with <span className="text-pink-500 animate-pulse">❤️</span> in Jaipur
          </p>
        </div>

        {/* Middle navigation social icons */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono tracking-widest font-black uppercase" id="footer-social-links">
          
          <a
            href={portfolioOwner.socials.behance}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 p-2 px-3 border border-white/35 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md hover:border-white/60 dark:hover:border-white/20 hover:bg-white/30 dark:hover:bg-white/10 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-200"
            title="Read case studies on Behance"
          >
            <span>Behance</span>
            <Palette className="w-3" />
          </a>

          <a
            href={portfolioOwner.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 p-2 px-3 border border-white/35 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md hover:border-white/60 dark:hover:border-white/20 hover:bg-white/30 dark:hover:bg-white/10 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-200"
            title="Connect on LinkedIn"
          >
            <span>LinkedIn</span>
            <Linkedin className="w-3" />
          </a>

          <a
            href={portfolioOwner.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 p-2 px-3 border border-white/35 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md hover:border-white/60 dark:hover:border-white/20 hover:bg-white/30 dark:hover:bg-white/10 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-200"
            title="View code and projects on GitHub"
          >
            <span>GitHub</span>
            <Github className="w-3" />
          </a>

          {portfolioOwner.socials.phone && (
            <a
              href={`tel:${portfolioOwner.socials.phone}`}
              className="flex items-center gap-1.5 p-2 px-3 border border-white/35 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md hover:border-white/60 dark:hover:border-white/20 hover:bg-white/30 dark:hover:bg-white/10 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-200"
              title="Call or contact Rohit"
            >
              <span>Phone</span>
              <Phone className="w-3" />
            </a>
          )}

          <a
            href={`mailto:${portfolioOwner.socials.email}`}
            className="flex items-center gap-1.5 p-2 px-3 border border-white/35 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md hover:border-white/60 dark:hover:border-white/20 hover:bg-white/30 dark:hover:bg-white/10 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all duration-200"
            title="Send email"
          >
            <span>Email</span>
            <Mail className="w-3" />
          </a>

        </div>

      </div>
    </footer>
  );
}
