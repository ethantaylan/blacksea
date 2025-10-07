"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

interface VisualItem {
  key: number;
  label: string;
  description: string;
  imageUrl: string;
}

const visualData: VisualItem[] = [
  {
    key: 1,
    label: "Innovation",
    description:
      "Nous repoussons constamment les limites pour créer des solutions web avant-gardistes qui vous donnent un avantage concurrentiel. Chaque projet est une opportunité d'explorer de nouvelles technologies et approches créatives pour transformer vos idées en réalités digitales exceptionnelles.",
    imageUrl:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  },
  {
    key: 2,
    label: "Transparence",
    description:
      "La communication claire et honnête guide chacun de nos projets. Vous êtes toujours informé de l'avancement de votre projet à chaque étape. Nous croyons qu'une collaboration réussie repose sur la confiance mutuelle et un dialogue ouvert entre nos équipes et nos clients.",
    imageUrl:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    key: 3,
    label: "Excellence",
    description:
      "Nous visons la qualité dans chaque détail, des lignes de code à l'expérience utilisateur finale. Chaque projet bénéficie de notre engagement envers l'excellence et notre attention méticuleuse aux détails qui font toute la différence dans le résultat final.",
    imageUrl:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    key: 4,
    label: "Collaboration",
    description:
      "Le succès se construit ensemble, avec nos clients et partenaires. Votre vision guide notre travail et nous travaillons en étroite collaboration pour garantir que le résultat final dépasse vos attentes et réponde parfaitement à vos objectifs business.",
    imageUrl:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
];

const ImageReveal: React.FC = () => {
  const [focusedItem, setFocusedItem] = useState<VisualItem | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const updateScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const onMouseTrack = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const onHoverActivate = (item: VisualItem) => {
    setFocusedItem(item);
  };

  const onHoverDeactivate = () => {
    setFocusedItem(null);
  };

  return (
    <div
      className="relative mx-auto w-full min-h-fit bg-background rounded-md overflow-hidden"
      onMouseMove={onMouseTrack}
      onMouseLeave={onHoverDeactivate}
    >
      {visualData.map((item) => (
        <div
          key={item.key}
          className="cursor-pointer relative sm:flex items-center justify-between"
          onMouseEnter={() => onHoverActivate(item)}
        >
          <h2
            className={`newFont uppercase md:text-4xl sm:text-2xl text-xl font-semibold sm:py-6 py-2 leading-[100%] relative transition-colors duration-300 ${
              focusedItem?.key === item.key
                ? "mix-blend-difference z-20 text-gray-300"
                : "text-foreground"
            }`}
          >
            {item.label}
          </h2>

          <div
            className={`h-[2px] dark:bg-white bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
              focusedItem?.key === item.key ? "w-full" : "w-0"
            }`}
          />
        </div>
      ))}

      {isLargeScreen && focusedItem && (
        <motion.div
          className="fixed p-6 z-30 w-[450px] rounded-2xl pointer-events-none shadow-2xl bg-black border border-neutral-800 overflow-hidden"
          style={{
            left: smoothX,
            top: smoothY,
            x: "-50%",
            y: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">
              {focusedItem.label}
            </h3>
            <p className="text-base text-gray-200 leading-relaxed">
              {focusedItem.description}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageReveal;
