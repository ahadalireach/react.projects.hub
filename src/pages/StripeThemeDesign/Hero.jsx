import { motion } from "framer-motion";
import { useGlobalContext } from "./context";
import phone from "./phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div
      className="relative bg-white overflow-hidden"
      onMouseOver={closeSubmenu}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="z-10 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 w-full">
          <main className="mt-20 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Payments Infrastructure</span>
                <span className="block text-primary">For The Internet</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Millions of companies of all sizes use Stripe&apos;s software
                and APIs to accept payments, send payouts, and manage their
                businesses online.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-md shadow px-8 py-3 bg-primary text-white font-medium hover:bg-secondary transition-colors"
                >
                  Start now
                </motion.button>
              </div>
            </motion.div>
          </main>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2 mt-8 lg:mt-0 mb-4">
          <img src={phone} alt="Phone" className=" phone-img mt-16" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
