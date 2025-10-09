import { motion } from "framer-motion";
import {
  MdBarChart,
  MdChatBubbleOutline,
  MdConstruction,
  MdLightbulbOutline,
  MdRocketLaunch,
  MdSupportAgent,
} from "react-icons/md";
import { useLanguage } from "../../contexts/LanguageContext";
import { Header } from "../Header/Header";
import { MidText } from "../MidText/MidText";

interface MethodologyStep {
  id: number;
  IconComponent: React.ComponentType<{ size: number }>;
  delay: number;
}

const stepIcons: MethodologyStep[] = [
  {
    id: 1,
    IconComponent: MdChatBubbleOutline,
    delay: 0,
  },
  {
    id: 2,
    IconComponent: MdLightbulbOutline,
    delay: 0.2,
  },
  {
    id: 3,
    IconComponent: MdBarChart,
    delay: 0.4,
  },
  {
    id: 4,
    IconComponent: MdConstruction,
    delay: 0.6,
  },
  {
    id: 5,
    IconComponent: MdRocketLaunch,
    delay: 0.8,
  },
  {
    id: 6,
    IconComponent: MdSupportAgent,
    delay: 1,
  },
];

export const Methodology = () => {
  const { t } = useLanguage();

  const steps = [
    { title: t.methodology.steps.step1Title, description: t.methodology.steps.step1Desc },
    { title: t.methodology.steps.step2Title, description: t.methodology.steps.step2Desc },
    { title: t.methodology.steps.step3Title, description: t.methodology.steps.step3Desc },
    { title: t.methodology.steps.step4Title, description: t.methodology.steps.step4Desc },
    { title: t.methodology.steps.step5Title, description: t.methodology.steps.step5Desc },
    { title: t.methodology.steps.step6Title, description: t.methodology.steps.step6Desc },
  ];

  return (
    <section className="py-12 md:py-24 bg-white px-4 md:px-0">
      <MidText
        title={t.methodology.sectionTitle}
        subtitle={t.methodology.sectionSubtitle}
      />

      <Header title={t.methodology.title} />

      {/* Desktop Timeline */}
      <div className="hidden md:block relative mt-16">
        <div className="grid grid-cols-2 gap-x-16 lg:gap-x-20">
          {steps.map((step, index) => {
            const IconComponent = stepIcons[index].IconComponent;
            return (
              <motion.div
                key={index}
                className={`relative flex flex-col items-start gap-4 ${
                  index < steps.length - 2 ? "mb-16" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: stepIcons[index].delay }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.div
                    className="flex items-center justify-center shadow-lg w-16 h-16 rounded-full bg-black text-white relative z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={28} />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-3xl font-medium mb-4 relative">
                    <small className="text-[15px] absolute font-bold text-gray-500 -left-10 rounded-full w-8 h-8 flex items-center justify-center top-1/2 -translate-y-1/2">
                      {index + 1}
                    </small>
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile - Sans timeline */}
      <div className="md:hidden grid grid-cols-1 gap-12 mt-12">
        {steps.map((step, index) => {
          const IconComponent = stepIcons[index].IconComponent;
          return (
            <motion.div
              key={index}
              className="flex flex-col items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: stepIcons[index].delay }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={24} />
                </motion.div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
