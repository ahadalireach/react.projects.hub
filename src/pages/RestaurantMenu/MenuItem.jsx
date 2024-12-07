/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaDollarSign } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const { name, image, price, description } = item;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-primary/80 text-white px-3 py-1 rounded-full flex items-center">
          <FaDollarSign className="w-4 h-4 mr-1" />
          {price.toFixed(2)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.article>
  );
};

export default MenuItem;
