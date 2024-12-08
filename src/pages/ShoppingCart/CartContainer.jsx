import { useGlobalContext } from "./context";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingBag, FaTrashAlt } from "react-icons/fa";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-8 bg-gray-50"
      >
        <FaShoppingBag className="w-24 h-24 text-gray-300 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600">Add some items to get started!</p>
      </motion.div>
    );
  }

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6 mb-8">
            <AnimatePresence mode="wait">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.2 }}
                >
                  <CartItem {...item} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-custom p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Cart Summary</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-red-500 hover:text-red-700"
                onClick={clearCart}
              >
                <FaTrashAlt />
                <span>Clear Cart</span>
              </motion.button>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-gray-800 font-semibold">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Shipping:</span>
                <span className="text-gray-800 font-semibold">$5.99</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-gray-800">Total:</span>
                <span className="text-primary">
                  ${(total + 5.99).toFixed(2)}
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 bg-primary hover:bg-secondary text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartContainer;
