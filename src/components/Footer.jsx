import { motion } from "framer-motion";
import { socialLinks } from "./data";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">React Projects Hub</h3>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white text-center text-white">
          <p>
            &copy; {new Date().getFullYear()} React Projects Hub. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
