import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    image: "https://www.course-api.com/images/people/person-1.jpeg",
    name: "maria ferguson",
    title: "office manager",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
    rating: 4,
  },
  {
    id: 2,
    image: "https://www.course-api.com/images/people/person-4.jpeg",
    name: "john doe",
    title: "regular guy",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    rating: 5,
  },
  {
    id: 3,
    image: "https://www.course-api.com/images/people/person-3.jpeg",
    name: "peter smith",
    title: "product designer",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
    rating: 3,
  },
  {
    id: 4,
    image: "https://www.course-api.com/images/people/person-2.jpeg",
    name: "susan andersen",
    title: "the boss",
    quote:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.",
    rating: 4,
  },
];

function ReviewsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setDirection(1);
    }, 5000);
    return () => clearInterval(slider);
  }, []);

  const slideVariants = {
    enter: {
      x: direction > 0 ? 1000 : -1000,
      scale: 0.8,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      scale: 0.8,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setDirection(1);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    setDirection(-1);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`inline-block mx-1 ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative w-full max-w-2xl mx-auto">
          <AnimatePresence initial={false} mode="popLayout">
            {reviews.map(
              (review, currentIndex) =>
                currentIndex === index && (
                  <motion.div
                    key={review.id}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={slideVariants}
                    className="bg-white rounded-xl shadow-2xl p-8 text-center relative overflow-hidden"
                  >
                    <div className="relative mb-6">
                      <motion.img
                        src={review.image}
                        alt={review.name}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-500 shadow-md"
                      />
                      <FaQuoteRight className="absolute top-0 right-0 text-blue-500 opacity-20 text-4xl" />
                    </div>

                    <h4 className="text-2xl font-semibold text-gray-800 capitalize">
                      {review.name}
                    </h4>
                    <p className="text-blue-600 text-sm mb-2 uppercase tracking-wider">
                      {review.title}
                    </p>
                    <div className="mb-4">{renderStars(review.rating)}</div>
                    <p className="text-gray-600 italic text-base leading-relaxed">
                      &quot;{review.quote}&quot;
                    </p>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          <div className="flex justify-between absolute bottom-0 left-0 right-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition-colors"
            >
              <FiChevronLeft size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition-colors"
            >
              <FiChevronRight size={24} />
            </motion.button>
          </div>

          <div className="flex justify-center space-x-2 mt-20">
            {reviews.map((_, dotIndex) => (
              <motion.span
                key={dotIndex}
                onClick={() => {
                  setDirection(dotIndex > index ? 1 : -1);
                  setIndex(dotIndex);
                }}
                className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
                  index === dotIndex ? "bg-blue-500 w-6" : "bg-gray-300"
                }`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ReviewsSlider;
