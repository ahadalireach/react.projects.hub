import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";
import logo from "./logo.svg";

const Sidebar = () => {
  const { isSideBar, closeSideBar } = useGlobalContext();

  const sidebarVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isSideBar && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSideBar}
            className="fixed inset-0 bg-black/50 z-30"
          />

          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-10 left-0 h-full w-64 bg-white shadow-custom z-40 overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b mt-5">
              <img src={logo} alt="logo" className="h-8" />
              <button
                onClick={closeSideBar}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FaTimes className="text-gray-600" />
              </button>
            </div>

            <nav className="p-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  custom={index}
                  variants={linkVariants}
                  className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <span className="text-primary">{link.icon}</span>
                  <span className="capitalize">{link.text}</span>
                </motion.a>
              ))}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
              <div className="flex justify-center gap-4">
                {social.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className="text-gray-400 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
