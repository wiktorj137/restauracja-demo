'use client';
import { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blokuj scroll gdy menu mobilne jest otwarte
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Stabilizuj animacje menu mobilnego
  useLayoutEffect(() => {
    if (isMobileMenuOpen) {
      // Wymuszenie stabilizacji layoutu
      const timer = setTimeout(() => {
        // Pusty timeout dla stabilizacji
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'Start', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'O nas', href: '#about' },
    { name: 'Rezerwacje', href: '#rezerwacje' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 mr-3">
                <span className="text-lg font-serif text-white/90">R</span>
              </div>
              <span className="text-xl font-serif text-white font-medium tracking-wide">
                Premium Restaurant
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/80 hover:text-white transition-colors duration-200 font-medium tracking-wide relative group focus:outline-none"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.1 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
              
              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#rezerwacje')}
                className="bg-white/15 backdrop-blur-sm text-white px-6 py-2 text-sm font-medium tracking-wide border border-white/25 transition-all duration-300 hover:bg-white hover:text-black focus:outline-none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rezerwuj
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden flex flex-col space-y-1 p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-black/95 backdrop-blur-md border-l border-white/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="p-8">
                {/* Mobile Menu Header - tylko przycisk X */}
                <div className="flex justify-end mb-12">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/60 hover:text-white transition-colors focus:outline-none"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-white/80 hover:text-white transition-colors duration-200 font-medium tracking-wide text-lg w-full text-left focus:outline-none"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.1 + index * 0.1,
                        ease: "easeOut"
                      }}
                      layoutId={`menu-item-${index}`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.button
                    onClick={() => {
                      scrollToSection('#rezerwacje');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-white/15 backdrop-blur-sm text-white px-6 py-3 text-base font-medium tracking-wide border border-white/25 transition-all duration-300 hover:bg-white hover:text-black mt-8 focus:outline-none"
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6,
                      ease: "easeOut"
                    }}
                    layoutId="mobile-cta-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Zarezerwuj stolik
                  </motion.button>
                </nav>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="space-y-4 text-white/60 text-sm">
                    <div className="flex items-start">
                      <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="leading-relaxed">
                        ul. Marszałkowska 142<br />
                        00-061 Warszawa
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+48 123 456 789</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 