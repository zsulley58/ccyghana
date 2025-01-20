import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Executives = () => {
  // Sample data for executives
  const executives = [
    { name: 'Executive1', role: 'CEO', imgSrc: 'path/to/image1.jpg' },
    { name: 'Executive2', role: 'CTO', imgSrc: 'path/to/image2.jpg' },
    { name: 'Executive3', role: 'CFO', imgSrc: 'path/to/image3.jpg' },
    { name: 'Executive4', role: 'COO', imgSrc: 'path/to/image4.jpg' },
  ];

  return (
    <div className="bg-white py-10 h-[50rem]">
      <div className="max-w-7xl mx-auto px-6">
        <h1
          className="text-black font-bold flex items-center justify-center text-center"
          style={{
            height: '8rem',
            fontSize: '2rem',
            fontFamily: 'Big Shoulders Display, ExtraBold',
          }}
        >
          OUR EXECUTIVES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 h-[29rem]">
          {executives.slice(0, 3).map((exec, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center bg-white rounded-lg p-6 shadow-lg"
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow effect
                width: '100%', // Take full width within the grid column
              }}
            >
              <img
                src={exec.imgSrc}
                alt={exec.name}
                className="w-[15rem] h-[15rem] rounded-full object-cover border-8 border-gray-200"
              />
              <p className="mt-4 text-lg font-semibold text-black">{exec.name}</p>
              <p className="text-gray-600">{exec.role}</p>
              <div className="flex justify-center gap-4 mt-4 text-gray-700">
                <a href="#" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter size={24} />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Executives;
