/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { FaBirthdayCake } from "react-icons/fa";

const BirthdaysList = ({ allData }) => {
  return (
    <>
      <AnimatePresence>
        {allData.map((data) => {
          const { id, name, age, image } = data;
          return (
            <motion.article
              key={id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="flex items-center bg-white rounded-xl shadow-md p-4 mb-4 hover:shadow-lg transition-all"
            >
              <motion.img
                src={image}
                alt={name}
                className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-primary/30"
                whileHover={{ scale: 1.1 }}
              />
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
                <p className="text-gray-500 flex items-center">
                  <FaBirthdayCake className="w-4 h-4 mr-2 text-primary" />
                  {age} years old
                </p>
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>
    </>
  );
};

export default BirthdaysList;
