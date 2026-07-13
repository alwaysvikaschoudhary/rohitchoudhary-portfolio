import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';
import ARVRBackground from './components/ARVRBackground';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-dark-mode');
    return saved !== null ? saved === 'true' : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('portfolio-dark-mode', String(next));
      return next;
    });
  };

  // Monitor Scroll Position to Update Header Navigation Link indicators Dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 160; // offset

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeroWorkClick = () => {
    setActiveSection('projects');
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHeroContactClick = () => {
    setActiveSection('contact');
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`${isDarkMode ? 'dark text-neutral-200' : 'text-neutral-800'} min-h-screen flex flex-col font-sans antialiased overflow-x-hidden selection:bg-purple-900/40 selection:text-white transition-colors duration-300`}>
      
      {/* Dynamic Animated Fluid Liquid Mesh Gradient Background */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-violet-50/40 dark:bg-[#070514] transition-all duration-500">
        {/* Soft blur overlay to blend gradient blobs */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/10 backdrop-blur-[3px]" />
        
        {/* Glowing Orbs: Electric Pink, Dark Orchid/Purple, and Oceanic Blue */}
        <div className="absolute top-[-25%] left-[-20%] w-[80vw] h-[80vw] sm:w-[55vw] sm:h-[55vw] rounded-full bg-gradient-to-tr from-fuchsia-600/30 to-purple-600/25 dark:from-fuchsia-700/25 dark:to-purple-900/35 blur-[110px] sm:blur-[145px] animate-fluid-blob" />
        <div className="absolute top-[35%] right-[-15%] w-[85vw] h-[85vw] sm:w-[60vw] sm:h-[60vw] rounded-full bg-gradient-to-br from-pink-500/20 to-rose-600/20 dark:from-pink-500/20 dark:to-purple-700/15 blur-[120px] sm:blur-[150px] animate-fluid-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[10%] w-[90vw] h-[90vw] sm:w-[50vw] sm:h-[50vw] rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-600/25 dark:from-cyan-500/20 dark:to-indigo-900/25 blur-[110px] sm:blur-[135px] animate-fluid-blob animation-delay-4000" />
        <div className="absolute top-[15%] left-[25%] w-[70vw] h-[70vw] sm:w-[45vw] sm:h-[45vw] rounded-full bg-gradient-to-r from-violet-600/15 to-indigo-600/15 dark:from-violet-700/15 dark:to-blue-900/15 blur-[100px] sm:blur-[120px] animate-fluid-blob animation-delay-6000" />
        
        {/* Interactive AR/VR Motion Graphics HUD, LiDAR lasers, & Perspective trackers */}
        <ARVRBackground isDarkMode={isDarkMode} />
      </div>

      {/* Primary Sticky Nav Bar Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenResume={() => setIsResumeOpen(true)}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Modules */}
      <main className="flex-grow">
        
        {/* Module 1: Hero Section */}
        <Hero
          onContactClick={handleHeroContactClick}
          onWorkClick={handleHeroWorkClick}
        />

        {/* Module 2: About Section & Capabilities */}
        <About />

        {/* Module 3: Skills & Interactive Tools Grid */}
        <Tools />

        {/* Module 4: CV Journey Timeline Section */}
        <Experience />

        {/* Module 5: Projects & Device Mockups Gallery */}
        <Projects onOpenCaseStudy={(proj) => setSelectedProject(proj)} />

        {/* Module 6: Interactive Contact Form & Client Simulation Log Inbox */}
        <Contact />

      </main>

      {/* Footnote Social Contacts & Credits */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Modals Display Layer */}
      <AnimatePresence>
        
        {/* Project Case Study Full Summary */}
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* Printable/Export CV Resume View Overlay */}
        {isResumeOpen && (
          <ResumeModal
            onClose={() => setIsResumeOpen(false)}
          />
        )}

      </AnimatePresence>

    </div>
  );
}
