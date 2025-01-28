import React from 'react';

const Box = () => {
  return (
    <div className="w-[90rem] h-[25rem] bg-[#615f53] shadow-lg rounded-lg flex flex-col justify-center items-center text-center mx-auto">
      {/* Header */}
      <h2
        className="text-4xl font-bold mb-8 text-white"
        style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}
      >
        Please Contact Us if You Are Interested In Working For Us.
      </h2>

      {/* Button */}
      <button
        className="bg-yellow-500 text-[#615f53] px-8 py-3 rounded-lg text-lg font-bold hover:bg-yellow-600 transition-colors"
        style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}
      >
        CONTACT US
      </button>
    </div>
  );
};

export default Box;