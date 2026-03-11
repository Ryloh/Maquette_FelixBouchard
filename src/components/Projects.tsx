import { Search } from 'lucide-react';

const projects = [
  {
    num: "01",
    title: "ÉLAGAGE GRANDE HAUTEUR",
    image: "/2024-05-17 (3).jpg"
  },
  {
    num: "02",
    title: "ABATTAGE TECHNIQUE",
    image: "/2025-06-29 (1).jpg"
  },
  {
    num: "03",
    title: "TAILLE DOUCE & SOINS",
    image: "/2025-07-08.jpg"
  },
  {
    num: "04",
    title: "DESSOUCHAGE & BROYAGE",
    image: "/2025-10-29.jpg"
  }
];

export default function Projects() {
  return (
    <section className="w-full h-[80vh] bg-[#080808] flex flex-col md:flex-row relative z-10 overflow-hidden">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="relative flex-1 h-[20vh] md:h-full border-t md:border-t-0 md:border-l border-white/10 group cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[1.8] overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 grayscale-[20%]"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 transition-colors duration-700 group-hover:bg-black/20" />

          {/* Search Glass Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/30 backdrop-blur-md bg-white/5 flex items-center justify-center opacity-0 scale-50 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 z-10 pointer-events-none">
            <Search className="w-8 h-8 text-white" />
          </div>

          {/* Texts */}
          <div className="absolute inset-0 flex md:flex-row flex-col justify-between p-6 md:p-8 pointer-events-none">
            {/* Number */}
            <div className="text-[#d4f453] font-bold tracking-widest text-sm md:text-base">
              {project.num}
            </div>
            
            {/* Title - Vertical on desktop, horizontal on mobile */}
            <div className="mt-auto md:mt-0 md:ml-auto">
              {/* Desktop */}
              <div className="hidden md:flex flex-col items-center h-full justify-end font-bold tracking-[0.2em] transform rotate-180 writing-vertical-rl text-lg whitespace-nowrap text-white/70 group-hover:text-white transition-colors duration-500">
                {project.title}
              </div>
              {/* Mobile */}
              <div className="md:hidden text-white/90 font-bold tracking-[0.2em] text-sm group-hover:text-white transition-colors duration-500">
                {project.title}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
