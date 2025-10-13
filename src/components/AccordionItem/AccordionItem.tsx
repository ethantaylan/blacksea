import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { MdOutlineArrowDownward } from "react-icons/md";

interface AccordionItemProps {
  title: string;
  content: ReactNode;
}

export function AccordionItem({ content, title }: AccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        className="flex justify-between text-5xl cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <p>{title}</p>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <MdOutlineArrowDownward />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            animate={{ height: "auto", opacity: 1, marginTop: "20px" }}
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2 },
              height: 0,
              marginTop: 0,
            }}
            className="text-2xl"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
