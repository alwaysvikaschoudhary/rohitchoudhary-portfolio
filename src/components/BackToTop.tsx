import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button once the user has scrolled past the hero section (typically 400px to 600px)
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          id="back-to-top-btn"
          aria-label="Back to Top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ 
            scale: 1.1,
            y: -4,
            transition: { type: "spring", stiffness: 400, damping: 15 }
          }}
          whileTap={{ scale: 0.95 }}
          type="button"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer shadow-lg bg-[#0A0A0A] dark:bg-[#F5F5F0] text-[#F5F5F0] dark:text-[#0A0A0A] border border-neutral-200 dark:border-neutral-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-colors duration-300"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
