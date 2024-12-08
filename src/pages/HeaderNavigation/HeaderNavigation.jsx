import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import logo from "./logo.svg";

const HeaderNavigation = () => {
  const [showLinks, setShowLinks] = useState(false);

  const navVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="bg-white shadow-md min-h-96 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  shadow-lg">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-between items-center w-full lg:w-auto">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto hover:scale-105 transition-transform"
              />
            </Link>

            <button
              className="lg:hidden text-2xl text-primary focus:outline-none"
              onClick={() => setShowLinks(!showLinks)}
            >
              {showLinks ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <AnimatePresence>
            {(showLinks || window.innerWidth >= 1024) && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={navVariants}
                className={`${
                  showLinks ? "block" : "hidden"
                } absolute top-16 left-0 w-full lg:static lg:block bg-white lg:bg-transparent z-20`}
              >
                <motion.ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 items-center justify-center p-4 lg:p-0">
                  {links.map((link) => (
                    <motion.li
                      key={link.id}
                      variants={linkVariants}
                      className="text-center"
                    >
                      <Link
                        to={link.url}
                        className="text-gray-700 hover:text-primary capitalize transition-colors font-medium text-lg"
                        onClick={() => setShowLinks(false)}
                      >
                        {link.text}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="hidden lg:flex items-center space-x-4">
            {social.map((socialIcon) => (
              <a
                key={socialIcon.id}
                href={socialIcon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary text-xl transition-colors"
              >
                {socialIcon.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
