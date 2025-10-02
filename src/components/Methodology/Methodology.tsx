import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  delay: number;
}

const ICON_SIZE = 40;

const steps: TimelineStep[] = [
  {
    id: 1,
    title: "Premier Contact",
    description:
      "Discussion initiale pour comprendre votre vision et vos objectifs. Nous établissons une connexion pour mieux cerner vos attentes et vous présenter notre approche. Ce premier échange permet de poser les bases d’une collaboration efficace.",
    icon: <MdChatBubbleOutline size={ICON_SIZE} />,
    delay: 0,
  },
  {
    id: 2,
    title: "Analyse des Besoins",
    description:
      "Définition détaillée de vos besoins, étude de marché et analyse de la concurrence pour positionner votre projet efficacement. Nous identifions les enjeux spécifiques et les opportunités afin de proposer des solutions adaptées à votre secteur.",
    icon: <MdLightbulbOutline size={ICON_SIZE} />,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Planification Stratégique",
    description:
      "Élaboration d'une stratégie sur mesure, établissement d'un planning et définition des objectifs clés de performance. Nous priorisons les actions et anticipons les risques pour garantir une exécution optimale du projet.",
    icon: <MdBarChart size={ICON_SIZE} />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Développement",
    description:
      "Mise en œuvre de la solution avec un processus de développement agile, incluant des points réguliers pour valider les avancées. Notre équipe technique assure la qualité et la conformité des livrables à chaque étape.",
    icon: <MdConstruction size={ICON_SIZE} />,
    delay: 0.6,
  },
  {
    id: 5,
    title: "Lancement",
    description:
      "Déploiement de votre projet avec une phase de tests approfondie pour garantir une mise en production sans accroc. Nous vous accompagnons lors du lancement et assurons la formation des utilisateurs si nécessaire.",
    icon: <MdRocketLaunch size={ICON_SIZE} />,
    delay: 0.8,
  },
  {
    id: 6,
    title: "Support Continu",
    description:
      "Accompagnement post-lancement, maintenance évolutive et support technique pour garantir la pérennité de votre projet. Nous restons disponibles pour répondre à vos besoins et assurer la croissance de votre solution.",
    icon: <MdSupportAgent size={ICON_SIZE} />,
    delay: 1,
  },
];

export const Methodology = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(
              entry.target.getAttribute("data-step-id") || "0"
            );
            setCompletedSteps((prev) => {
              if (!prev.includes(stepId)) {
                const newSteps = [...prev, stepId];
                return newSteps;
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    const timer = setTimeout(() => {
      stepRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <MidText
        title="Notre démarche"
        subtitle="Un processus structuré pour garantir le succès de votre projet."
      />

      <Header title={"Méthodologie"} />

      <div className="relative">
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200" />

        <div
          className="absolute left-[50%] top-0 w-px bg-black transition-all duration-700 ease-out"
          style={{
            height:
              completedSteps.length > 0
                ? `${(completedSteps.length / steps.length) * 100}%`
                : "0%",
          }}
        />

        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);

          return (
            <motion.div
              key={step.id}
              ref={(el) => (stepRefs.current[index] = el)}
              data-step-id={step.id}
              className="relative grid grid-cols-2 gap-8 mb-40 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: step.delay }}
              viewport={{ once: true }}
            >
              <div
                className={`${
                  index % 2 === 0 ? "text-right pr-8" : "col-start-2 pl-8"
                }`}
              >
                <div className="me-10 ms-10">
                  <h3 className="text-3xl font-medium mb-4">{step.title}</h3>
                  <p className="text-xl text-gray-400">{step.description}</p>
                </div>
              </div>

              <motion.div
                className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-26 h-26 rounded-full cursor-pointer transition-all duration-500 shadow-lg bg-black`}
                onClick={() => {
                  setCompletedSteps((prev) => {
                    if (!prev.includes(step.id)) {
                      return [...prev, step.id];
                    }
                    return prev.filter((id) => id !== step.id);
                  });
                }}
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ rotate: -10, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <motion.div
                  className={`transition-colors duration-500 ${
                    isCompleted ? "text-white" : "text-gray-400"
                  }`}
                  transition={{
                    rotate: { duration: 0.5 },
                    scale: { duration: 0.2 },
                  }}
                >
                  {step.icon}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
