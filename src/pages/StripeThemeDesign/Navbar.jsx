import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { motion } from "framer-motion";
import { sublinks } from "./data";

const Navbar = () => {
  const { openSideBar, openSubmenu } = useGlobalContext();

  const displaySubmenu = (event) => {
    const page = event.target.textContent;
    const tempBtn = event.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    const submenuWidth = 200;
    const adjustedLeft = center - submenuWidth / 2;

    openSubmenu(page, { center: adjustedLeft, bottom });
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-40 top-15 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-3xl font-bold text-primary">Stripe</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-6">
                {sublinks.map((item) => (
                  <motion.button
                    key={item.page}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    onMouseOver={displaySubmenu}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.page}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors duration-200"
            >
              Sign in
            </motion.button>
            <button
              className="md:hidden ml-4 text-gray-700"
              onClick={openSideBar}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
