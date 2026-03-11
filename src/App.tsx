import { useEffect } from 'react';
import Lenis from 'lenis';

import GridBackground from './components/GridBackground';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import './App.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <GridBackground />
      <FloatingCallButton />
      <div className="fixed inset-0 z-0">
        <Hero />
      </div>
      
      {/* Spacer exactly 100vh so hero takes full viewport, and content appears immediately on scroll */}
      <div className="relative h-[100vh] z-10 pointer-events-none" />
      
      <main className="relative z-20 bg-[#080808] w-full shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <About />
        <Stats />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
