import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

const StripeThemeDesign = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </div>
  );
};

export default StripeThemeDesign;
