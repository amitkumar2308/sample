import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function Welcome() {
  // Animation variants for heading
  const headingVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };

  // Animation variants for images and text
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const [animationState, setAnimationState] = useState({
    text1: false,
    text2: false,
    image1: false,
    image2: false,
  });

  const headingRef = useRef(null);
  const welcomeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Trigger animation when 20% of the section is visible
            setAnimationState({
              text1: true,
              text2: true,
              image1: true,
              image2: true,
            });
          } else {
            // Reset animation when scrolling out of view
            setAnimationState({
              text1: false,
              text2: false,
              image1: false,
              image2: false,
            });
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
    }

    return () => {
      if (welcomeRef.current) {
        observer.unobserve(welcomeRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" ref={welcomeRef}>
      
      {/* Top Heading with observer */}
      <div className="py-8 text-left" ref={headingRef}>
        {/* First part: Welcome to Bishop */}
        <motion.h2
          className="text-6xl font-extrabold text-green-800"
          initial="hidden"
          animate={animationState.text1 ? "visible" : "hidden"} // Re-trigger animation
          variants={headingVariants}
          transition={{ duration: 0.8 }}
        >
          Welcome to Bishop
        </motion.h2>

        {/* Second part: Cotton's Boys School! */}
        <motion.h2
          className="text-6xl font-extrabold text-green-800 mt-4"
          initial="hidden"
          animate={animationState.text1 ? "visible" : "hidden"} // Re-trigger animation
          variants={headingVariants}
          transition={{ duration: 1, delay: 0.5 }} // Delayed animation for second part
        >
          Cotton's Boys School!
        </motion.h2>
      </div>

      {/* Top Section: 50% Height */}
      <div className="flex flex-col md:flex-row w-full h-1/2 mt-4">
        
        {/* Left Side (Image) */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
          <motion.img
            src="https://bishopcottonshimla.com/php_assets/uploads/2023/11/DSC1781-1-scaled.jpg" // Replace with your image URL
            alt="School Building"
            className="object-cover rounded-lg shadow-lg w-full h-auto"
            initial="hidden"
            animate={animationState.image1 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Right Side (Text) */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
          <div>
            <motion.p
              className="text-lg leading-relaxed mb-4"
              initial="hidden"
              animate={animationState.text1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We are dedicated to providing quality education and fostering a supportive learning environment. 
              Our experienced staff and innovative curriculum empower students to achieve their full potential.
            </motion.p>
            <motion.p
              className="mt-4 text-lg leading-relaxed"
              initial="hidden"
              animate={animationState.text1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our school motto is <strong>NEC DEXTRORSUM, NEC SINISTRORSUM</strong>, which means "Neither to the right, nor to the left." 
              This signifies that a student must always keep going 'On Straight On' with focus and determination to achieve their goals.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom Section: 50% Height */}
      <div className="flex flex-col md:flex-row w-full h-1/2 mt-4">
        
        {/* Left Side (Text) */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
          <div>
            <motion.p
              className="text-lg leading-relaxed"
              initial="hidden"
              animate={animationState.text2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Any obstacle that comes in the path should be overcome with perseverance, 
              and one should not deviate from their ultimate aim in life.
            </motion.p>
            <motion.p
              className="mt-4 text-lg leading-relaxed"
              initial="hidden"
              animate={animationState.text2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Join us as we embark on a journey of knowledge and growth. Together, we can make a difference in the 
              lives of our students and the community.
            </motion.p>
            <motion.p
              className="mt-4 text-lg leading-relaxed"
              initial="hidden"
              animate={animationState.text2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Embracing innovation, we encourage our students to explore their passions and build skills for the future. 
              With a range of extracurricular activities, we ensure holistic development and lifelong learning.
            </motion.p>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
          <motion.img
            src="https://th.bing.com/th/id/OIP.iC_qily3RFlApR631QC_kQHaE7?rs=1&pid=ImgDetMain" // Replace with your image URL
            alt="School Grounds"
            className="object-cover rounded-lg shadow-lg w-full h-auto"
            initial="hidden"
            animate={animationState.image2 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      
    </div>
  );
}

export default Welcome;
