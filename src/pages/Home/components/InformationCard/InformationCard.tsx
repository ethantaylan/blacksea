import { motion } from "framer-motion";

interface InformationCardProps {
  title: string;
  description: string;
}

export const InformationCard = ({
  title,
  description,
}: InformationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-center md:text-left"
    >
      <p className="text-sm text-gray-400 mb-2">{title}</p>
      <p className="text-xl">{description}</p>
    </motion.div>
  );
};
