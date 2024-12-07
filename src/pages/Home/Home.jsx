import { Link } from "react-router-dom";

const Home = () => {
  const projects = [
    { name: "Accordion", link: "/accordion", description: "" },
    { name: "Birthday Tracker", link: "/birthday-tracker", description: "" },
    { name: "Restaurant Menu", link: "/restaurant-menu", description: "" },
    { name: "Grocery Manager", link: "/grocery-manager", description: "" },
    { name: "Header Navigation", link: "/header-navigation", description: "" },
    {
      name: "Random Text Generator",
      link: "/random-text-generator",
      description: "",
    },
    { name: "Reviews Slider", link: "/reviews-slider", description: "" },
    { name: "Shopping Cart", link: "/shopping-cart", description: "" },
    { name: "Sidebar with Modal", link: "/sidebar-modal", description: "" },
    {
      name: "Stripe Theme Design",
      link: "/stripe-theme-design",
      description: "",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">React Mini Projects</h1>
          <p className="mt-2 text-lg">
            Explore cool mini projects built with React and TailwindCSS
          </p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-600">
                {project.name}
              </h2>
              <p className="mt-4 text-gray-600">
                A brief description of the {project.description} mini project.
              </p>
              <div className="mt-4">
                <Link
                  to={project.link}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2024 React Mini Projects. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
