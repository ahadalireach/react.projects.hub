import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categories } from "./data";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import ProjectCard from "./ProjectCard";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-grow">
        <section className="bg-primary py-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4 text-center"
          >
            <h1 className="text-5xl font-bold mb-6">React Mini Projects</h1>
            <p className="text-xl text-blue-100 mb-8">
              A collection of handcrafted React components and mini-projects
            </p>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </motion.div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <Categories
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center text-center p-0 mt-20 mb-20 sm:mt-32 sm:mb-32"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                No projects match your search
              </h2>
              <p className="text-gray-600">
                Try different keywords or categories.
              </p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
