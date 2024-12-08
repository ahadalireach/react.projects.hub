/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

const GroceryList = ({ items, removeItem, editItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-2"
    >
      <AnimatePresence>
        {items.map((eachItem) => {
          const { id, title } = eachItem;
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-gray-700 flex-grow">{title}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => editItem(id)}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => removeItem(id)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <FaTrash />
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default GroceryList;
