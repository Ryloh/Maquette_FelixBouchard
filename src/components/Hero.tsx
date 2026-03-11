import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-[#080808] overflow-hidden">
      {/* Background Image */}
      <img 
        src="/2025-06-04 (1).jpg" 
        alt="Félix Bouchard en action" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[100vh] md:h-[100vw] object-cover object-center opacity-90 rotate-0 md:rotate-90"
      />
      
      {/* Overlay gradient for better text readability - Modifiez l'opacité ici (ex: /10 pour 10%) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 via-transparent to-[#080808]/70 mix-blend-multiply pointer-events-none" />

      {/* Integrated name text - Watermark */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold tracking-widest text-white/20 mix-blend-overlay uppercase select-none w-full text-center pointer-events-none">
        Bouchard
      </h1>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-20">
        <div className="flex items-center gap-6">
          <div className="w-32 h-auto opacity-100">
            <img src="/logoNoBg.png" alt="Logo Félix Bouchard" className="w-full h-auto object-contain" />
          </div>
          <div className="flex flex-col border-l border-white/20 pl-4 md:pl-6 leading-tight">
            <span className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Urgence 24/7</span>
            <a href="tel:0687225001" className="text-white text-sm md:text-base font-medium hover:text-[#d4f453] transition-colors whitespace-nowrap">06 87 22 50 01</a>
          </div>
        </div>
        <button className="flex items-center gap-3 uppercase tracking-[0.2em] text-sm text-white hover:text-[#d4f453] transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform">Menu</span>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Main Content */}
      <div className="absolute bottom-12 left-6 md:bottom-24 md:left-24 z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-10 max-w-3xl text-white/90">
            La nature mérite <br /> un <strong className="font-semibold text-white">artisan</strong>. <br /> Pas une machine.
          </h2>
          <button className="glass px-8 py-4 uppercase tracking-[0.15em] text-sm text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            Demander un devis
          </button>
        </motion.div>
      </div>
    </div>
  );
}
