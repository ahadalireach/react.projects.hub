import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { motion, AnimatePresence } from "framer-motion";
const Modal = () => {
  const { isModal, closeModal } = useGlobalContext();

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    },
  };

  return (
    <AnimatePresence>
      {isModal && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50 z-40"
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="w-full max-w-md bg-white rounded-xl shadow-custom overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  Hi I&apos;m Ahad Ali!
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaTimes className="text-gray-600" />
                </button>
              </div>

              <div className="p-6">
                <p className="text-gray-600">
                  Full-stack developer and Software Engineer Based in Pakistan.
                </p>
              </div>

              <div className="flex justify-end gap-3 p-4 border-t bg-gray-50">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-primary text-white hover:bg-secondary rounded-lg transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
