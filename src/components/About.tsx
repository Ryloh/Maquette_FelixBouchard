import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-[#080808] flex items-center py-32 overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[15vw] text-white/5 mix-blend-overlay uppercase tracking-widest pointer-events-none whitespace-nowrap z-0">
        Élagueur
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <div className="text-[#d4f453] text-sm font-bold tracking-widest uppercase mb-8 flex items-center gap-4">
              <span>01</span>
              <div className="w-16 h-px bg-[#d4f453]/50" />
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest mb-12">
              À Propos <br />
              <span className="text-white/40">De Félix</span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg font-light text-white/70 leading-relaxed max-w-xl mb-12">
              <p>
                Passionné par le végétal depuis mon plus jeune âge, j'ai choisi de faire de l'arbre mon métier et ma vocation. Animé par le respect profond de la nature, je privilégie des méthodes de taille douce qui préservent la santé et l'esthétisme de chaque spécimen.
              </p>
              <p>
                Chaque intervention est pensée sur-mesure, qu'il s'agisse d'un entretien délicat de couronne, d'un démontage complexe en milieu restreint, ou d'une taille architecturale exigeante. L'artisanat rencontre l'environnement.
              </p>
            </div>
            
            <button className="flex items-center gap-4 group">
              <span className="uppercase tracking-[0.15em] text-sm text-white/90 group-hover:text-[#d4f453] transition-colors">
                Voir mes certifications
              </span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#d4f453]/50 group-hover:bg-[#d4f453]/10 transition-all duration-300 relative overflow-hidden">
                <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#d4f453] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </div>
            </button>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-[4/5]">
              <img 
                src="/2024-10-19.jpg" 
                alt="Félix Bouchard au travail de précision" 
                className="w-full h-full object-cover grayscale-[30%] contrast-125"
              />
              {/* Offset frame */}
              <div className="absolute -inset-4 md:-inset-6 lg:-inset-8 border border-white/10 pointer-events-none z-[-1]" />
            </div>
            {/* Subtle glow/shadow for depth */}
            <div className="absolute inset-0 bg-[#d4f453]/5 blur-[120px] z-[-2] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
