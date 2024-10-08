import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function Card() {
  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const [isVisible, setIsVisible] = useState([false, false, false]); // Track visibility of each card
  const cardRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true; // Set the corresponding card to visible
            return newVisible;
          });
        } else {
          setIsVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = false; // Allow the card to animate back out when out of view
            return newVisible;
          });
        }
      });
    }, options);

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card); // Observe each card
    });

    return () => {
      observer.disconnect(); // Clean up the observer on unmount
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900"> {/* Changed background color */}
      <div className="flex justify-around w-full md:w-3/4">
        {/* First Card: Excellence */}
        <motion.div
          ref={(el) => (cardRefs.current[0] = el)} // Attach ref to first card
          className="bg-white rounded-lg shadow-lg w-1/4 h-[60vh] overflow-hidden"
          initial="hidden"
          animate={isVisible[0] ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ duration: 1.0 }} // Adjust the transition duration
        >
          {/* Golden Top Section */}
          <div className="bg-yellow-500 h-[10%] flex items-center justify-center"> {/* Changed to golden */}
            <h3 className="text-2xl font-semibold text-white">Excellence</h3> {/* Increased font size */}
          </div>
          <div className="p-10 h-[90%] flex flex-col justify-center items-center">
            <img
              src="https://via.placeholder.com/150" // Replace with your image URL
              alt="Excellence"
              className="mb-4 w-32 h-32 object-cover rounded-full"
            />
            <p className="mt-2">Striving for excellence in everything we do.</p>
          </div>
        </motion.div>

        {/* Second Card: Success (Center Card) */}
        <motion.div
          ref={(el) => (cardRefs.current[1] = el)} // Attach ref to second card
          className="bg-white rounded-lg shadow-lg w-1/4 h-[60vh] overflow-hidden"
          initial="hidden"
          animate={isVisible[1] ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ duration: 0.5 }} // Adjust the transition duration
        >
          {/* Golden Top Section */}
          <div className="bg-yellow-500 h-[10%] flex items-center justify-center"> {/* Changed to golden */}
            <h3 className="text-2xl font-semibold text-white">Success</h3> {/* Increased font size */}
          </div>
          <div className="p-10 h-[90%] flex flex-col justify-center items-center">
            <img
              src="https://via.placeholder.com/150" // Replace with your image URL
              alt="Success"
              className="mb-4 w-32 h-32 object-cover rounded-full"
            />
            <p className="mt-2">Celebrating our successes and achievements.</p>
          </div>
        </motion.div>

        {/* Third Card: Creativity */}
        <motion.div
          ref={(el) => (cardRefs.current[2] = el)} // Attach ref to third card
          className="bg-white rounded-lg shadow-lg w-1/4 h-[60vh] overflow-hidden"
          initial="hidden"
          animate={isVisible[2] ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ duration: 1.0 }} // Adjust the transition duration
        >
          {/* Golden Top Section */}
          <div className="bg-yellow-500 h-[10%] flex items-center justify-center"> {/* Changed to golden */}
            <h3 className="text-2xl font-semibold text-white">Creativity</h3> {/* Increased font size */}
          </div>
          <div className="p-10 h-[90%] flex flex-col justify-center items-center">
            <img
              src="https://via.placeholder.com/150" // Replace with your image URL
              alt="Creativity"
              className="mb-4 w-32 h-32 object-cover rounded-full"
            />
            <p className="mt-2">Encouraging creativity and innovative thinking.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Card;
