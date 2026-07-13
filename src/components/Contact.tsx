import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { portfolioOwner } from '../data';
import { Message } from '../types';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messagesLog, setMessagesLog] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Load past sent messages from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('rohit_portfolio_messages');
      if (saved) {
        setMessagesLog(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load local messages", e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!message.trim() || message.length < 5) {
      setError("Message is too short. Please provide at least 5 characters.");
      return;
    }

    setIsSubmitting(true);

    // Send the message directly to Rohit's inbox via FormSubmit!
    fetch(`https://formsubmit.co/ajax/${portfolioOwner.socials.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        _subject: `New Portfolio Message from ${name.trim()}`,
      })
    })
    .then(async (res) => {
      if (!res.ok) {
        throw new Error("Failed to deliver your email. Please try again.");
      }
      return res.json();
    })
    .then(() => {
      // Success flow! Add to logs and show toast
      const newMsg: Message = {
        id: "msg-" + Date.now(),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })
      };

      const updated = [newMsg, ...messagesLog].slice(0, 5); // store up to 5
      setMessagesLog(updated);
      setSubmitted(true);

      try {
        localStorage.setItem('rohit_portfolio_messages', JSON.stringify(updated));
      } catch (err) {
        console.error("Local storage limit reached", err);
      }

      // Reset inputs
      setName('');
      setEmail('');
      setMessage('');

      // Turn off success animation after brief delay
      setTimeout(() => {
        setSubmitted(false);
      }, 7000);
    })
    .catch((err) => {
      console.error("FormSubmit email dispatch failed:", err);
      setError("Could not deliver email. Please check your network or try again.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-transparent text-black dark:text-[#F5F5F0] border-t border-b border-white/10 dark:border-white/5 relative z-10 transition-colors duration-300"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-16" id="contact-section-header">
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-neutral-555 dark:text-neutral-500 font-mono">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tighter text-black dark:text-[#F5F5F0] mt-2 uppercase italic leading-none">
            Let's Work <br/>Together
          </h2>
          <div className="h-[1px] w-24 bg-pink-500/55 mt-5" />
        </div>

        {/* Big Dual layout columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          
          {/* Left Column: Direct info cards */}
          <div className="lg:col-span-5 space-y-8 text-left" id="contact-info-cards">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together!
            </p>

            <div className="space-y-4">
              
              {/* Mail Box card */}
              <a
                href={`mailto:${portfolioOwner.socials.email}`}
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/40 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md hover:border-white/60 dark:hover:border-white/20 hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 shadow-sm"
              >
                <div className="p-3 rounded-lg bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200/55 dark:border-neutral-800 text-neutral-500 dark:text-[#F5F5F0] group-hover:bg-black dark:group-hover:bg-[#F5F5F0] group-hover:text-white dark:group-hover:text-black duration-200 transition-colors shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-mono tracking-widest text-neutral-500 font-black uppercase">
                    EMAIL
                  </p>
                  <p className="text-xs font-black tracking-widest text-black dark:text-[#F5F5F0] uppercase mt-0.5">
                    {portfolioOwner.socials.email}
                  </p>
                </div>
              </a>

              {/* Phone Box card */}
              <a
                href={`tel:${portfolioOwner.socials.phone.replace(/\s+/g, '')}`}
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/40 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md hover:border-white/60 dark:hover:border-white/20 hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 shadow-sm"
              >
                <div className="p-3 rounded-lg bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200/55 dark:border-neutral-800 text-neutral-500 dark:text-[#F5F5F0] group-hover:bg-black dark:group-hover:bg-[#F5F5F0] group-hover:text-white dark:group-hover:text-black duration-200 transition-colors shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-mono tracking-widest text-neutral-500 font-black uppercase">
                    TELEPHONE
                  </p>
                  <p className="text-xs font-black tracking-widest text-black dark:text-[#F5F5F0] uppercase mt-0.5">
                    {portfolioOwner.socials.phone}
                  </p>
                </div>
              </a>

              {/* Location Box card */}
              <div
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/40 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md select-none shadow-sm"
              >
                <div className="p-3 rounded-lg bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200/55 dark:border-neutral-800 text-neutral-500 dark:text-[#F5F5F0] shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-mono tracking-widest text-neutral-550 dark:text-neutral-500 font-black uppercase">
                    LOCATION
                  </p>
                  <p className="text-xs font-black tracking-widest text-black dark:text-[#F5F5F0] uppercase mt-0.5">
                    {portfolioOwner.socials.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Simulated Live Messages Log inside iframe so user can test persistence */}
            {messagesLog.length > 0 && (
              <div className="glass-card rounded-xl p-5 text-left shadow-lg relative overflow-hidden transition-all duration-300" id="simulated-logs-panel">
                <span className="text-[9px] font-mono font-black uppercase tracking-[0.2em] text-black dark:text-[#F5F5F0] block mb-3">
                  🔔 Sent Messages History ({messagesLog.length})
                </span>
                <p className="text-[10px] text-neutral-500 mb-4 font-mono leading-relaxed">
                  These messages are dispatched to Rohit's email and kept in browser logs:
                </p>
                <div className="space-y-2.5 max-h-[160px] overflow-y-auto">
                  {messagesLog.map((log) => (
                    <div key={log.id} className="p-3 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/5 rounded-lg">
                      <div className="flex justify-between items-center text-[10px] font-mono font-black uppercase tracking-wider">
                        <span className="text-black dark:text-[#F5F5F0]">{log.name}</span>
                        <span className="text-neutral-555 dark:text-neutral-500">{log.timestamp}</span>
                      </div>
                      <p className="text-xs text-neutral-605 dark:text-neutral-400 mt-1.5 leading-normal">
                        "{log.message}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7" id="contact-form-col">
                      <form onSubmit={handleSubmit} className="space-y-6 text-left p-6 sm:p-8 glass-card rounded-xl shadow-lg transition-all duration-300">
              
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-pink-500/10 dark:bg-pink-500/20 border border-pink-500/30 text-neutral-800 dark:text-neutral-200 text-xs font-mono flex items-center gap-2.5"
                    id="success-toast-banner"
                  >
                    <CheckCircle2 className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                    <div>
                      <p className="font-black text-[10px] uppercase tracking-widest flex items-center gap-1">Message Dispatched! <Sparkles className="w-3.5 h-3.5 text-pink-555" /></p>
                      <p className="text-[10px] text-neutral-520 dark:text-neutral-400 mt-0.5">Your email has been sent successfully to Rohit's inbox! (Verify activation email if needed.)</p>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 dark:text-red-400 text-xs font-mono flex items-center gap-2.5"
                    id="error-toast-banner"
                  >
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-[10px] uppercase tracking-widest font-black">{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name field */}
              <div>
                <label htmlFor="name-input" className="block text-[10px] font-mono font-extrabold uppercase text-neutral-500 dark:text-neutral-400 tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alexis Carter"
                  disabled={isSubmitting}
                  className="mt-2 w-full p-3.5 bg-white/20 dark:bg-black/20 border border-white/40 dark:border-white/5 focus:border-pink-500/50 dark:focus:border-pink-500/40 rounded-lg text-xs font-mono uppercase tracking-wider text-black dark:text-[#F5F5F0] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-0 transition-all disabled:opacity-50"
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email-input" className="block text-[10px] font-mono font-extrabold uppercase text-neutral-500 dark:text-neutral-400 tracking-widest">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email-input"
                  value={email}
                  disabled={isSubmitting}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="mt-2 w-full p-3.5 bg-white/20 dark:bg-black/20 border border-white/40 dark:border-white/5 focus:border-pink-500/50 dark:focus:border-pink-500/40 rounded-lg text-xs font-mono uppercase tracking-wider text-black dark:text-[#F5F5F0] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-0 transition-all disabled:opacity-50"
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message-input" className="block text-[10px] font-mono font-extrabold uppercase text-neutral-500 dark:text-neutral-400 tracking-widest">
                  Message
                </label>
                <textarea
                  id="message-input"
                  rows={4}
                  value={message}
                  disabled={isSubmitting}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your design problem or project inquiry..."
                  className="mt-2 w-full p-3.5 bg-white/20 dark:bg-black/20 border border-white/40 dark:border-white/5 focus:border-pink-500/50 dark:focus:border-pink-500/40 rounded-lg text-xs font-mono uppercase tracking-wider text-black dark:text-[#F5F5F0] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-0 transition-all disabled:opacity-50"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                id="send-message-btn"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 py-3.5 text-xs font-black uppercase tracking-widest bg-pink-600 hover:bg-pink-500 dark:bg-pink-500 dark:hover:bg-pink-400 text-white dark:text-white rounded-lg shadow-md hover:shadow-lg hover:shadow-pink-500/20 dark:hover:shadow-pink-500/45 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

            </form>

          </div>

        </div>

      </motion.div>
    </section>
  );
}
