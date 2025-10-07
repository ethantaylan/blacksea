/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Work from "../../assets/work.mp4";
import { DotBackground } from "../../components/DotBackground/DotBackground";
import { Collapse } from "../Home/components/Collapse/Collapse";

const valeurs = [
  {
    title: "Innovation",
    content:
      "Nous repoussons constamment les limites pour créer des solutions web avant-gardistes qui vous donnent un avantage concurrentiel.",
  },
  {
    title: "Transparence",
    content:
      "La communication claire et honnête guide chacun de nos projets. Vous êtes toujours informé de l'avancement à chaque étape.",
  },
  {
    title: "Excellence",
    content:
      "Nous visons la qualité dans chaque détail, des lignes de code à l'expérience utilisateur finale.",
  },
  {
    title: "Collaboration",
    content:
      "Le succès se construit ensemble. Votre vision guide notre travail pour dépasser vos attentes.",
  },
];

const faq = [
  {
    question: "Comment se déroule un projet ?",
    answer:
      "Nous démarrons par un appel de découverte pour comprendre vos besoins, puis nous créons une proposition sur mesure. Ensuite, nous développons votre projet en collaboration étroite avec vous.",
  },
  {
    question: "Quels sont vos délais de livraison ?",
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine prend généralement 2-4 semaines, tandis qu'un e-commerce peut nécessiter 6-8 semaines.",
  },
  {
    question: "Proposez-vous un support après livraison ?",
    answer:
      "Oui, nous offrons un support continu pour maintenir et faire évoluer votre site web. Plusieurs formules sont disponibles selon vos besoins.",
  },
  {
    question: "Travaillez-vous avec des petites entreprises ?",
    answer:
      "Absolument ! Nous accompagnons des entreprises de toutes tailles, des startups aux grandes entreprises établies.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="min-h-[70vh] relative flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DotBackground />
        <div className="container mx-auto px-4 md:px-0 relative z-10">
          <motion.div
            className="max-w-5xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-sm md:text-lg uppercase tracking-wider mb-6 text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              À propos de nous
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-6xl md:text-4xl lg:text-5xl font-black leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nous créons des expériences digitales exceptionnelles
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Une agence web passionnée qui transforme votre vision en réalité
              digitale, avec créativité et expertise technique.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Notre Mission Section */}
      <section className="min-h-[400px] h-auto text-white py-12 px-4 md:px-0">
        <motion.div
          className="shadow-xl bg-black rounded-3xl p-8 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <video
                className="rounded-3xl w-full h-[400px] object-cover grayscale"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={Work} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Notre Mission
              </h2>
              <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-6">
                Nous croyons que chaque entreprise mérite une présence digitale
                qui reflète son unicité et son ambition.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Notre mission est de créer des expériences web exceptionnelles
                qui dépassent les attentes, en alliant{" "}
                <span className="text-white font-semibold">
                  expertise technique, créativité et stratégie
                </span>
                .
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Nos Valeurs Section */}
      <section className="py-20 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-16">Nos Valeurs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={valeur.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 md:p-10 border border-neutral-200 hover:border-neutral-300 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
                    {valeur.title}
                  </h3>
                  <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                    {valeur.content}
                  </p>
                </div>

                {/* Animated border effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="min-h-[400px] text-white py-12 px-4 md:px-0 mb-20">
        <motion.div
          className="shadow-xl bg-black rounded-3xl p-8 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12">FAQ</h2>

          <div className="flex flex-col gap-8">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-gray-800 pb-8 last:border-b-0"
              >
                <h3 className="text-xl md:text-3xl font-semibold mb-4">
                  {item.question}
                </h3>
                <p className="text-base md:text-xl text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
