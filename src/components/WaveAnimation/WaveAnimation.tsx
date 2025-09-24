import { motion } from "framer-motion";

export const WaveAnimation = () => {
  return (
    <div className="w-full h-24 overflow-hidden">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Première vague */}
        <motion.path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"
          fill="rgba(255,255,255,0.1)"
          initial={{ y: 100 }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />

        {/* Deuxième vague */}
        <motion.path
          d="M0,50 Q300,100 600,50 T1200,50 L1200,100 L0,100 Z"
          fill="rgba(255,255,255,0.08)"
          initial={{ y: 100 }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Troisième vague */}
        <motion.path
          d="M0,50 Q300,20 600,50 T1200,50 L1200,100 L0,100 Z"
          fill="rgba(255,255,255,0.05)"
          initial={{ y: 100 }}
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.svg>
    </div>
  );
};