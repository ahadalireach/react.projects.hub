/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timer);
  }, [removeAlert]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg ${
        type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
      }`}
    >
      <div className="flex items-center space-x-2">
        {type === "success" ? <FaCheckCircle /> : <FaTimesCircle />}
        <span>{msg}</span>
      </div>
    </motion.div>
  );
};

export default Alert;
