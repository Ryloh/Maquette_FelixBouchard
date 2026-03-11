import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviewsRow1 = [
  { name: "Marc Legrand", text: "J'ai fait appel à Félix Bouchard pour l'élagage d'un saule très mal placé... Le travail à été très pro, efficace et parfait. Je vous le conseille sans hésiter.", date: "Il y a 2 mois" },
  { name: "Marc Antoine PAULMIER", text: "Mr Bouchard m’a été recommandé et je recommande à mon tour vivement ses services. Très bon contact, réactif, prestations très correct et exécution propre.", date: "Il y a un mois" },
  { name: "Geneviève Debackère", text: "Félix est intervenu très rapidement après l’accord du devis. Le travail d’élagage de plusieurs arbres dans mon jardin a été très efficace et professionnel. Le résultat est parfait.", date: "Il y a 3 mois" },
  { name: "Christian PIGNOLET", text: "Très pro, sympathique, efficacité (en environnement contraint dans mon cas du fait des structures existantes : spa, abris, etc.), rapidité et sécurité... Je recommande !", date: "Il y a 3 mois" },
  { name: "Isabelle Roze", text: "Félix intervient pour la 2 ème fois pour l'élagage de nos arbres fruitiers. J'apprécie ses conseils et le travail est très bien réalisé. Je lui fais totalement confiance.", date: "Il y a 3 mois" }
];

const reviewsRow2 = [
  { name: "Nicolas Tagnon", text: "Il a effectué un travail de qualité, respectant les délais et à des conditions raisonnables. Il m'a également donné de nombreux conseils sur la tenue et l'entretien des arbres restants.", date: "Il y a 5 mois" },
  { name: "Hélène Arlabosse", text: "Je recommande vivement Félix Bouchard. Il est de très bon conseil, comprend exactement les attentes. Le chantier a été très bien réalisé et laissé très propre.", date: "Il y a 5 mois" },
  { name: "Franck Labarthe", text: "De bon conseil, consignes de coupe respectées et prix compétitif. Parfait. On a trouvé notre élagueur pour de nombreuses années!", date: "Il y a un an" },
  { name: "Blandine Meurisse", text: "Félix est force de conseil et de proposition pour répondre à nos besoins tout en respectant l'équilibre des arbres. Le jardin a été laissé propre après son intervention.", date: "Il y a un an" },
  { name: "Cathy Flavigny", text: "Nous sommes entièrement satisfait du travail réalisé, nous avons eu le devis rapidement et une date d'intervention rapide également. Très pro, je recommande à 100%.", date: "Il y a un an" }
];

const ReviewCard = ({ review }: { review: any }) => (
  <div className="flex-none w-[320px] md:w-[400px] glass p-8 rounded-2xl mx-4 group hover:border-[#d4f453]/40 transition-colors duration-500 cursor-default">
    <div className="flex items-center gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#d4f453] text-[#d4f453]" />
      ))}
    </div>
    <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-6 italic">
      "{review.text}"
    </p>
    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
      <span className="text-white font-medium uppercase tracking-wider text-xs">{review.name}</span>
      <span className="text-white/40 text-xs">{review.date}</span>
    </div>
  </div>
);

export default function Reviews() {
  return (
    <section className="relative w-full bg-[#080808] py-32 overflow-hidden flex flex-col items-center">
      {/* Background elements */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#d4f453]/5 blur-[150px] rounded-full opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#d4f453]/50" />
            <span className="text-[#d4f453] text-sm font-bold tracking-widest uppercase">Ils nous font confiance</span>
            <div className="w-12 h-px bg-[#d4f453]/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white">
            Avis <span className="text-white/40">Clients</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row 1 (Left) */}
      <div className="relative w-full flex overflow-hidden mb-8 group">
        <div className="flex animate-marquee-left group-hover:[animation-play-state:paused] w-max">
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...reviewsRow1, ...reviewsRow1].map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Right) */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-marquee-right group-hover:[animation-play-state:paused] w-max">
          {[...reviewsRow2, ...reviewsRow2].map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
      
      {/* Gradient fades on left and right to blend with background */}
      <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#080808] to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#080808] to-transparent pointer-events-none z-20" />
    </section>
  );
}
