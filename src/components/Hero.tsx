import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Star, X } from 'lucide-react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "Prestations", href: "#" },
    { name: "L'Artisan", href: "#" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="relative w-full h-screen bg-[#080808] overflow-hidden">
      {/* Background Image */}
      <img 
        src="/2025-06-04 (1).jpg" 
        alt="Félix Bouchard en action" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[100vh] md:h-[100vw] object-cover object-center opacity-90 rotate-0 md:rotate-90"
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 via-transparent to-[#080808]/70 mix-blend-multiply pointer-events-none" />

      {/* Integrated name text - Watermark */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold tracking-widest text-white/20 mix-blend-overlay uppercase select-none w-full text-center pointer-events-none">
        Bouchard
      </h1>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-20">
        <div className="flex items-center gap-6">
          <div className="w-20 md:w-24 h-auto opacity-100">
            <img src="/logoNoBg.png" alt="Logo Félix Bouchard" className="w-full h-auto object-contain" />
          </div>
          <div className="flex flex-col border-l border-white/20 pl-4 md:pl-6 leading-tight font-sans">
            <span className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Urgence 24/7</span>
            <a href="tel:0687225001" className="text-white text-sm md:text-base font-medium hover:text-[#d4f453] transition-colors whitespace-nowrap">06 87 22 50 01</a>
          </div>
        </div>

        {/* Centered Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/70 hover:text-[#d4f453] text-sm uppercase tracking-widest font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden flex items-center gap-3 uppercase tracking-[0.2em] text-sm text-white hover:text-[#d4f453] transition-colors group z-10"
        >
          <span>Menu</span>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#080808] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <img src="/logoNoBg.png" alt="Logo" className="w-20 h-auto" />
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#d4f453] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bold uppercase tracking-widest text-white hover:text-[#d4f453] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Urgence 24/7</p>
              <a href="tel:0687225001" className="text-2xl font-bold text-[#d4f453]">06 87 22 50 01</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <button className="glass px-8 py-4 uppercase tracking-[0.15em] text-sm text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              Demander un devis
            </button>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-white/90 text-sm md:text-base font-bold">5,0</span>
                  {/* Google Logo */}
                  <svg className="w-5 h-5 bg-white rounded-full p-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="text-white/50 font-light text-sm">(46 avis)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
