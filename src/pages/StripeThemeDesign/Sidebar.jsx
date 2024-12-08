import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { motion, AnimatePresence } from "framer-motion";
import { sublinks } from "./data";

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();

  return (
    <AnimatePresence>
      {isSideBarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-75"
            onClick={closeSideBar}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl"
          >
            <div className="h-full flex flex-col py-6 bg-white shadow-xl">
              <div className="px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Menu</h2>
                  <button
                    onClick={closeSideBar}
                    className="rounded-md text-gray-400 hover:text-gray-500"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6">
                {sublinks.map((item, index) => (
                  <div key={index} className="py-4">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {item.page}
                    </h3>
                    <div className="mt-3 space-y-2">
                      {item.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          <span className="mr-3">{link.icon}</span>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
