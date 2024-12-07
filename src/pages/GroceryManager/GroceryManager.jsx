import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

function GroceryManager() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "success", msg: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      showAlert(true, "danger", "Please enter a name of the product");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Value changed");
    } else {
      showAlert(true, "success", "Product Added To Cart");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const clearItems = () => {
    showAlert(true, "danger", "Empty List");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Product Deleted Successfully");
    setList(list.filter((item) => item.id !== id));
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-100 flex items-center justify-center p-4"
    >
      {alert.show && (
        <Alert {...alert} removeAlert={() => setAlert({ show: false })} />
      )}

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white w-full max-w-md rounded-xl shadow-custom p-6 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-primary mb-4">
          Grocery Bud
        </h1>

        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. eggs"
            value={name}
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors flex items-center space-x-2"
          >
            <FaPlus />
            <span>{isEditing ? "Edit" : "Add"}</span>
          </button>
        </form>

        {list.length > 0 && (
          <div className="mt-4">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button
              onClick={clearItems}
              className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Clear Items
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default GroceryManager;
