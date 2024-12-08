/* eslint-disable react/prop-types */
import { useGlobalContext } from "./context.jsx";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartItem = ({ id, img, title, price, amount, index }) => {
  const { removeItem, increase, decrease } = useGlobalContext();

  return (
    <motion.article
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col md:flex-row items-center bg-white shadow-custom rounded-xl p-6 space-y-4 md:space-y-0 md:space-x-6"
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        src={img}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://commercial.bunn.com/img/image-not-available.png";
        }}
        className="w-32 h-32 object-cover rounded-lg"
      />

      <div className="flex-grow text-center md:text-left">
        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
        <p className="text-primary text-lg font-semibold">${price}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-red-500 hover:text-red-700 mt-2 mx-auto md:mx-0"
          onClick={() => removeItem(id)}
        >
          <FaTrash />
          <span>Remove</span>
        </motion.button>
      </div>
      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-secondary transition"
          onClick={() => increase(id)}
        >
          <FaPlus className="text-sm" />
        </motion.button>
        <p className="text-xl font-bold w-8 text-center">{amount}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-secondary transition"
          onClick={() => decrease(id)}
        >
          <FaMinus className="text-sm" />
        </motion.button>
      </div>
    </motion.article>
  );
};

export default CartItem;
