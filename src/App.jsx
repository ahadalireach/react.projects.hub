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
  ShoppingCart,
  SidebarWithModal,
  StripeThemeDesign,
} from "./pages";
import { Header, Footer } from "./components";
import { AppProvider as CartProvider } from "./pages/ShoppingCart/context";
import { AppProvider as SidebarProvider } from "./pages/SidebarWithModal/context";
import { AppProvider as StripeProvider } from "./pages/StripeThemeDesign/context";
import Sidebar from "./pages/SidebarWithModal/Sidebar";
import Modal from "./pages/SidebarWithModal/Modal";

function App() {
  return (
    <div className="app-container">
      <Header />
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
          <Route
            path="/shopping-cart"
            element={
              <CartProvider>
                <ShoppingCart />
              </CartProvider>
            }
          />
          <Route
            path="/sidebar-modal"
            element={
              <SidebarProvider>
                <SidebarWithModal />
                <Sidebar />
                <Modal />
              </SidebarProvider>
            }
          />
          <Route
            path="/stripe-theme-design"
            element={
              <StripeProvider>
                <StripeThemeDesign />
              </StripeProvider>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
