import { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import { AnimatePresence, motion } from "framer-motion";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    if (submenu && location.center && location.bottom) {
      submenu.style.left = `${location.center}px`;
      submenu.style.top = `${location.bottom}px`;
    }
  }, [location]);

  return (
    <AnimatePresence>
      {isSubmenuOpen && (
        <motion.div
          ref={container}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute z-50 bg-white rounded-lg shadow-lg p-4 mt-10 min-w-[16rem]"
        >
          <h4 className="text-lg font-medium capitalize mb-3">{page}</h4>
          <div
            className={`grid gap-3 ${
              links.length > 3 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Submenu;
