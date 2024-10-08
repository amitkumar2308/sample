import React from 'react';

function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center min-h-screen px-4 bg-gray-100 mt-0">
      
      {/* Left Card (Details about the school) */}
      <div className="bg-green-800 text-white p-8 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col justify-between min-h-[50vh] md:min-h-screen mt-5">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Shaping Leaders for Over a Century and Beyond
          </h1>
          <p className="text-lg md:text-xl mb-4">
          For over 155 years, Bishop Cotton School has nurtured generations with a commitment to excellence. We blend tradition with a forward-thinking approach, shaping students to lead with integrity in a changing world.
          </p>
         
          
        </div>
        <button className="bg-white text-green-500 py-2 px-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition duration-300">
          Discover More
        </button>
      </div>

      {/* Right Side (3D Model Area) */}
      <div className="w-full md:w-2/3 flex items-center justify-center bg-gray-300 rounded-lg min-h-[50vh] md:min-h-screen mt-5">
        {/* Replace the following div with your actual 3D model */}
        <p className="text-gray-600">3D Model Area</p>
      </div>
    </div>
  );
}

export default Home;
