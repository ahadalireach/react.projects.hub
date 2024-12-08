/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{project.icon}</span>
          <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {project.name}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <Link
          to={project.link}
          className="inline-flex items-center text-primary hover:text-secondary font-medium hover:underline group"
        >
          View Project
          <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
