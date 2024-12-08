import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { useGlobalContext } from "./context";

const SidebarWithModal = () => {
  const { openModal, openSideBar } = useGlobalContext();

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="relative w-full max-w-4xl mx-auto">
        <motion.button
          className="fixed top-15 left-6 p-4 bg-white text-primary rounded-full shadow-lg hover:shadow-xl transition-shadow"
          onClick={openSideBar}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaBars className="text-xl" />
        </motion.button>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-custom"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-8" variants={containerVariants}>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome!</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore content through the sidebar or open the modal for quick
              actions. I have designed this interface to be intuitive and
              enjoyable to use.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={containerVariants}
          >
            <motion.button
              onClick={openSideBar}
              className="group flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-xl hover:bg-secondary transition-colors w-full sm:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaBars className="text-xl group-hover:rotate-180 transition-transform" />
              <span>Open Sidebar</span>
            </motion.button>

            <motion.button
              onClick={openModal}
              className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-colors w-full sm:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Show Modal
            </motion.button>
          </motion.div>

          <div className="absolute -z-10 inset-0">
            <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default SidebarWithModal;
