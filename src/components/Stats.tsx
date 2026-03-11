import { motion } from 'framer-motion';

const stats = [
  { value: "12+", label: "Années d'expérience" },
  { value: "850+", label: "Arbres entretenus" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "24h", label: "Réponse garantie" },
];

export default function Stats() {
  return (
    <section className="w-full bg-[#080808] border-y border-white/10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center py-20 px-8 hover:bg-white/5 transition-colors duration-500 group cursor-default"
          >
            <span className="text-5xl md:text-7xl font-bold text-white mb-6 group-hover:scale-105 transition-transform duration-500 group-hover:text-[#d4f453]">
              {stat.value}
            </span>
            <span className="text-sm tracking-widest uppercase text-white/50 text-center">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
