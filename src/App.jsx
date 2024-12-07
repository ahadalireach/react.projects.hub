import { Route, Routes } from "react-router-dom";
import {
  Home,
  AccordionMenu,
  BirthdayTracker,
  RestaurantMenu,
  GroceryManager,
  HeaderNavigation,
  RandomTextGen,
  ReviewsSlider,
} from "./pages";

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<AccordionMenu />} />
          <Route path="/birthday-tracker" element={<BirthdayTracker />} />
          <Route path="/restaurant-menu" element={<RestaurantMenu />} />
          <Route path="/grocery-manager" element={<GroceryManager />} />
          <Route path="/header-navigation" element={<HeaderNavigation />} />
          <Route path="/random-text-generator" element={<RandomTextGen />} />
          <Route path="/reviews-slider" element={<ReviewsSlider />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
