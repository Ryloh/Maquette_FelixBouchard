import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a
        href="tel:0687225001"
        className="flex items-center gap-3 px-4 py-3 bg-[#d4f453] text-black rounded-full shadow-2xl shadow-[#d4f453]/40 active:scale-95 transition-transform font-bold"
        aria-label="Appeler Félix Bouchard"
      >
        <div className="relative flex h-5 w-5 items-center justify-center">
          <Phone className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-black/20"></span>
          </span>
        </div>
        <span className="text-sm uppercase tracking-wider">Appeler</span>
      </a>
    </div>
  );
}
