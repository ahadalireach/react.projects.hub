import { useReducer } from "react";
import { motion } from "framer-motion";
import { FaBirthdayCake, FaTrashAlt, FaRedo } from "react-icons/fa";
import BirthdaysList from "./BirthdaysList";

const birthdaysData = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: 36,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: 34,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];

const BirthdayTracker = () => {
  const reducer = (state, action) => {
    if (action.type === "CLEAR") {
      return { allData: [], isShow: !state.isShow };
    }
    if (action.type === "GET_DATA") {
      return { allData: birthdaysData, isShow: !state.isShow };
    }
    return state;
  };

  const [{ allData, isShow }, dispatch] = useReducer(reducer, {
    allData: birthdaysData,
    isShow: false,
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex justify-center items-center p-4"
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <header className="mb-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
            <FaBirthdayCake className="w-10 h-10 mr-3 text-primary" />
            {allData.length} Birthdays Today
          </h3>
        </header>

        <section className="mb-6">
          <BirthdaysList allData={allData} />
        </section>

        <div className="flex justify-center space-x-4">
          {allData.length > 0 && (
            <motion.button
              onClick={() => dispatch({ type: "CLEAR" })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              <FaTrashAlt className="w-5 h-5 mr-2" />
              Clear All
            </motion.button>
          )}

          {isShow && (
            <motion.button
              onClick={() => dispatch({ type: "GET_DATA" })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaRedo className="w-5 h-5 mr-2" />
              Restore BirthdaysList
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.main>
  );
};

export default BirthdayTracker;
