import { useGlobalContext } from "./context.jsx";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const CartHead = () => {
  const { amount } = useGlobalContext();

  return (
    <div className="bg-secondary text-white px-4 py-3 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-xl font-semibold"
            >
              Your Shopping Cart
            </motion.h3>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-3 py-1 bg-white/20 rounded-full text-sm"
            >
              {amount} {amount === 1 ? "item" : "items"}
            </motion.div>
          </div>

          <motion.div
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShoppingCart className="h-6 w-6" />
            {amount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold"
              >
                {amount}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartHead;
