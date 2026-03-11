import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] border-t border-white/10 pt-24 pb-12 relative z-10 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          
          {/* Brand & Slogan */}
          <div className="flex flex-col items-start">
            <div className="w-32 mb-8 opacity-100">
              <img src="/logoNoBg.png" alt="Logo Félix Bouchard" className="w-full h-auto" />
            </div>
            <p className="text-white/50 font-light max-w-sm">
              La nature mérite un artisan. Pas une machine. <br/>
              Élagage, abattage et soins aux arbres.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Contact</h4>
            <a href="tel:0687225001" className="flex items-center gap-4 text-white/70 hover:text-[#d4f453] transition-colors group">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-light">06 87 22 50 01</span>
            </a>
            <a href="mailto:felixbouchard.pro@gmail.com" className="flex items-center gap-4 text-white/70 hover:text-[#d4f453] transition-colors group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-light">felixbouchard.pro@gmail.com</span>
            </a>
            <div className="flex items-start gap-4 text-white/70 hover:text-[#d4f453] transition-colors">
              <MapPin className="w-5 h-5 mt-1 shrink-0" />
              <span className="font-light leading-relaxed">24 Rue des Tamaris,<br/>78114 Magny-les-Hameaux</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6 md:items-end">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Réseaux</h4>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#d4f453] hover:border-[#d4f453] hover:bg-[#d4f453]/10 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#d4f453] hover:border-[#d4f453] hover:bg-[#d4f453]/10 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wider text-white/30 uppercase">
          <p>Copyright © {new Date().getFullYear()} Félix Bouchard — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
