/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <motion.article
      className="question border-2 border-primary/20 rounded-xl shadow-lg mb-4 overflow-hidden"
      initial={{ opacity: 0.9 }}
      whileHover={{ opacity: 1, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <header
        className="flex justify-between items-center p-4 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
        onClick={() => setShowInfo(!showInfo)}
      >
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <button
          className="text-primary hover:bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          aria-expanded={showInfo}
        >
          {showInfo ? (
            <AiOutlineMinus size={24} />
          ) : (
            <AiOutlinePlus size={24} />
          )}
        </button>
      </header>
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-gray-600"
          >
            <p className="border-t border-primary/20 pt-3">{info}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default Question;
