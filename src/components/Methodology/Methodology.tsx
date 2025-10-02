import { motion } from "framer-motion";
import {
  MdBarChart,
  MdChatBubbleOutline,
  MdConstruction,
  MdLightbulbOutline,
  MdRocketLaunch,
  MdSupportAgent,
} from "react-icons/md";
import { Header } from "../Header/Header";
import { MidText } from "../MidText/MidText";

interface MethodologyStep {
  id: number;
  title: string;
  description: string;
  IconComponent: React.ComponentType<{ size: number }>;
  delay: number;
}

const steps: MethodologyStep[] = [
  {
    id: 1,
    title: "Premier Contact",
    description:
      "Discussion initiale pour comprendre votre vision et vos objectifs. Nous établissons une connexion pour mieux cerner vos attentes et vous présenter notre approche. Ce premier échange permet de poser les bases d'une collaboration efficace.",
    IconComponent: MdChatBubbleOutline,
    delay: 0,
  },
  {
    id: 2,
    title: "Analyse des Besoins",
    description:
      "Définition détaillée de vos besoins, étude de marché et analyse de la concurrence pour positionner votre projet efficacement. Nous identifions les enjeux spécifiques et les opportunités afin de proposer des solutions adaptées à votre secteur.",
    IconComponent: MdLightbulbOutline,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Planification Stratégique",
    description:
      "Élaboration d'une stratégie sur mesure, établissement d'un planning et définition des objectifs clés de performance. Nous priorisons les actions et anticipons les risques pour garantir une exécution optimale du projet.",
    IconComponent: MdBarChart,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Développement",
    description:
      "Mise en œuvre de la solution avec un processus de développement agile, incluant des points réguliers pour valider les avancées. Notre équipe technique assure la qualité et la conformité des livrables à chaque étape.",
    IconComponent: MdConstruction,
    delay: 0.6,
  },
  {
    id: 5,
    title: "Lancement",
    description:
      "Déploiement de votre projet avec une phase de tests approfondie pour garantir une mise en production sans accroc. Nous vous accompagnons lors du lancement et assurons la formation des utilisateurs si nécessaire.",
    IconComponent: MdRocketLaunch,
    delay: 0.8,
  },
  {
    id: 6,
    title: "Support Continu",
    description:
      "Accompagnement post-lancement, maintenance évolutive et support technique pour garantir la pérennité de votre projet. Nous restons disponibles pour répondre à vos besoins et assurer la croissance de votre solution.",
    IconComponent: MdSupportAgent,
    delay: 1,
  },
];

export const Methodology = () => {
  return (
    <section className="py-12 md:py-24 bg-white px-4 md:px-0">
      <MidText
        title="Notre démarche"
        subtitle="Un processus structuré pour garantir le succès de votre projet."
      />

      <Header title={"Méthodologie"} />

      {/* Desktop Timeline */}
      <div className="hidden md:block relative mt-16">
        <div className="grid grid-cols-2 gap-x-16 lg:gap-x-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`relative flex flex-col items-start gap-4 ${
                index < steps.length - 2 ? "mb-16" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: step.delay }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="flex items-center justify-center shadow-lg w-16 h-16 rounded-full bg-black text-white relative z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <step.IconComponent size={28} />
                </motion.div>
              </div>

              <div>
                <h3 className="text-3xl font-medium mb-4 relative">
                  <small className="text-[15px] absolute font-bold text-gray-500 -left-10 rounded-full w-8 h-8 flex items-center justify-center top-1/2 -translate-y-1/2">
                    {step.id}
                  </small>
                  {step.title}
                </h3>
                <p className="text-xl text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile - Sans timeline */}
      <div className="md:hidden grid grid-cols-1 gap-12 mt-12">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: step.delay }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <step.IconComponent size={24} />
              </motion.div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
