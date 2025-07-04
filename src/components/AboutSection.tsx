'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O nas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Od ponad dekady tworzymy wyjątkowe doświadczenia kulinarne, łącząc tradycję z nowoczesnością
          </p>
        </motion.div>

        {/* Main content - Image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Elegancka restauracja z zewnątrz z klasyczną fasadą"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-gray-300">Lat doświadczenia</div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Nasza Historia
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Premium Restaurant powstało w 2010 roku z pasji do wyjątkowej kuchni. 
                Od samego początku naszym celem było stworzenie miejsca, gdzie każdy 
                posiłek staje się niezapomnianym doświadczeniem.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Filozofia Kulinarna
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Łączymy tradycyjne receptury z nowoczesnymi technikami kulinarnymi. 
                Każde danie to opowieść o pasji, tradycji i innowacji. Używamy 
                tylko najwyższej jakości składników od lokalnych dostawców.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Szef Kuchni
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Chef Michał Kowalski, z 15-letnim doświadczeniem w najlepszych 
                restauracjach Europy, prowadzi naszą kuchnię z pasją i precyzją. 
                Każde danie to jego osobiste arcydzieło.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">15+</div>
            <div className="text-gray-600 font-medium">Lat doświadczenia</div>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">4.9</div>
            <div className="text-gray-600 font-medium">Ocena gości</div>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">2023</div>
            <div className="text-gray-600 font-medium">Michelin Guide</div>
          </div>
        </motion.div>

        {/* Chef section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-black text-white rounded-3xl p-12 md:p-16 mb-20 relative overflow-hidden"
        >
          {/* Białe krawędzie dekoracyjne - tylko lewy górny i prawy dolny róg */}
          <div className="absolute top-8 left-8 w-1 h-16 bg-white"></div>
          <div className="absolute top-8 left-8 w-16 h-1 bg-white"></div>
          <div className="absolute bottom-8 right-8 w-1 h-16 bg-white"></div>
          <div className="absolute bottom-8 right-8 w-16 h-1 bg-white"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-white"></div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Chef Michał Kowalski
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Z pasją do kuchni od najmłodszych lat. Uczył się u najlepszych 
                szefów kuchni w Paryżu, Londynie i Barcelonie. Jego dania to 
                połączenie tradycji z nowoczesnością.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">15 lat doświadczenia</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Michelin Guide</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Europejskie doświadczenie</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Chef Michał Kowalski przy pracy w kuchni"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Doświadcz wyjątkowej atmosfery i smaków
          </p>
          <a
            href="#rezerwacje"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Zarezerwuj stolik
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 