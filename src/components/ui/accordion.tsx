"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronUp } from "@irsyadadl/paranoid";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="border-b border-stone-800">
      <AnimatePresence>
        <motion.div
          key="question"
          className="flex items-center w-full py-4 text-base md:text-lg cursor-pointer text-stone-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div className="">{question}</motion.div>
          <motion.div
            className="ml-auto"
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <IconChevronUp />
          </motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
            className="pt-2 pb-4 text-sm md:text-base text-stone-300"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
