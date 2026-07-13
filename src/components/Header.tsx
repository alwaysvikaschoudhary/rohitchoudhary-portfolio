import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { portfolioOwner } from '../data';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenResume: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ activeSection, setActiveSection, onOpenResume, isDarkMode, toggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'resume') {
      onOpenResume();
      return;
    }
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-4 left-4 right-4 z-50 max-w-6xl mx-auto rounded-2xl md:rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-2.5 shadow-lg'
            : 'bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/5 py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            id="logo-anchor"
            className="group flex items-center gap-0.5 text-xl font-black font-sans tracking-tight text-black dark:text-[#F5F5F0]"
          >
            <span>RC</span>
            <span className="text-[#F24E1E] font-black">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-2 p-1 rounded-full bg-neutral-100/50 dark:bg-neutral-900/50 border border-black/5 dark:border-white/5 backdrop-blur-md relative text-[11px] font-bold tracking-[0.2em] text-neutral-500 dark:text-neutral-400 shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative uppercase px-4 py-2 transition-all duration-300 hover:text-black dark:hover:text-[#F5F5F0] cursor-pointer z-10 ${
                    isActive
                       ? 'text-black dark:text-[#F5F5F0]'
                       : 'text-neutral-500 dark:text-neutral-400'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm border border-neutral-200 dark:border-white/10 backdrop-blur-lg -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3" id="desktop-cta-container">
            {/* Color/Theme toggle indicator */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              className="flex items-center justify-center p-2 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-[#F5F5F0] hover:border-neutral-500 bg-transparent transition-all duration-200 cursor-pointer"
              title={isDarkMode ? "Switch to Light Preset" : "Switch to Dark Preset"}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>

            <button
              onClick={onOpenResume}
              id="cta-resume-btn"
              className="flex items-center gap-1.5 px-4 py-2 border border-neutral-300 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-[#F5F5F0] hover:border-neutral-500 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              CV
            </button>
            <a
              href={`mailto:${portfolioOwner.socials.email}`}
              id="cta-hire-btn"
              className="group flex items-center gap-1 px-5 py-2.5 bg-black dark:bg-[#F5F5F0] text-white dark:text-black hover:bg-neutral-900 dark:hover:bg-white rounded-full text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-200 shadow-sm"
            >
              CONTACT
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-2" id="mobile-controls">
            {/* Mobile dark/light toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-900 rounded-lg transition-colors cursor-pointer"
              title="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>

            <button
              onClick={onOpenResume}
              className="p-2 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-900 rounded-lg"
              title="Resume"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-neutral-200 dark:border-[#2A2A2A] shadow-2xl px-6 py-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm font-semibold tracking-widest uppercase py-3 border-b border-neutral-200 dark:border-neutral-900/50 ${
                    activeSection === item.id
                      ? 'text-black dark:text-[#F5F5F0] pl-2 border-l-2 border-l-black dark:border-l-[#F5F5F0]'
                      : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-4" id="mobile-cta-container">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full justify-center flex items-center gap-2 py-3 text-xs font-bold tracking-widest uppercase text-black dark:text-[#F5F5F0] bg-white dark:bg-[#1A1A1A] border border-neutral-300 dark:border-neutral-800 rounded-full transition-colors duration-200"
              >
                <FileText className="w-4 h-4" />
                View Full CV
              </button>
              <a
                href={`mailto:${portfolioOwner.socials.email}`}
                className="w-full text-center py-3 text-xs font-bold tracking-widest uppercase bg-black dark:bg-[#F5F5F0] text-white dark:text-black hover:bg-neutral-900 hover:text-white dark:hover:bg-white rounded-full block"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
