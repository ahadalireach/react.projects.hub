import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWandMagicSparkles, FaExclamation } from "react-icons/fa6";
import { paragraphs } from "./data";

const RandomTextGen = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const amount = parseInt(count);
    setAlert(false);

    if (amount <= 0 || amount > 12) {
      setAlert(true);
      setText([]);
    } else {
      setText(paragraphs.slice(0, amount));
    }
  };

  useEffect(() => {
    if (alert) {
      setCount(1);
    }
  }, [alert]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-100 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white w-full max-w-2xl rounded-xl shadow-custom p-8 space-y-6"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold text-center text-primary mb-6"
        >
          Tired Of Boring Lorem Ipsum?
        </motion.h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex-grow">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Number of Paragraphs:
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              min="1"
              max="12"
              value={count}
              onChange={(event) => setCount(event.target.value)}
              className="
                w-full px-4 py-2 border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-primary
                transition-all duration-300
              "
            />
          </div>
          <button
            type="submit"
            className="
              bg-primary text-white px-6 py-2 rounded-lg
              hover:bg-secondary transition-colors
              flex items-center justify-center space-x-2
              self-end
            "
          >
            <FaWandMagicSparkles />
            <span>Generate</span>
          </button>
        </form>

        <AnimatePresence>
          {alert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="
                bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg
                flex items-center space-x-3
              "
            >
              <FaExclamation className="text-red-500" />
              <p className="font-semibold">
                Please enter a number between 1 and 12
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <AnimatePresence>
            {text.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="text-gray-700 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RandomTextGen;
