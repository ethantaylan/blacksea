import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { MdOutlineArrowDownward } from "react-icons/md";

/* eslint-disable react/no-unescaped-entities */
interface CollapseProps {
  title: string;
  content: ReactNode;
}

export function Collapse({ content, title }: CollapseProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div onClick={() => setIsChecked(!isChecked)}>
      <div className="flex justify-between text-5xl cursor-pointer">
        <p>{title}</p>

        <motion.div
          animate={{ rotate: isChecked ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <MdOutlineArrowDownward />
        </motion.div>
      </div>
      <AnimatePresence>
        {isChecked && (
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
    </div>
  );
}
