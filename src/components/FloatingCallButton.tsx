import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling a bit
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-6 z-50 md:hidden"
        >
          <a
            href="tel:0687225001"
            className="flex items-center justify-center w-14 h-14 bg-[#d4f453] text-black rounded-full shadow-lg shadow-[#d4f453]/20 active:scale-95 transition-transform"
            aria-label="Appeler Félix Bouchard"
          >
            <Phone className="w-6 h-6 fill-current" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4f453] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#d4f453]"></span>
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
