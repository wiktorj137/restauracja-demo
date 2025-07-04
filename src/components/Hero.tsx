'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-restaurant.jpg"
          alt="Eleganckie wnętrze restauracji"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        
        {/* Simple overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Simple Logo */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-20 h-20 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
              <span className="text-2xl font-serif text-white/90">R</span>
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-4 tracking-wide">
              <span className="font-serif font-normal">PREMIUM</span>
              <br />
              <span className="font-sans font-extralight">RESTAURANT</span>
            </h1>
            
            <div className="w-24 h-px bg-white/30 mx-auto" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/80 mb-16 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Doświadcz wyjątkowej podróży kulinarnej w sercu miasta. 
            <br />
            Każde danie to arcydzieło sztuki gastronomicznej.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button 
              onClick={() => {
                const element = document.querySelector('#rezerwacje');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-white/15 backdrop-blur-sm text-white px-8 py-3 text-base font-medium tracking-wide border border-white/25 transition-all duration-300 hover:bg-white hover:text-black focus:outline-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ZAREZERWUJ STOLIK
            </motion.button>
            
            <motion.button 
              onClick={() => {
                const element = document.querySelector('#menu');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-transparent text-white px-8 py-3 text-base font-medium tracking-wide border border-white/25 transition-all duration-300 hover:bg-white/10 focus:outline-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ZOBACZ MENU
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Simple Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center text-white/50">
          <span className="text-xs font-light tracking-widest mb-2">PRZEWIŃ W DÓŁ</span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </motion.div>
    </section>
  );
} 