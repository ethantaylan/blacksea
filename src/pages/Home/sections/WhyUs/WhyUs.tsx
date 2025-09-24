/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`flex flex-col items-center text-center ${className}`}
  >
    <motion.div
      className="w-24 h-24 rounded-full bg-neutral-100 flex items-center justify-center mb-6 relative"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-20 h-20 rounded-full bg-neutral-50 flex items-center justify-center">
        {icon}
      </div>
      <div className="absolute w-full h-full rounded-full border border-neutral-200 animate-ping" />
    </motion.div>
    <h3 className="text-2xl font-semibold mb-4 text-neutral-900">{title}</h3>
    <p className="text-neutral-600 max-w-sm">{description}</p>

    <motion.button
      whileHover={{ x: 10 }}
      className="mt-6 cursor-pointer border border-neutral-200 rounded-full py-3 px-4 text-neutral-900 flex items-center gap-2 group"
    >
      En savoir plus
      <div className="bg-base-200 rounded-full px-2">
        <IoIosArrowRoundForward size={26} />
      </div>
    </motion.button>
  </motion.div>
);

export default function WhyUs() {
  return (
    <section className="bg-white min-h-screen text-neutral-900 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-neutral-900">
            Pourquoi Choisir Blacksea pour
            <span className="block text-neutral-400 mt-2">
              Votre Voyage Digital
            </span>
          </h2>
          <p className="text-neutral-600 max-w-10/12 mb-5 text-xl mx-auto">
            Collaborer avec Blacksea offre de nombreux avantages. Bénéficiez
            d&apos;une meilleure visibilité de marque, d&apos;un engagement
            client accru et d&apos;un meilleur ROI. Nos solutions sur mesure
            sont conçues pour répondre à vos besoins spécifiques, garantissant
            un succès durable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            }
            title="Une Expertise qui Génère des Résultats"
            description="Notre équipe de professionnels chevronnés apporte des années d'expérience et d'expertise à votre service."
          />
          <FeatureCard
            className="border-l border-r border-neutral-200"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            }
            title="Solutions Sur Mesure"
            description="Nous comprenons que chaque entreprise est unique. C'est pourquoi nos solutions sont personnalisées."
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            title="Design Web Innovant"
            description="Laissez une impression durable sur votre audience avec nos services de design web haut de gamme."
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            }
            title="Approche Mobile-First"
            description="Dans un monde centré sur le mobile, nous priorisons le design mobile-first pour garantir l'efficacité de votre site."
          />
          <FeatureCard
            className="border-l border-r border-neutral-200"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            title="Stratégies Marketing"
            description="Nos stratégies marketing basées sur les données nous permettent de cibler précisément la bonne audience."
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            }
            title="Référencement Naturel (SEO)"
            description="Boostez votre visibilité en ligne grâce à nos techniques SEO expertes."
          />
        </div>
      </div>
    </section>
  );
}
