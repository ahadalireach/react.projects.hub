/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUtensilSpoon,
  FaBacon,
  FaGlassCheers,
  FaFilter,
} from "react-icons/fa";
import MenuItem from "./MenuItem";
import {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
} from "./images";

const restaurantMenuItems = [
  {
    id: 1,
    name: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    image: item1,
    description: `Fluffy buttermilk pancakes served with maple syrup and butter`,
  },
  {
    id: 2,
    name: "Diner Double Burger",
    category: "lunch",
    price: 13.99,
    image: item2,
    description: `Classic double burger with all the traditional fixings`,
  },
  {
    id: 3,
    name: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    image: item3,
    description: `Massive milkshake that's sure to satisfy your sweet tooth`,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    image: item4,
    description: `Hearty breakfast platter with farm-fresh ingredients`,
  },
  {
    id: 5,
    name: "Egg Attack",
    category: "lunch",
    price: 22.99,
    image: item5,
    description: `Protein-packed lunch with creative egg preparations`,
  },
  {
    id: 6,
    name: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    image: item6,
    description: `Indulgent Oreo cookie milkshake`,
  },
  {
    id: 7,
    name: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    image: item7,
    description: `Bacon lovers' dream breakfast`,
  },
  {
    id: 8,
    name: "American Classic",
    category: "lunch",
    price: 12.99,
    image: item8,
    description: `Traditional American lunch favorites`,
  },
  {
    id: 9,
    name: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    image: item9,
    description: `Comfort shake to get you through tough times`,
  },
];

const generateCategories = (menuData) => {
  return ["all", ...new Set(menuData.map((item) => item.category))];
};

const MenuCategories = ({ onFilterCategories, availableCategories }) => {
  const categoryIcons = {
    breakfast: <FaBacon />,
    lunch: <FaUtensilSpoon />,
    shakes: <FaGlassCheers />,
    all: <FaFilter />,
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {availableCategories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onFilterCategories(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-4 py-2 bg-primary/10 text-primary
          rounded-full hover:bg-primary/20 transition-colors
          font-medium capitalize"
        >
          {categoryIcons[category] && (
            <span className="mr-2">{categoryIcons[category]}</span>
          )}
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

const RestaurantMenu = () => {
  const [filteredMenuItems, setFilteredMenuItems] =
    useState(restaurantMenuItems);
  const [menuCategories] = useState(generateCategories(restaurantMenuItems));

  const handleCategoryFilter = (selectedCategory) => {
    if (selectedCategory === "all") {
      setFilteredMenuItems(restaurantMenuItems);
      return;
    }

    const categoryFilteredItems = restaurantMenuItems.filter(
      (item) => item.category === selectedCategory
    );
    setFilteredMenuItems(categoryFilteredItems);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Restaurant Menu
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </motion.div>

        <MenuCategories
          onFilterCategories={handleCategoryFilter}
          availableCategories={menuCategories}
        />

        <AnimatePresence>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.main>
  );
};

export default RestaurantMenu;
