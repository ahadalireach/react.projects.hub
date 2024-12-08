/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === category.id
              ? "bg-primary text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  );
};

export default Categories;
